"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function ChantierGembloux1Avant() {
  const photosAvant = [
    "/images/chantiers/gembloux-1/avant1.jpg",
    "/images/chantiers/gembloux-1/avant2.jpg",
    "/images/chantiers/gembloux-1/avant3.jpg",
    "/images/chantiers/gembloux-1/avant4.jpg",
    "/images/chantiers/gembloux-1/avant5.jpg",
    "/images/chantiers/gembloux-1/avant6.jpg",
    "/images/chantiers/gembloux-1/avant7.jpg",
    "/images/chantiers/gembloux-1/avant8.jpg",
  ];

  const [index, setIndex] = useState(-1);

  return (
    <main className="min-h-screen bg-neutral-900 text-white px-6 py-10 scroll-smooth">
      {/* 🔙 Bouton retour */}
      <div className="flex justify-end mb-6">
        <Link
          href="/#projets"
          className="px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition duration-300"
        >
          Retour à l’accueil
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* 🏗️ Titre */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Chantier Gembloux 50301 – Avant rénovation
        </h1>

        {/* 📖 Description */}
        <p className="text-neutral-300 mb-4 leading-relaxed max-w-3xl mx-auto text-center">
          Dans ce grenier, le plancher grinçait anormalement et l’ensemble du parquet était à
          reprendre. Les poutres nécessitaient un rafraîchissement, les murs une préparation
          soignée et une mise en peinture complète. Nous avons également modernisé l’installation
          électrique (ajout de prises et points lumineux) pour répondre aux besoins actuels.
        </p>

        <p className="text-neutral-300 mb-8 leading-relaxed max-w-3xl mx-auto text-center">
          La salle de bain a été entièrement repensée malgré les contraintes d’espace. Côté
          extérieur, la toiture était couverte de mousse et les évacuations/gouttières obstruées,
          ce qui avait provoqué des infiltrations jusque dans les appartements inférieurs. Après
          nettoyage, remise en état et traitements adaptés, la structure a été sécurisée pour des
          finitions durables.
        </p>

        {/* 🎥 Vidéo */}
        <h2 className="text-2xl font-semibold mb-4 mt-10 text-center">
          Vidéo — Avant rénovation
        </h2>
        <div className="relative w-full max-w-3xl mx-auto my-8 rounded-xl overflow-hidden shadow-md">
          <div className="aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/eA5r4FQbjzo?rel=0&modestbranding=1&playsinline=1"
              title="Chantier Gembloux 1 — Avant rénovation"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* 🖼️ Galerie */}
        <h2 className="text-2xl font-semibold mb-4 text-center">Photos — Avant</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photosAvant.map((src, i) => (
            <figure
              key={src}
              onClick={() => setIndex(i)}
              className="rounded-lg overflow-hidden border border-neutral-700 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`Chantier Gembloux 1 — avant ${i + 1}`}
                width={900}
                height={700}
                className="w-full h-auto object-cover"
              />
            </figure>
          ))}
        </div>

        {/* 💡 Lightbox */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photosAvant.map((src) => ({ src }))}
        />

        {/* 🔜 Lien vers page "Après" */}
        <div className="mt-8 flex justify-center">
          <Link
            href="/chantiers/gembloux-1/apres"
            className="inline-flex items-center rounded-lg bg-neutral-800 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-neutral-700 transition duration-300"
          >
            Voir après les travaux →
          </Link>
        </div>
      </div>
    </main>
  );
}