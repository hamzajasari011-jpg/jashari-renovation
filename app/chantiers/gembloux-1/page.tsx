"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const CHANTIER = {
  id: "50301",
  title: "Rénovation complète – Grenier & Salle de bain",
  location: "Gembloux, Province de Namur",
  tags: ["Parquet", "Peinture", "Salle de bain", "Toiture", "Électricité"],
  avant: {
    description:
      "Dans ce grenier, le plancher grinçait anormalement et l'ensemble du parquet était à reprendre. Les poutres nécessitaient un rafraîchissement, les murs une préparation soignée et une mise en peinture complète. Nous avons également modernisé l'installation électrique. La salle de bain a été entièrement repensée malgré les contraintes d'espace. Côté extérieur, la toiture était couverte de mousse et les gouttières obstruées, ce qui avait provoqué des infiltrations jusque dans les appartements inférieurs.",
    videoSrc:
      "https://www.youtube-nocookie.com/embed/eA5r4FQbjzo?rel=0&modestbranding=1&playsinline=1",
    videoTitle: "Chantier Gembloux 50301 — Avant rénovation",
    photos: [
      "/images/chantiers/gembloux-1/avant1.jpg",
      "/images/chantiers/gembloux-1/avant2.jpg",
      "/images/chantiers/gembloux-1/avant3.jpg",
      "/images/chantiers/gembloux-1/avant4.jpg",
      "/images/chantiers/gembloux-1/avant5.jpg",
      "/images/chantiers/gembloux-1/avant6.jpg",
      "/images/chantiers/gembloux-1/avant7.jpg",
      "/images/chantiers/gembloux-1/avant8.jpg",
    ],
  },
  apres: {
    description:
      "Après la rénovation, le logement présente désormais une isolation thermique et acoustique performante, un sol parfaitement stabilisé, un plafond rénové avec des finitions modernes, ainsi qu'une peinture uniforme et élégante. Les poutres ont été restaurées, le toit et les gouttières entièrement nettoyés, et de nouveaux points électriques ont été installés pour améliorer le confort quotidien.",
    videoSrc:
      "https://www.youtube-nocookie.com/embed/lTzULBgvkso?rel=0&modestbranding=1&playsinline=1",
    videoTitle: "Chantier Gembloux 50301 — Après rénovation",
    photos: [
      "/images/chantiers/gembloux-1/apres1.jpg",
      "/images/chantiers/gembloux-1/apres2.jpg",
      "/images/chantiers/gembloux-1/apres3.jpg",
      "/images/chantiers/gembloux-1/apres4.jpg",
      "/images/chantiers/gembloux-1/apres5.jpg",
      "/images/chantiers/gembloux-1/apres6.jpg",
    ],
  },
};

export default function ChantierGembloux1() {
  const [tab, setTab] = useState<"avant" | "apres">("avant");
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("tab") === "apres") setTab("apres");
  }, []);

  const current = tab === "avant" ? CHANTIER.avant : CHANTIER.apres;

  function switchTab(next: "avant" | "apres") {
    setTab(next);
    setLightboxIndex(-1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <main className="min-h-screen bg-neutral-900 text-white">

      {/* ── En-tête ── */}
      <div className="border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 py-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs text-neutral-400 uppercase tracking-widest mb-1">
              {CHANTIER.location}
            </p>
            <h1 className="text-2xl md:text-3xl font-bold leading-snug">
              {CHANTIER.title}
            </h1>
            <div className="flex flex-wrap gap-1.5 mt-3">
              {CHANTIER.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-full text-xs bg-neutral-800 text-neutral-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <Link
            href="/#projets"
            className="shrink-0 px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition"
          >
            ← Retour
          </Link>
        </div>
      </div>

      {/* ── Onglets ── */}
      <div className="sticky top-0 z-20 bg-neutral-900/95 backdrop-blur border-b border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 flex">
          {(["avant", "apres"] as const).map((t) => (
            <button
              key={t}
              onClick={() => switchTab(t)}
              className={`px-6 py-4 text-sm font-semibold border-b-2 transition-all ${
                tab === t
                  ? "border-red-600 text-white"
                  : "border-transparent text-neutral-400 hover:text-white"
              }`}
            >
              {t === "avant" ? "Avant rénovation" : "Après rénovation"}
              <span className="ml-2 text-xs px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-500">
                {CHANTIER[t].photos.length} photos
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* ── Description ── */}
        <p className="text-neutral-300 leading-relaxed max-w-3xl mx-auto text-center text-[15px] mb-12">
          {current.description}
        </p>

        {/* ── Vidéo ── */}
        <div className="mb-4 text-center">
          <span className="inline-block px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-semibold uppercase tracking-widest">
            Vidéo — {tab === "avant" ? "avant" : "après"} rénovation
          </span>
        </div>
        <div className="relative w-full max-w-3xl mx-auto mb-14 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10">
          <div className="aspect-video">
            <iframe
              key={tab}
              className="absolute inset-0 w-full h-full"
              src={current.videoSrc}
              title={current.videoTitle}
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>

        {/* ── Galerie ── */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-lg font-bold">
            Photos —{" "}
            <span className="text-red-500">
              {tab === "avant" ? "Avant" : "Après"}
            </span>
          </h2>
          <span className="text-xs text-neutral-500">
            Cliquez pour agrandir
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {current.photos.map((src, i) => (
            <figure
              key={src}
              onClick={() => setLightboxIndex(i)}
              className="relative rounded-xl overflow-hidden border border-neutral-800 cursor-pointer group hover:border-red-600/60 transition-all duration-300"
            >
              <Image
                src={src}
                alt={`Photo ${i + 1}`}
                width={900}
                height={700}
                className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white text-xs font-semibold bg-black/60 px-3 py-1 rounded-full">
                  Agrandir
                </span>
              </div>
            </figure>
          ))}
        </div>

        <Lightbox
          open={lightboxIndex >= 0}
          index={lightboxIndex}
          close={() => setLightboxIndex(-1)}
          slides={current.photos.map((src) => ({ src }))}
        />

        {/* ── Bouton switch ── */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => switchTab(tab === "avant" ? "apres" : "avant")}
            className="px-6 py-3 rounded-xl bg-neutral-800 text-white text-sm font-semibold hover:bg-red-600 transition-colors duration-300"
          >
            {tab === "avant"
              ? "Voir après rénovation →"
              : "← Voir avant rénovation"}
          </button>
        </div>
      </div>
    </main>
  );
}
