import Image from "next/image";

export default function Gembloux2Apres() {
  const photosApres = [
    "/images/chantiers/gembloux-2/apres1.jpg",
    "/images/chantiers/gembloux-2/apres2.jpg",
    "/images/chantiers/gembloux-2/apres3.jpg",
    "/images/chantiers/gembloux-2/apres4.jpg",
    "/images/chantiers/gembloux-2/apres5.jpg",
    "/images/chantiers/gembloux-2/apres6.jpg",
    "/images/chantiers/gembloux-2/apres7.jpg",
  ];

  return (
  <main className="min-h-screen bg-neutral-900 text-white px-6 py-10">
    {/* 🔴 Bouton retour à l'accueil */}
    <div className="flex justify-end mb-6">
      <a
        href="/"
        className="px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition duration-200"
      >
        ⟵ Retour à l’accueil
      </a>
    </div>

  <div className="max-w-5xl mx-auto">

        <h1 className="text-3xl font-bold mb-4 text-center">
          Chantier 50302 — Après rénovation
        </h1>

        <p className="text-neutral-300 text-center mb-10">
         Sur ce chantier, nous avons traité l’ensemble des dégâts d’humidité visibles sur les murs en
  appliquant des produits spécialisés anti-infiltration et anti-salpêtre, puis
  restauré les surfaces avec un plâtre de finition avant une peinture de
  protection adaptée. Dans la salle de bain — zone la plus touchée — nous avons
  assaini les supports, mis en place des évacuations supplémentaires afin de
  réduire l’humidité ambiante, et rétabli une ventilation correcte. Nous avons
  également installé une cuisine sur mesure. Le logement retrouve ainsi des
  parois saines, des finitions durables et un confort d’usage nettement amélioré. 
        </p>
<h2 className="text-2xl font-semibold mb-4 mt-10">Vidéo — Après rénovation</h2>
<div className="relative w-full max-w-3xl mx-auto my-8 rounded-xl overflow-hidden shadow-md">
  <div className="aspect-video">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube-nocookie.com/embed/AB2lknP3NAQ?rel=0&modestbranding=1&playsinline=1"
      title="Chantier Gembloux 2 — Après rénovation"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>


        {/* Galerie de photos */}
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Photos après rénovation
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photosApres.map((src, i) => (
            <figure key={src} className="rounded-lg overflow-hidden border border-neutral-700">
              <Image
                src={src}
                alt={`Chantier Gembloux 50302 — après ${i + 1}`}
                width={900}
                height={700}
                className="w-full h-auto object-cover"
              />
            </figure>
          ))}
        </div>

        {/* Lien vers la page "Avant" */}
        <div className="flex justify-center mt-10">
          <a
            href="/chantiers/gembloux-2/avant"
            className="px-4 py-2 bg-neutral-800 text-white rounded-xl text-sm font-medium hover:opacity-90 transition"
          >
            ← Voir avant rénovation
          </a>
        </div>
      </div>
    </main>
  );
}
