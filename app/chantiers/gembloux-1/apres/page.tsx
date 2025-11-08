<<<<<<< HEAD
import React from "react";
=======
"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)

export default function ChantierGembloux1Apres() {
  const photos = [
    "/images/chantiers/gembloux-1/apres1.jpg",
    "/images/chantiers/gembloux-1/apres2.jpg",
    "/images/chantiers/gembloux-1/apres3.jpg",
    "/images/chantiers/gembloux-1/apres4.jpg",
    "/images/chantiers/gembloux-1/apres5.jpg",
    "/images/chantiers/gembloux-1/apres6.jpg",
  ];

<<<<<<< HEAD
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

        {/* Titre et description */}
        <h1 className="text-3xl font-bold mb-6">
          Chantier Gembloux 50301 — Après rénovation
        </h1>

        <p className="text-neutral-300 mb-8 leading-relaxed max-w-3xl">
          Après la rénovation, le logement présente désormais une isolation
          thermique et acoustique performante, un sol parfaitement stabilisé, un
          plafond rénové avec des finitions modernes, ainsi qu’une peinture
          uniforme et élégante. Les poutres ont été restaurées, le toit et les
          gouttières entièrement nettoyés, et de nouveaux points électriques ont
          été installés pour améliorer le confort quotidien.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-10">Vidéo — Après rénovation</h2>
<div className="relative w-full max-w-3xl mx-auto my-8 rounded-xl overflow-hidden shadow-md">
  <div className="aspect-video">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube-nocookie.com/embed/lTzULBgvkso?rel=0&modestbranding=1&playsinline=1"
      title="Chantier Gembloux 1 — Après rénovation"
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
</div>


        {/* Galerie photos */}
        <h2 className="text-2xl font-semibold mb-4">Photos — Après</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <div
              key={src}
              className="rounded-lg overflow-hidden border border-neutral-700"
            >
              <img
                src={src}
                alt={`Chantier Gembloux 1 — après #${i + 1}`}
                className="w-full h-56 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

=======
  // 🔥 Lightbox state
  const [index, setIndex] = useState(-1);

  return (
    <main className="min-h-screen bg-neutral-900 text-white px-6 py-10 scroll-smooth">
      {/* 🔴 Bouton retour à la section “Nos réalisations” */}
      <div className="flex justify-end mb-6">
        <a
          href="/#projets"
          className="px-4 py-2 bg-red-600 text-white rounded-xl text-sm font-semibold hover:bg-red-700 transition duration-300"
        >
          Retour à l'acceuil
        </a>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Titre et description */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          Chantier Gembloux 50301 — Après rénovation
        </h1>

        <p className="text-neutral-300 mb-8 leading-relaxed max-w-3xl mx-auto text-center">
          Après la rénovation, le logement présente désormais une isolation thermique et
          acoustique performante, un sol parfaitement stabilisé, un plafond rénové avec des
          finitions modernes, ainsi qu’une peinture uniforme et élégante. Les poutres ont été
          restaurées, le toit et les gouttières entièrement nettoyés, et de nouveaux points
          électriques ont été installés pour améliorer le confort quotidien.
        </p>

        {/* Vidéo */}
        <h2 className="text-2xl font-semibold mb-4 mt-10 text-center">
          Vidéo — Après rénovation
        </h2>
        <div className="relative w-full max-w-3xl mx-auto my-8 rounded-xl overflow-hidden shadow-md">
          <div className="aspect-video">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube-nocookie.com/embed/lTzULBgvkso?rel=0&modestbranding=1&playsinline=1"
              title="Chantier Gembloux 1 — Après rénovation"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Galerie photos interactive */}
        <h2 className="text-2xl font-semibold mb-4 text-center">Photos — Après</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {photos.map((src, i) => (
            <figure
              key={src}
              onClick={() => setIndex(i)}
              className="rounded-lg overflow-hidden border border-neutral-700 cursor-pointer hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                src={src}
                alt={`Chantier Gembloux 1 — après ${i + 1}`}
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
          slides={photos.map((src) => ({ src }))}
        />

>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
        {/* Bouton vers la page "Avant" */}
        <div className="mt-8 flex justify-center">
          <a
            href="/chantiers/gembloux-1/avant"
<<<<<<< HEAD
            className="inline-flex items-center rounded-lg bg-neutral-800 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-neutral-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500"
=======
            className="inline-flex items-center rounded-lg bg-neutral-800 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-neutral-700 transition duration-300"
>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
          >
            ← Voir avant rénovation
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
