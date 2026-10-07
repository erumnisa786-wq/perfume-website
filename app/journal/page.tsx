import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { SparklesIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Le Journal | ÉLYSIAN NOIR Paris — Haute Parfumerie Stories",
  description:
    "Explore the editorial world of ÉLYSIAN NOIR — artisanal perfumery stories, rare ingredient dispatches, olfactory essays, and private harvest letters from Grasse.",
  keywords: [
    "luxury perfume journal",
    "haute parfumerie",
    "fragrance essays",
    "Grasse harvest",
    "olfactory stories",
    "Elysian Noir journal",
  ],
};

const articles = [
  {
    slug: "art-of-oud-extraction",
    category: "Ingredient Dispatch",
    label: "Featured",
    title: "The Art of Wild Oud Extraction in Cambodia's Ancient Forests",
    subtitle:
      "How a single piece of agarwood, aged centuries in rainforest heartwood, becomes the sovereign soul of Oud Impérial Absolu.",
    date: "September 2026",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1600&auto=format&fit=crop",
    isHero: true,
  },
  {
    slug: "grasse-rose-harvest-2026",
    category: "Harvest Letter",
    label: "New",
    title: "Dawn Harvest in Grasse: The 2026 Centifolia Rose Season",
    subtitle:
      "Our master distiller documents six weeks of hand-picking roses before 7am in the terraced hills above Grasse.",
    date: "August 2026",
    readTime: "7 min read",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "history-of-oak-barrel-aging",
    category: "Atelier Chronicle",
    label: "",
    title: "18 Months in French Limousin Oak: A Perfumer's Patience",
    subtitle:
      "The seldom-discussed process of resting raw extrait concentrations in aged French oak before the final composition.",
    date: "July 2026",
    readTime: "6 min read",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "iris-florentine-butter",
    category: "Ingredient Dispatch",
    label: "",
    title: "The Three-Year Journey of Iris Butter from Florence",
    subtitle:
      "Why the finest iris absolute requires 36 months of patient rhizome drying before yielding its incomparable powdery opulence.",
    date: "June 2026",
    readTime: "5 min read",
    image:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc5d?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "sillage-and-skin-chemistry",
    category: "Olfactory Essay",
    label: "",
    title: "Why the Same Perfume Smells Different On Every Skin",
    subtitle:
      "A fragrance sommelier's exploration of skin pH, microbiome, and the dermal alchemy that makes your signature scent truly singular.",
    date: "May 2026",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=800&auto=format&fit=crop",
  },
  {
    slug: "ambergris-the-rarest-note",
    category: "Rare Ingredients",
    label: "Private",
    title:
      "Ambergris: The Ocean's Rarest Treasure and Its Role in Our Extraits",
    subtitle:
      "Discovered only on remote Atlantic coastlines, aged ambergris provides the ineffable fixative depth in our Oud Impérial Absolu.",
    date: "April 2026",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
];

const BADGE_COLORS: Record<string, string> = {
  Featured:
    "bg-[#d4af37] text-black",
  New:
    "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30",
  Private:
    "bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30",
};

export default function JournalPage() {
  const heroArticle = articles.find((a) => a.isHero)!;
  const gridArticles = articles.filter((a) => !a.isHero);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[600px] bg-[#d4af37]/6 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-20 relative z-10">
        {/* ============================================================
            HEADER
        ============================================================ */}
        <section className="text-center space-y-5 max-w-3xl mx-auto pt-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#161622] border border-[#d4af37]/40 text-[#d4af37] text-xs uppercase tracking-[0.25em]">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Le Journal Privé — Dispatches from Grasse & Paris</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl text-white font-light leading-[1.08]">
            The{" "}
            <span className="text-gold-gradient font-normal italic">
              Olfactory
            </span>{" "}
            Journal.
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-xl mx-auto">
            Intimate dispatches from our Grasse atelier — harvests, perfumer
            essays, rare ingredient chronicles, and the philosophical world of
            high perfumery.
          </p>
        </section>

        {/* ============================================================
            HERO ARTICLE
        ============================================================ */}
        <section>
          <Link href={`/journal/${heroArticle.slug}`} className="group block">
            <div className="relative rounded-3xl overflow-hidden bg-[#111118] border border-[#232332] hover:border-[#d4af37]/40 transition-all duration-500 shadow-2xl">
              {/* Image */}
              <div className="relative aspect-[16/7] overflow-hidden">
                <img
                  src={heroArticle.image}
                  alt={heroArticle.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Content overlay */}
                <div className="absolute inset-0 flex items-end p-8 sm:p-12">
                  <div className="max-w-2xl space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-[10px] uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/15 border border-[#d4af37]/30 px-3 py-1 rounded-full font-semibold">
                        {heroArticle.category}
                      </span>
                      {heroArticle.label && (
                        <span
                          className={`text-[10px] uppercase tracking-widest px-3 py-1 rounded-full font-semibold ${BADGE_COLORS[heroArticle.label] || ""}`}
                        >
                          {heroArticle.label}
                        </span>
                      )}
                    </div>

                    <h2 className="font-serif-luxury text-2xl sm:text-4xl text-white font-light leading-tight group-hover:text-[#f5e29f] transition-colors">
                      {heroArticle.title}
                    </h2>
                    <p className="text-sm text-zinc-300 leading-relaxed hidden sm:block">
                      {heroArticle.subtitle}
                    </p>

                    <div className="flex items-center space-x-4 text-xs text-zinc-400 pt-2">
                      <span>{heroArticle.date}</span>
                      <span>•</span>
                      <span>{heroArticle.readTime}</span>
                      <span className="flex items-center space-x-1 text-[#d4af37] group-hover:text-[#f5e29f] transition-colors font-medium">
                        <span>Read Full Dispatch</span>
                        <ArrowRightIcon className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* ============================================================
            ARTICLE GRID
        ============================================================ */}
        <section className="space-y-10">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                From The Archive
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white font-light">
                Recent Dispatches
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/journal/${article.slug}`}
                className="group bg-[#111118] border border-[#232332] hover:border-[#d4af37]/40 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 flex flex-col"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#181824]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {article.label && (
                    <div
                      className={`absolute top-3 left-3 text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full font-semibold ${BADGE_COLORS[article.label] || "bg-zinc-700 text-zinc-200"}`}
                    >
                      {article.label}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1 space-y-3">
                  <span className="text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
                    {article.category}
                  </span>

                  <h3 className="font-serif-luxury text-lg text-white group-hover:text-[#f5e29f] transition-colors leading-snug flex-1">
                    {article.title}
                  </h3>

                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                    {article.subtitle}
                  </p>

                  <div className="flex items-center justify-between text-[11px] text-zinc-500 pt-2 border-t border-[#1a1a26]">
                    <span>{article.date}</span>
                    <span className="flex items-center space-x-1 text-zinc-400 group-hover:text-[#d4af37] transition-colors">
                      <span>{article.readTime}</span>
                      <ArrowRightIcon className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ============================================================
            NEWSLETTER CTA
        ============================================================ */}
        <section className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#171722] via-[#1c1822] to-[#12121a] border border-[#d4af37]/35 p-8 sm:p-14 shadow-2xl relative">
          <div className="absolute right-0 top-0 w-96 h-96 bg-[#d4af37]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-xl space-y-5">
            <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#d4af37]">
              <SparklesIcon className="w-4 h-4" />
              <span>Le Cercle Privé — Journal Dispatch</span>
            </div>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light leading-tight">
              Receive Private Harvest Letters & Atelier Dispatches
            </h2>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Join our inner circle. Receive first access to new formulation
              releases, harvest letters from Grasse, and your inaugural{" "}
              <span className="text-[#d4af37] font-medium">15% privilege code</span>.
            </p>
            <div className="flex gap-3 pt-2 flex-col sm:flex-row">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-[#171724] border border-[#29293a] focus:border-[#d4af37] text-white text-xs px-4 py-3.5 rounded-xl focus:outline-none placeholder-zinc-500 transition-colors"
              />
              <button
                type="button"
                className="px-6 py-3.5 bg-[#d4af37] hover:bg-[#e6ca7b] text-black font-semibold text-xs uppercase tracking-[0.2em] rounded-xl transition-all whitespace-nowrap shadow-lg shadow-[#d4af37]/15"
              >
                Join The Circle
              </button>
            </div>
            <p className="text-[11px] text-zinc-500">
              No commercial solicitation. Only rare dispatches from our Grasse
              and Paris ateliers. Unsubscribe at any time.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
