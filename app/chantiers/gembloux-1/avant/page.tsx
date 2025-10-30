import React from "react";

export default function ChantierGembloux1Avant() {
  const photosAvant = [
    "/images/chantiers/gembloux-1/avant1.jpg",
    "/images/chantiers/gembloux-1/avant2.jpg",
    "/images/chantiers/gembloux-1/avant3.jpg",
    "/images/chantiers/gembloux-1/avant4.jpg",
    "/images/chantiers/gembloux-1/avant5.jpg",
    "/images/chantiers/gembloux-1/avant6.jpg",
    "/images/chantiers/gembloux-1/avant7.jpg",
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

        {/* Titre et description */}
        <h1 className="text-3xl font-bold mb-6">
          Chantier Gembloux 50301 – Avant rénovation
        </h1>

        <p className="text-neutral-300 mb-4 leading-relaxed max-w-3xl">
          Dans ce grenier, le plancher grinçait anormalement et l’ensemble du parquet
          était à reprendre. Les poutres nécessitaient un rafraîchissement, les murs une
          préparation soignée et une mise en peinture complète. Nous avons également
          modernisé l’installation électrique (ajout de prises et points lumineux) pour
          répondre aux besoins actuels.
        </p>

        <p className="text-neutral-300 mb-8 leading-relaxed max-w-3xl">
          La salle de bain a été entièrement repensée malgré les contraintes d’espace.
          Côté extérieur, la toiture était couverte de mousse et les évacuations/gouttières
          obstruées, ce qui avait provoqué des infiltrations jusque dans les appartements
          inférieurs. Après nettoyage, remise en état et traitements adaptés, la structure
          a été sécurisée pour des finitions durables.
        </p>
        <h2 className="text-2xl font-semibold mb-4 mt-10">Vidéo — Avant rénovation</h2>
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
                alt={`Chantier Gembloux 1 — avant #${i + 1}`}
                className="w-full h-56 md:h-64 object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Bouton vers la page "Après" */}
        <div className="mt-8 flex justify-center">
          <a
            href="/chantiers/gembloux-1/apres"
            className="inline-flex items-center rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
          >
            Voir après les travaux
          </a>
        </div>
      </div>
    </main>
  );
}
