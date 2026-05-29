"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

function SlideshowImage({ images, alt }: { images: string[]; alt: string }) {
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % images.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} ${i + 1}`}
          fill
          className={`object-cover transition-opacity duration-700 absolute inset-0 ${
            i === idx ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}

export default function Home() {
  const PROJETS = [
    {
      id: "50301",
      title: "Rénovation complète – Grenier & Salle de bain",
      location: "Gembloux, Province de Namur",
      desc: "Réfection complète d'un grenier (parquet, peinture, électricité) et d'une salle de bain, avec remise en état de la toiture et traitement des gouttières.",
      slug: "gembloux-1",
      avantImgs: [
        "/images/chantiers/gembloux-1/avant1.jpg",
        "/images/chantiers/gembloux-1/avant2.jpg",
        "/images/chantiers/gembloux-1/avant3.jpg",
        "/images/chantiers/gembloux-1/avant4.jpg",
        "/images/chantiers/gembloux-1/avant5.jpg",
        "/images/chantiers/gembloux-1/avant6.jpg",
        "/images/chantiers/gembloux-1/avant7.jpg",
        "/images/chantiers/gembloux-1/avant8.jpg",
      ],
      apresImgs: [
        "/images/chantiers/gembloux-1/apres1.jpg",
        "/images/chantiers/gembloux-1/apres2.jpg",
        "/images/chantiers/gembloux-1/apres3.jpg",
        "/images/chantiers/gembloux-1/apres4.jpg",
        "/images/chantiers/gembloux-1/apres5.jpg",
        "/images/chantiers/gembloux-1/apres6.jpg",
      ],
      tags: ["Parquet", "Peinture", "Salle de bain", "Toiture"],
    },
    {
      id: "50302",
      title: "Toiture & rafraîchissement façades",
      location: "Gembloux, Province de Namur",
      desc: "Travaux de toiture complets, nettoyage et traitement anti-mousse, rafraîchissement des façades avec finitions propres et durables.",
      slug: "gembloux-2",
      avantImgs: [
        "/images/chantiers/gembloux-2/avant1.jpg",
        "/images/chantiers/gembloux-2/avant2.jpg",
        "/images/chantiers/gembloux-2/avant3.jpg",
        "/images/chantiers/gembloux-2/avant4.jpg",
        "/images/chantiers/gembloux-2/avant5.jpg",
        "/images/chantiers/gembloux-2/avant6.jpg",
      ],
      apresImgs: [
        "/images/chantiers/gembloux-2/apres1.jpg",
        "/images/chantiers/gembloux-2/apres2.jpg",
        "/images/chantiers/gembloux-2/apres3.jpg",
        "/images/chantiers/gembloux-2/apres4.jpg",
        "/images/chantiers/gembloux-2/apres5.jpg",
        "/images/chantiers/gembloux-2/apres6.jpg",
        "/images/chantiers/gembloux-2/apres7.jpg",
        "/images/chantiers/gembloux-2/apres8.jpg",
        "/images/chantiers/gembloux-2/apres9.jpg",
        "/images/chantiers/gembloux-2/apres10.jpg",
      ],
      tags: ["Toiture", "Façade", "Anti-mousse", "Maçonnerie"],
    },
  ];

  const SERVICES = [
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
              alt="Jashari Solutions logo"
              width={200}
              height={200}
              className="w-[100px] h-auto object-contain -mt-1"
            />
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#services" className="hover:text-red-600">Services</a>
            <a href="#entretien" className="hover:text-red-600">Entretien</a>
            <a href="#depannage" className="hover:text-red-600">Dépannage</a>
            <a href="#livraison" className="hover:text-red-600 flex items-center gap-1.5">
              Livraison
              <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-red-600 text-white leading-none">NEW</span>
            </a>
            <a href="#projets" className="hover:text-red-600">Réalisations</a>
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

      {/* BANDEAU TARIFS */}
      <div className="bg-neutral-900 text-white text-center py-3 text-sm font-medium tracking-wide">
        Tarifs transparents & parmi les plus bas du marché —{" "}
        <span className="text-red-500">Qualité Garantie</span>
      </div>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
              Votre problème, notre solution
            </h1>
            <p className="mt-4 text-neutral-600 text-lg">
              Entreprise familiale avec plus de 30 ans d’expérience, Jashari Solutions intervient partout en Belgique avec une approche simple : chaque situation a une solution, et nous sommes là pour la trouver.
            </p>
            <p className="mt-3 text-neutral-600">
              La rénovation est notre cœur de métier — intérieure, extérieure, gros œuvre ou finitions — mais nous proposons aussi l’entretien et le nettoyage de toitures et façades, le dépannage d’urgence pour les fuites, dégâts des eaux et canalisations, ainsi que la livraison et le transport de colis volumineux. Un seul interlocuteur de confiance, pour toutes vos situations.
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

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-3xl border overflow-hidden shadow-lg">
              <Image
                src="/hero.jpg"
                alt="Jashari Solutions – rénovation"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

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

      {/* ENTRETIEN & NETTOYAGE */}
      <section id="entretien" className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Entretien & nettoyage
              </h2>
              <p className="mt-2 text-neutral-600">
                Prolongez la durée de vie de vos surfaces extérieures avec nos traitements spécialisés.
              </p>
            </div>
            <a
              href="#devis"
              className="hidden md:inline-flex px-4 py-2 rounded-xl border font-medium hover:border-red-600 hover:text-red-600"
            >
              Demander un devis
            </a>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                emoji: "🧹",
                title: "Nettoyage de toiture",
                summary: "Élimination de la mousse, lichens et dépôts verts pour protéger vos tuiles et ardoises.",
                bullets: [
                  "Brossage mécanique et traitement biocide",
                  "Nettoyage haute pression adapté au support",
                  "Évacuation des déchets et nettoyage des gouttières",
                ],
              },
              {
                emoji: "💧",
                title: "Traitement hydrofuge & anti-mousse",
                summary: "Imperméabilisation durable des toitures, façades et terrasses contre les infiltrations.",
                bullets: [
                  "Application d'hydrofuge pénétrant longue durée",
                  "Traitement préventif anti-mousse et anti-algues",
                  "Garantie d'adhérence et de résistance aux UV",
                ],
              },
              {
                emoji: "🚿",
                title: "Nettoyage haute pression",
                summary: "Remise à neuf de vos terrasses, allées, façades et murets avec un jet professionnel.",
                bullets: [
                  "Terrasses carrelées, dallages et pavés",
                  "Allées, garages et accès extérieurs",
                  "Façades, murets et clôtures",
                ],
              },
              {
                emoji: "🌿",
                title: "Démoussage de façades",
                summary: "Nettoyage et traitement des façades envahies par la végétation et les moisissures.",
                bullets: [
                  "Démoussage manuel ou chimique selon support",
                  "Traitement anti-retour et primaire d'accrochage",
                  "Finition peinture façade si souhaité",
                ],
              },
              {
                emoji: "🪣",
                title: "Gouttières & évacuations",
                summary: "Nettoyage, débouchage et remise en état de vos systèmes d'évacuation d'eaux pluviales.",
                bullets: [
                  "Vidage manuel des feuilles et débris",
                  "Test d'écoulement et détection de fuites",
                  "Remplacement de sections défectueuses",
                ],
              },
              {
                emoji: "🌊",
                title: "Traitement anti-calcaire & anti-algues",
                summary: "Protection des surfaces poreuses contre le calcaire, les efflorescences et les algues.",
                bullets: [
                  "Traitement curatif des taches et auréoles",
                  "Application de produit consolidant",
                  "Conseils d'entretien pour la durabilité",
                ],
              },
            ].map((s, i) => (
              <article
                key={i}
                className="rounded-2xl bg-neutral-50 border hover:shadow-sm transition p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-red-600/10 flex items-center justify-center text-xl shrink-0">
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
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-red-600/70 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DÉPANNAGE D'URGENCE */}
      <section id="depannage" className="bg-neutral-900 text-white border-t border-neutral-800">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="inline-block mb-3 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-semibold uppercase tracking-widest">
                Intervention rapide 7j/7 – 24h/24
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Dépannage d'urgence
              </h2>
              <p className="mt-2 text-neutral-400">
                Un problème urgent ? Nous intervenons rapidement pour limiter les dégâts.
              </p>
            </div>
            <a
              href="tel:+32493143463"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-red-600 text-white font-semibold hover:bg-red-700 transition"
            >
              <span>📞</span> Appeler maintenant
            </a>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                emoji: "🚿",
                title: "Évier / lavabo bouché",
                desc: "Débouchage manuel ou chimique, nettoyage du siphon et test d'écoulement.",
              },
              {
                emoji: "🔧",
                title: "Canalisations bouchées",
                desc: "Détartrage, débouchage haute pression et inspection si nécessaire.",
              },
              {
                emoji: "💦",
                title: "Fuite d'eau",
                desc: "Localisation de la fuite, coupure d'urgence et réparation provisoire ou définitive.",
              },
              {
                emoji: "🌊",
                title: "Dégâts des eaux",
                desc: "Identification de la source, assèchement et traitement anti-humidité des surfaces touchées.",
              },
              {
                emoji: "🔩",
                title: "Robinetterie & sanitaires",
                desc: "Remplacement de robinets, joints, flexibles ou mitigeurs défectueux.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-4 p-5 rounded-2xl bg-neutral-800 border border-neutral-700 hover:border-red-600/50 transition"
              >
                <div className="h-11 w-11 rounded-xl bg-red-600/15 flex items-center justify-center text-2xl shrink-0">
                  {item.emoji}
                </div>
                <div>
                  <h3 className="font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-neutral-400 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-red-600/10 border border-red-600/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-white text-lg">Urgence ? On répond 7j/7 – 24h/24</p>
              <p className="text-neutral-400 text-sm mt-0.5">Décrivez votre problème, nous vous rappelons dans les plus brefs délais.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href="tel:+32493143463" className="px-4 py-2 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition">
                +32 493 14 34 63
              </a>
              <a href="tel:+32484127393" className="px-4 py-2 rounded-xl bg-neutral-700 text-white text-sm font-semibold hover:bg-neutral-600 transition">
                +32 484 12 73 93
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RÉALISATIONS */}
      <section id="projets" className="bg-white border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-end justify-between gap-4 mb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Nos dernières réalisations
            </h2>
          </div>
          <p className="text-neutral-600 mb-10 max-w-2xl">
            Des chantiers réalisés récemment dans la province de Namur. Cliquez sur une carte pour voir toutes les photos avant et après.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {PROJETS.map((p) => (
              <article key={p.id} className="rounded-2xl border bg-white overflow-hidden hover:shadow-md transition group">
                {/* Aperçu avant / après */}
                <div className="relative grid grid-cols-2 h-52 overflow-hidden">
                  <div className="relative">
                    <SlideshowImage images={p.avantImgs} alt={`${p.title} – avant`} />
                    <span className="absolute top-2 left-2 z-10 px-2 py-0.5 bg-black/60 text-white text-xs font-medium rounded-full">
                      Avant
                    </span>
                  </div>
                  <div className="relative border-l-2 border-white">
                    <SlideshowImage images={p.apresImgs} alt={`${p.title} – après`} />
                    <span className="absolute top-2 right-2 z-10 px-2 py-0.5 bg-red-600/90 text-white text-xs font-medium rounded-full">
                      Après
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-xs font-medium text-neutral-400 uppercase tracking-wide mb-1">
                    {p.location}
                  </p>
                  <h3 className="font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-sm text-neutral-600 mb-4">{p.desc}</p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs bg-neutral-100 text-neutral-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`/chantiers/${p.slug}?tab=avant`}
                      className="px-4 py-2 rounded-xl border text-sm font-medium hover:border-red-600 hover:text-red-600 transition"
                    >
                      Voir l’avant
                    </Link>
                    <Link
                      href={`/chantiers/${p.slug}?tab=apres`}
                      className="px-4 py-2 rounded-2xl bg-red-600 text-white text-sm font-medium hover:opacity-90 transition"
                    >
                      Voir l’après →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* LIVRAISON & DÉMÉNAGEMENT */}
      <section id="livraison" className="bg-neutral-50 border-t">
        <div className="max-w-6xl mx-auto px-4 py-16">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                  Livraison & transport
                </h2>
                <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-red-600 text-white uppercase tracking-widest animate-pulse">
                  New
                </span>
              </div>
              <p className="text-neutral-600 max-w-2xl">
                Vous déménagez ou avez besoin de transporter des colis volumineux ? Notre équipe se charge du chargement, du transport et de la livraison en toute sécurité.
              </p>
            </div>
            <a
              href="#devis"
              className="hidden md:inline-flex shrink-0 px-4 py-2 rounded-xl border font-medium hover:border-red-600 hover:text-red-600 transition"
            >
              Demander un devis
            </a>
          </div>

          <div className="mt-10 grid md:grid-cols-2 gap-6">
            {[
              {
                emoji: "📦",
                title: "Transport de colis volumineux",
                summary: "Livraison ponctuelle de colis encombrants ou lourds que les transporteurs classiques refusent.",
                bullets: [
                  "Électroménager, mobilier, matériaux de construction",
                  "Livraison d'un point A à un point B en Belgique",
                  "Chargement et déchargement inclus",
                  "Tarif à la mission, sans abonnement",
                ],
                badge: null,
              },
              {
                emoji: "🏠",
                title: "Débarras & évacuation",
                summary: "Vidage de caves, greniers, garages ou logements avec tri et évacuation des encombrants.",
                bullets: [
                  "Tri des objets récupérables et à jeter",
                  "Évacuation vers déchetterie ou centre de tri",
                  "Nettoyage de base après débarras",
                  "Intervention rapide sur rendez-vous",
                ],
                badge: null,
              },
              {
                emoji: "🔄",
                title: "Déménagement partiel",
                summary: "Vous ne déménagez qu'une partie de vos affaires ? On s'adapte à votre besoin, sans surcoût inutile.",
                bullets: [
                  "Quelques meubles ou cartons, pas tout un foyer",
                  "Idéal pour un étudiant, un studio ou une chambre",
                  "Disponible en semaine et le week-end",
                  "Devis rapide par téléphone ou message",
                ],
                badge: null,
              },
            ].map((s, i) => (
              <article
                key={i}
                className="rounded-2xl bg-white border hover:shadow-sm transition p-6"
              >
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-xl bg-red-600/10 flex items-center justify-center text-xl shrink-0">
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
                      <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-red-600/70 shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <div className="mt-8 p-6 rounded-2xl bg-red-600/5 border border-red-600/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="font-bold text-[#111]">Besoin d'un transport rapide ?</p>
              <p className="text-neutral-600 text-sm mt-0.5">Appelez-nous ou envoyez un message — devis gratuit sous 24h.</p>
            </div>
            <a
              href="tel:+32493143463"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition"
            >
              📞 +32 493 14 34 63
            </a>
          </div>
        </div>
      </section>

      {/* BANDEAU DEVIS */}
      <section id="devis" className="bg-[#111] text-white">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">Parlons de votre projet</h3>
            <p className="mt-1 text-neutral-300">Décrivez vos travaux, recevez une estimation sous 48h.</p>
          </div>
          <a
            href="tel:+32493143463"
            className="px-4 py-2 bg-red-600 text-white font-medium hover:opacity-90 rounded-xl"
          >
            📞 +32 493 14 34 63
          </a>
        </div>
      </section>

      {/* CONTACT */}
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
              JASHARI <span className="text-red-600">Solutions</span>
            </p>
            <p className="mt-2">Entreprise générale – Rénovation complète.</p>
          </div>
          <div>
            <p className="font-semibold text-[#111]">Liens</p>
            <ul className="mt-2 space-y-1">
              <li><a href="#services" className="hover:text-red-600">Services</a></li>
              <li><a href="#entretien" className="hover:text-red-600">Entretien</a></li>
              <li><a href="#depannage" className="hover:text-red-600">Dépannage</a></li>
              <li><a href="#livraison" className="hover:text-red-600">Livraison &amp; transport</a></li>
              <li><a href="#projets" className="hover:text-red-600">Réalisations</a></li>
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