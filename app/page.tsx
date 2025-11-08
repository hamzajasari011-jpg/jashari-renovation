"use client";
<<<<<<< HEAD
import { useState } from "react";
=======

>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const SERVICES = [
<<<<<<< HEAD
  {
    title: "Rénovation intérieure",
    summary:
      "Remise à neuf complète des pièces de vie avec finitions propres et durables.",
    bullets: [
      "Cloisons & faux-plafonds (placo, rails, isolation acoustique)",
      "Plafonnage & enduits, préparation des supports",
      "Peinture murs, plafonds et boiseries",
      "Cuisine & salle de bain clé en main (hors électroménager)",
    ],
    leadTime: "Démarrage sous 2–4 semaines",
    emoji: "🏠",
  },
  {
    title: "Maçonnerie & structure",
    summary:
      "Ouvertures, reprises en sous-œuvre et petits ouvrages béton selon les règles de l’art.",
    bullets: [
      "Ouverture de murs porteurs (avec poutre IPN/HEB)",
      "Dalles, seuils et petites fondations",
      "Extensions légères, murets et briquetage",
      "Rejointoiement & réparations structurelles localisées",
    ],
    leadTime: "Étude préalable + planning",
    emoji: "🧱",
  },
  {
    title: "Carrelage & sols",
    summary:
      "Pose précise et durable pour pièces sèches et humides, finitions soignées.",
    bullets: [
      "Carrelage & faïence (formats standard & grands formats)",
      "Préparation chape/primaires, ragréage si nécessaire",
      "Joints hydrofuges & plinthes assorties",
      "Pose de parquet stratifié ou contrecollé",
    ],
    leadTime: "Intervention rapide",
    emoji: "🧩",
  },
  {
    title: "Toiture & isolation",
    summary:
      "Entretien, réparations ciblées et isolation performante des combles.",
    bullets: [
      "Réparation tuiles/ardoises, zinguerie & étanchéité",
      "Pose ou renfort d’isolant (laine minérale, PIR, etc.)",
      "Fenêtres de toit (type Velux), bavettes & raccords",
      "Nettoyage, anti-mousse et gouttières",
    ],
    leadTime: "Selon météo et accès",
    emoji: "🏗️",
  },
  {
    title: "Menuiserie légère",
    summary:
      "Ajustements et poses propres pour améliorer confort et finitions.",
    bullets: [
      "Portes intérieures & habillages, plinthes",
      "Remplacement ou pose de châssis",
      "Placards simples & rangements sur mesure",
      "Tablettes, seuils & finitions diverses",
    ],
    leadTime: "Planning flexible",
    emoji: "🪵",
  },
  {
    title: "Électricité & plomberie",
    summary:
      "Petits travaux et mises en conformité locales pour une installation fiable.",
    bullets: [
      "Remplacement d’appareillages (prises, interrupteurs, luminaires)",
      "Création de points d’eau, robinets et petits dépannages",
      "Remise en ordre localisée (coffret, différentiels – selon état)",
      "Installation ou remplacement de sanitaires",
    ],
    leadTime: "Dépannage rapide",
    emoji: "🔧",
  },
];
  return (
    <div className="min-h-screen bg-white text-[#111]">
      {/* Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo + marque */}
          <div className="flex items-center gap-3">
            <Image
  src="/logo.png"
  alt="Jashari Renovation logo"
  width={200}
  height={200}
  className="w-[100px] h-auto object-contain -mt-1"
/>
          </div>

          {/* Navigation */}
=======
    {
      title: "Rénovation intérieure",
      summary:
        "Remise à neuf complète des pièces de vie avec finitions propres et durables.",
      bullets: [
        "Cloisons & faux-plafonds (placo, rails, isolation acoustique)",
        "Plafonnage & enduits, préparation des supports",
        "Peinture murs, plafonds et boiseries",
        "Cuisine & salle de bain clé en main (hors électroménager)",
      ],
      leadTime: "Démarrage sous 2–4 semaines",
      emoji: "🏠",
    },
    {
      title: "Maçonnerie & structure",
      summary:
        "Ouvertures, reprises en sous-œuvre et petits ouvrages béton selon les règles de l’art.",
      bullets: [
        "Ouverture de murs porteurs (avec poutre IPN/HEB)",
        "Dalles, seuils et petites fondations",
        "Extensions légères, murets et briquetage",
        "Rejointoiement & réparations structurelles localisées",
      ],
      leadTime: "Étude préalable + planning",
      emoji: "🧱",
    },
    {
      title: "Carrelage & sols",
      summary:
        "Pose précise et durable pour pièces sèches et humides, finitions soignées.",
      bullets: [
        "Carrelage & faïence (formats standard & grands formats)",
        "Préparation chape/primaires, ragréage si nécessaire",
        "Joints hydrofuges & plinthes assorties",
        "Pose de parquet stratifié ou contrecollé",
      ],
      leadTime: "Intervention rapide",
      emoji: "🧩",
    },
    {
      title: "Toiture & isolation",
      summary:
        "Entretien, réparations ciblées et isolation performante des combles.",
      bullets: [
        "Réparation tuiles/ardoises, zinguerie & étanchéité",
        "Pose ou renfort d’isolant (laine minérale, PIR, etc.)",
        "Fenêtres de toit (type Velux), bavettes & raccords",
        "Nettoyage, anti-mousse et gouttières",
      ],
      leadTime: "Selon météo et accès",
      emoji: "🏗️",
    },
    {
      title: "Menuiserie légère",
      summary:
        "Ajustements et poses propres pour améliorer confort et finitions.",
      bullets: [
        "Portes intérieures & habillages, plinthes",
        "Remplacement ou pose de châssis",
        "Placards simples & rangements sur mesure",
        "Tablettes, seuils & finitions diverses",
      ],
      leadTime: "Planning flexible",
      emoji: "🪵",
    },
    {
      title: "Électricité & plomberie",
      summary:
        "Petits travaux et mises en conformité locales pour une installation fiable.",
      bullets: [
        "Remplacement d’appareillages (prises, interrupteurs, luminaires)",
        "Création de points d’eau, robinets et petits dépannages",
        "Remise en ordre localisée (coffret, différentiels – selon état)",
        "Installation ou remplacement de sanitaires",
      ],
      leadTime: "Dépannage rapide",
      emoji: "🔧",
    },
  ];

  return (
    <div className="min-h-screen bg-white text-[#111]">

      {/* HEADER */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Jashari Renovation logo"
              width={200}
              height={200}
              className="w-[100px] h-auto object-contain -mt-1"
            />
          </div>

>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-red-600">Services</a>
            <a href="#projets" className="hover:text-red-600">Réalisations</a>
            <a href="#avis" className="hover:text-red-600">Avis</a>
            <a href="#contact" className="hover:text-red-600">Contact</a>
            <a
              href="#devis"
              className="ml-2 px-4 py-2 rounded-2xl bg-red-600 text-white font-medium hover:opacity-90"
            >
              Devis gratuit
            </a>
          </nav>
        </div>
      </header>
<<<<<<< HEAD

      {/* Hero */}
=======
      {/* BANDEAU TARIFS */}
      <div className="bg-neutral-900 text-white text-center py-3 text-sm font-medium tracking-wide">
        Tarifs transparents & parmi les plus bas du marché —{" "}
        <span className="text-red-500">Qualité Garantie</span>
      </div>

      {/* HERO */}
>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Rénovation générale pour petits et grands projets
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">
<<<<<<< HEAD
              Entreprise familiale forte de plus de 30 ans d’expérience, Jashari Renovation est
              implantée en Belgique et met à votre service un savoir-faire étendu couvrant
              l’ensemble des métiers du bâtiment. Notre expertise englobe la maçonnerie, le
              carrelage, la peinture, les travaux de toiture, l’isolation, la création et la rénovation
              de salles de bain, ainsi que la plomberie, l’électricité et le plafonnage.
              <br /><br />
              Chaque projet bénéficie d’un devis rapide, précis et adapté à votre budget, avec
              l’assurance d’un travail soigné, honnête et fondé sur la confiance mutuelle.
              Notre mission : conjuguer exigence technique et intégrité pour bâtir et rénover
              durablement vos espaces de vie.
=======
              Entreprise familiale forte de plus de 30 ans d’expérience, Jashari Renovation est implantée en Belgique et met à votre service un savoir-faire étendu couvrant l’ensemble des métiers du bâtiment.
              <br /><br />
              Chaque projet bénéficie d’un devis rapide, précis et adapté à votre budget, avec l’assurance d’un travail soigné, honnête et fondé sur la confiance mutuelle.
>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#devis" className="px-5 py-3 rounded-xl bg-red-600 text-white font-semibold hover:opacity-90">
                Demander un devis
              </a>
              <a href="#services" className="px-5 py-3 rounded-xl border font-semibold hover:border-red-600 hover:text-red-600">
                Voir nos services
              </a>
            </div>
          </div>
<<<<<<< HEAD
=======

>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl border bg-[url('https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center shadow-lg" />
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Services */}
      <section id="services" className="bg-neutral-50 border-y">
  <div className="max-w-6xl mx-auto px-4 py-16">
    <div className="flex items-end justify-between gap-4">
      <div>
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Nos services
        </h2>
        <p className="mt-2 text-neutral-600">
          Des prestations claires, des finitions soignées et des délais tenus.
        </p>
      </div>
      <a
        href="#devis"
        className="hidden md:inline-flex px-4 py-2 rounded-xl border font-medium hover:border-red-600 hover:text-red-600"
      >
        Demander un devis
      </a>
    </div>

    <div className="mt-10 grid md:grid-cols-2 gap-6">
      {SERVICES.map((s, i) => (
        <article
          key={i}
          className="group relative rounded-2xl bg-white border hover:shadow-sm transition p-6"
        >
          {/* En-tête */}
          <div className="flex items-start gap-3">
            <div className="h-10 w-10 rounded-xl bg-red-600/10 flex items-center justify-center text-xl">
              <span aria-hidden>{s.emoji}</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">{s.title}</h3>
              <p className="text-neutral-600 text-sm mt-0.5">{s.summary}</p>
            </div>
          </div>

          {/* Liste concise */}
          <ul className="mt-4 space-y-2 text-sm text-neutral-700">
            {s.bullets.map((b, k) => (
              <li key={k} className="flex gap-2">
                <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-red-600/70" />
                <span>{b}</span>
              </li>
            ))}
          </ul>

          {/* Délai d’intervention */}
          <div className="mt-5">
            <span className="px-2.5 py-1 rounded-full text-xs bg-neutral-100 text-neutral-700">
              {s.leadTime}
            </span>
          </div>
        </article>
      ))}
    </div>

    {/* CTA mobile */}
    <div className="mt-8 md:hidden">
      <a
        href="#devis"
        className="w-full inline-flex justify-center px-5 py-3 rounded-xl bg-red-600 text-white font-semibold hover:opacity-90"
      >
        Demander un devis
      </a>
    </div>
  </div>
</section>

      {/* Réalisations */}
      <section id="projets" className="bg-white border-t">
  <div className="max-w-6xl mx-auto px-4 py-16">
    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
      Nos dernières réalisations 
    </h2>

    <p className="text-neutral-600 mb-10 max-w-2xl">
      Découvrez deux de nos chantiers réalisés récemment dans la province de Namur. Chaque projet illustre notre savoir-faire et notre exigence de
      qualité, du premier diagnostic à la finition.
    </p>

    <div className="grid md:grid-cols-2 gap-8">
      {/* Chantier 1 */}
      <article className="rounded-2xl border bg-neutral-50 p-6 hover:shadow-sm transition">
        <h3 className="font-semibold text-lg mb-2">
          Chantier 50301
        </h3>
        <p className="text-sm text-neutral-600 mb-4">
          Rénovation complète d’un espace de vie avec nouvelle isolation,
          plafonnage et pose de carrelage.
        </p>

        <div className="flex flex-wrap gap-3">
  <Link
    href="/chantiers/gembloux-1/avant"
    className="px-4 py-2 rounded-xl border text-sm font-medium hover:border-red-600 hover:text-red-600"
  >
    Avant rénovation
  </Link>

  <Link
    href="/chantiers/gembloux-1/apres"
    className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-medium hover:opacity-90"
  >
    Après rénovation
  </Link>
</div>

      </article>

      {/* Chantier 2 */}
      <article className="rounded-2xl border bg-neutral-50 p-6 hover:shadow-sm transition">
        <h3 className="font-semibold text-lg mb-2">
          Chantier 50302
        </h3>
        <p className="text-sm text-neutral-600 mb-4">
          Travaux de toiture et rafraîchissement complet des façades avec finitions propres et durables.
        </p>

        <div className="flex flex-wrap gap-3">

           <Link
  href="chantiers/gembloux-2/avant"
  className="px-4 py-2 rounded-xl border text-sm font-medium hover:border-red-600 hover:text-red-600"
>
  Avant rénovation
</Link>

<Link
  href="/chantiers/gembloux-2/apres"
  className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-medium hover:opacity-90"
>
  Après rénovation
</Link>
        </div>
      </article>
    </div>
  </div>
</section>

      {/* Avis */}
=======
      {/* SERVICES */}
      <section id="services" className="bg-neutral-50 border-y">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Nos services
              </h2>
              <p className="mt-2 text-neutral-600">
                Des prestations claires, des finitions soignées et des délais tenus.
              </p>
            </div>
            <a
              href="#devis"
              className="hidden md:inline-flex px-4 py-2 rounded-xl border font-medium hover:border-red-600 hover:text-red-600"
            >
              Demander un devis
            </a>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <article
                key={i}
                className="group relative rounded-2xl bg-white border hover:shadow-sm transition p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-red-600/10 flex items-center justify-center text-xl">
                    <span aria-hidden>{s.emoji}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{s.title}</h3>
                    <p className="text-neutral-600 text-sm mt-0.5">{s.summary}</p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2 text-sm text-neutral-700">
                  {s.bullets.map((b, k) => (
                    <li key={k} className="flex gap-2">
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-red-600/70" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5">
                  <span className="px-2.5 py-1 rounded-full text-xs bg-neutral-100 text-neutral-700">
                    {s.leadTime}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <a
              href="#devis"
              className="w-full inline-flex justify-center px-5 py-3 rounded-xl bg-red-600 text-white font-semibold hover:opacity-90"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section id="projets" className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            Nos dernières réalisations
          </h2>

          <p className="text-neutral-600 mb-10 max-w-2xl">
            Découvrez deux de nos chantiers réalisés récemment dans la province de Namur.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                id: "50301",
                desc: "Rénovation complète d’un espace de vie avec nouvelle isolation, plafonnage et pose de carrelage.",
                slug: "gembloux-1",
              },
              {
                id: "50302",
                desc: "Travaux de toiture et rafraîchissement complet des façades avec finitions propres et durables.",
                slug: "gembloux-2",
              },
            ].map((p) => (
              <article key={p.id} className="rounded-2xl border bg-neutral-50 p-6 hover:shadow-sm transition">
                <h3 className="font-semibold text-lg mb-2">Chantier {p.id}</h3>
                <p className="text-sm text-neutral-600 mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href={`/chantiers/${p.slug}/avant`}
                    className="px-4 py-2 rounded-xl border text-sm font-medium hover:border-red-600 hover:text-red-600"
                  >
                    Avant rénovation
                  </Link>
                  <Link
                    href={`/chantiers/${p.slug}/apres`}
                    className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-medium hover:opacity-90"
                  >
                    Après rénovation
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* AVIS CLIENTS */}
>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
      <section id="avis">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Avis clients</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[
<<<<<<< HEAD
              {name:'S. Martin', text:'Travail propre et respect des délais.'},
              {name:'A. Durand', text:'Résultat impeccable pour ma salle de bain.'},
              {name:'M. Lefèvre', text:'Devis rapide et équipe sérieuse.'}
            ].map((a,i)=> (
=======
              { name: "S. Martin", text: "Travail propre et respect des délais." },
              { name: "A. Durand", text: "Résultat impeccable pour ma salle de bain." },
              { name: "M. Lefèvre", text: "Devis rapide et équipe sérieuse." },
            ].map((a, i) => (
>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
              <div key={i} className="p-6 rounded-2xl border bg-white">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-600/10 flex items-center justify-center font-bold text-red-600">
                    {a.name[0]}
                  </div>
                  <div>
                    <p className="font-semibold">{a.name}</p>
                    <p className="text-xs text-neutral-500">Commande vérifiée</p>
                  </div>
                </div>
                <p className="mt-3 text-neutral-700">{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Bandeau Devis */}
=======
      {/* BANDEAU DEVIS */}
>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
      <section id="devis" className="bg-[#111] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Parlons de votre projet</h3>
            <p className="mt-1 text-neutral-300">Décrivez vos travaux, recevez une estimation sous 48h.</p>
          </div>
          <a
<<<<<<< HEAD
  href="tel:+32493143463"
  className="px-4 py-2 bg-red-600 text-white font-medium hover:opacity-90 rounded-xl"
>
  📞 +32 493 14 34 63
</a>
        </div>
      </section>

      {/* Contact */}
=======
            href="tel:+32493143463"
            className="px-4 py-2 bg-red-600 text-white font-medium hover:opacity-90 rounded-xl"
          >
            📞 +32 493 14 34 63
          </a>
        </div>
      </section>

      {/* CONTACT */}
>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
      <section id="contact" className="bg-neutral-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-16 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Contact</h2>
            <p className="mt-3 text-neutral-700">
              Envoyez-nous un message ou appelez pour un rendez-vous.
            </p>
            <div className="mt-6 space-y-2 text-neutral-700">
              <p>📍 Toutes les provinces de Belgique</p>
              <p>📞 +32 4 93 14 34 63</p>
              <p>📞 +32 4 84 12 73 93</p>
              <p>✉️ jasharirenovation@gmail.com</p>
<<<<<<< HEAD
              <p className="text-sm text-neutral-500">Horaires: 7/7J- 24H</p>
            </div>
          </div>
          <form
  action="mailto:jasharirenovation@gmail.com?subject=Demande%20de%20devis%20-%20Site%20Jashari%20Renovation"
  method="POST"
  encType="text/plain"
  className="p-6 bg-white rounded-2xl border shadow-sm grid gap-4"
>
  <input
    type="text"
    name="Nom"
    placeholder="Votre nom"
    required
    className="border rounded-xl px-4 py-3 text-black"
  />

  <input
    type="email"
    name="Email"
    placeholder="Email"
    required
    className="border rounded-xl px-4 py-3 text-black"
  />

  <textarea
    name="Message"
    placeholder="Décrivez vos travaux"
    required
    className="border rounded-xl px-4 py-3 h-32 text-black"
  ></textarea>

  <button
    type="submit"
    className="px-5 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition"
  >
    Envoyer
  </button>
</form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm text-neutral-600">
          <div>
            <p className="font-bold text-[#111]">JASHARI <span className="text-red-600">Renovation</span></p>
=======
              <p className="text-sm text-neutral-500">Horaires : 7/7J – 24H</p>
            </div>
          </div>

          <form
            action="mailto:jasharirenovation@gmail.com?subject=Demande%20de%20devis%20-%20Site%20Jashari%20Renovation"
            method="POST"
            encType="text/plain"
            className="p-6 bg-white rounded-2xl border shadow-sm grid gap-4"
          >
            <input
              type="text"
              name="Nom"
              placeholder="Votre nom"
              required
              className="border rounded-xl px-4 py-3 text-black"
            />

            <input
              type="email"
              name="Email"
              placeholder="Email"
              required
              className="border rounded-xl px-4 py-3 text-black"
            />

            <textarea
              name="Message"
              placeholder="Décrivez vos travaux"
              required
              className="border rounded-xl px-4 py-3 h-32 text-black"
            ></textarea>

            <button
              type="submit"
              className="px-5 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-8 text-sm text-neutral-600">
          <div>
            <p className="font-bold text-[#111]">
              JASHARI <span className="text-red-600">Renovation</span>
            </p>
>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
            <p className="mt-2">Entreprise générale – Rénovation complète.</p>
          </div>
          <div>
            <p className="font-semibold text-[#111]">Liens</p>
            <ul className="mt-2 space-y-1">
              <li><a href="#services" className="hover:text-red-600">Services</a></li>
              <li><a href="#projets" className="hover:text-red-600">Réalisations</a></li>
              <li><a href="#avis" className="hover:text-red-600">Avis</a></li>
              <li><a href="#contact" className="hover:text-red-600">Contact</a></li>
              <li><a href="#devis" className="hover:text-red-600">Devis</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-[#111]">Mentions</p>
            <p>© {new Date().getFullYear()} JASHARI Renovation</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
<<<<<<< HEAD


=======
>>>>>>> e877e2c (💄 Ajout du bandeau tarifs transparents + amélioration des pages chantiers)
