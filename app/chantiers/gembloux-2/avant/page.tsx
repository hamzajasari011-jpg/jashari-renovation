import React from "react";

export default function ChantierGembloux2Avant() {
  const photosAvant = [
    "/images/chantiers/gembloux-2/avant1.jpg",
    "/images/chantiers/gembloux-2/avant2.jpg",
    "/images/chantiers/gembloux-2/avant3.jpg",
    "/images/chantiers/gembloux-2/avant4.jpg",
    "/images/chantiers/gembloux-2/avant5.jpg",
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
          </a>
        </div>
      </div>
    </main>
  );
}
