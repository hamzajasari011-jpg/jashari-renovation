<<<<<<< HEAD
import React from "react";
=======
"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)

export default function ChantierGembloux2Avant() {
  const photosAvant = [
    "/images/chantiers/gembloux-2/avant1.jpg",
    "/images/chantiers/gembloux-2/avant2.jpg",
    "/images/chantiers/gembloux-2/avant3.jpg",
    "/images/chantiers/gembloux-2/avant4.jpg",
    "/images/chantiers/gembloux-2/avant5.jpg",
<<<<<<< HEAD
  ];

  return (
    <main className="min-h-screen bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Bouton retour à l'accueil */}
        <div className="flex justify-end mb-6">
          <a
            href="/"
            className="px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition duration-200"
          >
            ⟵ Retour à l’accueil
          </a>
        </div>

        <h1 className="text-3xl font-bold mb-6">Chantier 50302 – Avant rénovation</h1>

        <p className="text-neutral-300 mb-8 leading-relaxed max-w-3xl">
          Avant les travaux, les lieux avaient été fortement impactés par une fuite d’eau
          provenant des appartements adjacents. L’habitation était devenue insalubre en
          raison d’un taux d’humidité anormalement élevé, avec des traces d’infiltration,
          de moisissures et des enduits dégradés sur plusieurs parois. La salle de bain était la
          zone la plus touchée : nous avons dû la reprendre entièrement (dépose, assainissement,
          traitement anti-humidité, replafonnage et finitions adaptées). Le projet visait aussi à
          rétablir une ventilation efficace, sécuriser les réseaux (évacuations supplémentaires),
          et préparer une remise en état complète des surfaces afin de retrouver un intérieur sain
          et durable.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-10">Vidéo — Avant rénovation</h2>
<div className="relative w-full max-w-3xl mx-auto my-8 rounded-xl overflow-hidden shadow-md">
  <div className="aspect-video">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube-nocookie.com/embed/vZs3Yg--PBM?rel=0&modestbranding=1&playsinline=1"
      title="Chantier Gembloux 2 — Avant rénovation"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>


        {/* Galerie photos */}
        <h2 className="text-2xl font-semibold mb-4">Photos — Avant</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photosAvant.map((src, i) => (
            <div
              key={src}
              className="rounded-lg overflow-hidden border border-neutral-700"
            >
              <img
                src={src}
                alt={`Chantier Gembloux 2 — avant #${i + 1}`}
                className="w-full h-56 md:h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Bouton vers la page "Après" (sous la grille) */}
        <div className="mt-8 flex justify-center">
          <a
            href="/chantiers/gembloux-2/apres"
            className="inline-flex items-center rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            Voir après les travaux
=======
    "/images/chantiers/gembloux-2/avant6.jpg",
  ];

  // 🔥 Lightbox state
  const [index, setIndex] = useState(-1);

  return (
    <main className="min-h-screen bg-neutral-900 text-white px-6 py-10">
      {/* 🔴 Bouton retour à la section “réalisations” */}
      <div className="flex justify-end mb-6">
        <a
          href="/#projets"
          className="px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition duration-300 scroll-smooth"
        >
          Retour à l'acceuil
        </a>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Titre */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Chantier 50302 — Avant rénovation
        </h1>

        {/* Texte descriptif */}
        <p className="text-neutral-300 mb-8 leading-relaxed text-center max-w-3xl mx-auto">
          Avant les travaux, les lieux avaient été fortement impactés par une fuite d’eau
          provenant des appartements adjacents. L’habitation était devenue insalubre en
          raison d’un taux d’humidité anormalement élevé, avec des traces d’infiltration,
          de moisissures et des enduits dégradés sur plusieurs parois. La salle de bain
          était la zone la plus touchée : nous avons dû la reprendre entièrement (dépose,
          assainissement, traitement anti-humidité, replafonnage et finitions adaptées).
          Le projet visait aussi à rétablir une ventilation efficace, sécuriser les réseaux
          (évacuations supplémentaires), et préparer une remise en état complète des
          surfaces afin de retrouver un intérieur sain et durable.
        </p>

        {/* Vidéo */}
        <h2 className="text-2xl font-semibold mb-4 mt-10 text-center">
          Vidéo — Avant rénovation
        </h2>

        <div className="relative w-full max-w-3xl mx-auto my-8 rounded-xl overflow-hidden shadow-md">
          <div className="aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/vZs3Yg--PBM?rel=0&modestbranding=1&playsinline=1"
              title="Chantier Gembloux 2 — Avant rénovation"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Galerie interactive */}
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
                alt={`Chantier Gembloux 2 — avant ${i + 1}`}
                width={900}
                height={700}
                className="w-full h-auto object-cover"
              />
            </figure>
          ))}
        </div>

        {/* Lightbox */}
        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          slides={photosAvant.map((src) => ({ src }))}
        />

        {/* Lien vers la page "Après" */}
        <div className="flex justify-center mt-10">
          <a
            href="/chantiers/gembloux-2/apres"
            className="px-4 py-2 bg-neutral-800 text-white rounded-xl text-sm font-medium hover:bg-neutral-700 transition duration-300"
          >
            Voir après rénovation →
>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
          </a>
        </div>
      </div>
    </main>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
