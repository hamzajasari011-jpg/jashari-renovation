// tools/optimize-images.mjs
import sharp from "sharp";
import { glob } from "glob";
import fs from "fs/promises";
import path from "path";
import pLimit from "p-limit";

const MAX_DIM = 1600;       // plus grande dimension max (px)
const JPEG_QUALITY = 72;    // qualité JPEG (bon équilibre poids/qualité)
const CONCURRENCY = 4;      // nombre de conversions en parallèle

// Tous les JPG/JPEG/PNG sous public/images/**
const patterns = [
  "public/images/**/*.{jpg,jpeg,png,JPG,JPEG,PNG}",
];

const files = (await glob(patterns, { nodir: true })).sort();
if (files.length === 0) {
  console.log("Aucune image trouvée sous public/images/");
  process.exit(0);
}

console.log(`🖼  ${files.length} image(s) trouvée(s). Optimisation en cours…`);

const limit = pLimit(CONCURRENCY);

const optimizeOne = async (file) => {
  const ext = path.extname(file).toLowerCase();
  const tmp = file + ".tmp";

  try {
    const img = sharp(file).rotate(); // respecte l’orientation EXIF
    const meta = await img.metadata();

    // Redimensionne en respectant le ratio, sans agrandir si plus petit
    const resizeOptions = {
      width: MAX_DIM,
      height: MAX_DIM,
      fit: "inside",
      withoutEnlargement: true,
    };

    let pipeline = img.resize(resizeOptions);

    if (ext === ".jpg" || ext === ".jpeg") {
      pipeline = pipeline.jpeg({
        quality: JPEG_QUALITY,
        mozjpeg: true,
        progressive: true,
      });
    } else if (ext === ".png") {
      // Pour PNG : palette + compression
      pipeline = pipeline.png({
        compressionLevel: 9,
        palette: true,
      });
    }

    await pipeline.toFile(tmp);

    // Remplace l’original par la version optimisée
    await fs.rename(tmp, file);

    const after = await sharp(file).metadata();

    const beforeSize = meta.size ?? 0;
    const afterSize = after.size ?? 0;
    const saved = beforeSize && afterSize ? ((beforeSize - afterSize) / beforeSize) * 100 : 0;

    console.log(
      `✅ ${file}  →  ${Math.round(after.width || 0)}x${Math.round(after.height || 0)}`
      + (beforeSize ? `  (−${saved.toFixed(1)}%)` : "")
    );
  } catch (err) {
    // Nettoie le .tmp si erreur
    try { await fs.unlink(tmp); } catch {}
    console.error(`❌ Erreur sur ${file}:`, err.message);
  }
};

await Promise.all(files.map(f => limit(() => optimizeOne(f))));

console.log("✨ Optimisation terminée !");
