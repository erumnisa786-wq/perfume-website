import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { SparklesIcon, ShieldCheckIcon, DropletsIcon, ArrowRightIcon, StarIcon } from "@/components/Icons";
import { PERFUMES } from "@/data/perfumes";

export const metadata: Metadata = {
  title: "Maison Heritage & Craftsmanship | ÉLYSIAN NOIR Paris",
  description: "Discover the heritage of ÉLYSIAN NOIR. Handcrafted in Grasse, France with over 30% pure extrait concentration and aged in French oak barrels.",
  keywords: ["Élysian Noir heritage", "Grasse perfumery", "haute parfumerie", "french artisan perfume", "rare botanical extrait"],
};

export default function AboutPage() {
  const masterPerfumers = [
    {
      name: "Aurélien Guichard",
      perfume: "Oud Impérial Absolu",
      origin: "Grasse, France",
      quote: "To work with wild agarwood is to converse with centuries of earth and resin. We do not tame it; we elevate its sovereign soul.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Marie Salamagne",
      perfume: "Santal Blanche",
      origin: "Paris, France",
      quote: "Sandalwood should feel like liquid silk on heated skin. Paired with Florentine iris, it achieves weightless serenity.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Dominique Ropion",
      perfume: "Rose Nocturne",
      origin: "Brittany, France",
      quote: "The rose must not be gentle; it must possess the brooding mystery of twilight, draped in dark cassis and smoked patchouli.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Olivia Giacobetti",
      perfume: "Nectar de Figue",
      origin: "Boulogne-Billancourt, France",
      quote: "The Aegean sun on crushed fig leaves is memory incarnate. I wanted the sap, the wood, the sea salt, and the sweet purple pulp.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop"
    },
    {
      name: "Anne Flipo",
      perfume: "Fleur d'Oranger Privé",
      origin: "Laon, France",
      quote: "Orange blossom harvested at first light retains a pure crystalline vibration. It is joy, radiance, and golden Mediterranean warmth.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=600&auto=format&fit=crop"
    }
  ];

  const milestones = [
    {
      year: "1928",
      title: "The Grasse Sanctuary",
      description: "Founded amidst the rolling jasmine and rose terraces of Grasse by master botanist Henri de Montfort, dedicated to slow hydro-distillation."
    },
    {
      year: "1965",
      title: "Oak Barrel Maturation",
      description: "Pioneered the proprietary method of resting botanical resin extraits in aged French Limousin oak barrels for 18 months."
    },
    {
      year: "1998",
      title: "18 Place Vendôme Paris",
      description: "Opening of the confidential Haute Parfumerie salon in Paris, serving private patrons, royalty, and international collectors."
    },
    {
      year: "2026",
      title: "The 5 Signature Extraits",
      description: "Release of our benchmark private reserve: five uncompromising extraits formulated at over 30% pure oil concentration."
    }
  ];

  return (
    <div className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Ambient Glows */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#d4af37]/8 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* =========================================================================
            HERO: Maison Élysian Noir Heritage
        ========================================================================= */}
        <section className="text-center space-y-6 max-w-3xl mx-auto pt-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#161622] border border-[#d4af37]/40 text-[#d4af37] text-xs uppercase tracking-[0.25em]">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Maison de Haute Parfumerie • Grasse & Paris</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl text-white font-light leading-[1.1]">
            The Architecture of <br />
            <span className="text-gold-gradient font-normal italic">Immortal Scents</span>.
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            In an era of disposable velocity, Élysian Noir practices the devotional art of patient perfumery. 
            We bottle time itself—unrushed, unapologetic, and harvested from the most secluded botanical sanctuaries on Earth.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link
              href="/shop"
              className="px-8 py-3.5 bg-[#d4af37] hover:bg-[#e6ca7b] text-black font-semibold text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-xl shadow-[#d4af37]/20 flex items-center space-x-2"
            >
              <span>Explore The 5 Flacons</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-[#14141e] hover:bg-[#1f1f2d] text-zinc-200 border border-[#2d2d3e] hover:border-[#d4af37]/50 font-semibold text-xs uppercase tracking-[0.2em] rounded-full transition-all"
            >
              <span>Book Atelier Consultation</span>
            </Link>
          </div>
        </section>

        {/* =========================================================================
            SPLIT SHOWCASE: The Grasse Distillation Tradition
        ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border border-[#2b2b3b] shadow-2xl bg-[#14141d]">
              <img
                src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1200&auto=format&fit=crop"
                alt="Flacon in Grasse atelier"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 p-6 rounded-2xl bg-black/60 backdrop-blur-md border border-white/10">
                <span className="text-[11px] uppercase tracking-widest text-[#d4af37] block font-semibold">
                  Field Provenance
                </span>
                <p className="text-sm text-zinc-200 mt-1 font-serif-luxury">
                  &ldquo;A single drop of centifolia absolute requires 400 hand-picked petals plucked before the morning mist dissolves.&rdquo;
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Philosophy
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              Why We Refuse To Dilute: The 30% Principle
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed font-light">
              Commercial fragrances typically hover between 10% and 15% fragrance concentration. 
              At Élysian Noir, every flacon is formulated as a genuine <strong>Extrait de Parfum</strong> with 30% to 35% pure oil density.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              This high oil concentration transforms how scent behaves on your skin: instead of an aggressive alcohol flash that vanishes after 3 hours, our extraits melt into your dermal warmth, releasing cascading top, heart, and base notes over 16 to 20 hours.
            </p>

            {/* Metric Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-[#121219] border border-[#222230]">
                <span className="text-2xl font-serif-luxury text-[#d4af37] font-bold block">32%+</span>
                <span className="text-xs text-zinc-400 mt-1 block">Extrait Oil Potency</span>
              </div>
              <div className="p-4 rounded-xl bg-[#121219] border border-[#222230]">
                <span className="text-2xl font-serif-luxury text-[#d4af37] font-bold block">18 Mo.</span>
                <span className="text-xs text-zinc-400 mt-1 block">Oak Barrel Aging</span>
              </div>
              <div className="p-4 rounded-xl bg-[#121219] border border-[#222230]">
                <span className="text-2xl font-serif-luxury text-[#d4af37] font-bold block">5</span>
                <span className="text-xs text-zinc-400 mt-1 block">Signature Masterpieces</span>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            THE THREE SACRED PILLARS
        ========================================================================= */}
        <section className="space-y-12 border-t border-[#1a1a24] pt-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Trinity of Mastery
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              Three Unbending Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-[#111118] border border-[#21212f] space-y-4 hover:border-[#d4af37]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#181824] border border-[#28283a] flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                <DropletsIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl text-white">Slow Hydro-Distillation</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Utilizing low-pressure copper alambic stills in Grasse to gently coax essential essences without scorching delicate volatile aroma molecules.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#111118] border border-[#21212f] space-y-4 hover:border-[#d4af37]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#181824] border border-[#28283a] flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                <ShieldCheckIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl text-white">Generational Harvest Ethics</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                All sandalwood is sustainably sourced with government replanting permits in Western Australia; Bulgarian roses are cut strictly by hand at daybreak.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-[#111118] border border-[#21212f] space-y-4 hover:border-[#d4af37]/40 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#181824] border border-[#28283a] flex items-center justify-center text-[#d4af37] group-hover:scale-110 transition-transform">
                <SparklesIcon className="w-6 h-6" />
              </div>
              <h3 className="font-serif-luxury text-xl text-white">Flacon Haute Horlogerie</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                Heavyweight crystal bottles blown by artisans in Normandy, weighted zamak caps with magnetic closure, and individual hand-embossed batch numbers.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            THE MASTER NOSES: THE 5 PERFUMERS
        ========================================================================= */}
        <section className="space-y-12 border-t border-[#1a1a24] pt-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Olfactory Virtuosos
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              Meet The Master Noses
            </h2>
            <p className="text-xs text-zinc-400">
              Each creation in our 5-perfume flagship collection was entrusted to an undisputed titan of contemporary French haute parfumerie.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {masterPerfumers.map((perfumer, idx) => (
              <div
                key={idx}
                className="bg-[#121219] border border-[#222230] hover:border-[#d4af37]/40 rounded-2xl p-6 flex flex-col justify-between space-y-4 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="space-y-4">
                  <div className="relative aspect-square rounded-xl overflow-hidden bg-[#181824] border border-[#2c2c3d]">
                    <img
                      src={perfumer.image}
                      alt={perfumer.name}
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[10px] uppercase tracking-wider text-[#d4af37] text-center border border-white/10">
                      {perfumer.origin}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-serif-luxury text-lg text-white font-semibold">{perfumer.name}</h4>
                    <span className="text-xs text-[#d4af37] font-medium block mt-0.5">
                      Flacon: {perfumer.perfume}
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 italic leading-relaxed">
                    &ldquo;{perfumer.quote}&rdquo;
                  </p>
                </div>

                <Link
                  href={`/product/${PERFUMES[idx]?.id || "oud-imperial-absolu"}`}
                  className="text-[11px] uppercase tracking-wider text-zinc-300 hover:text-[#d4af37] flex items-center space-x-1 pt-2 border-t border-[#1e1e2b]"
                >
                  <span>Experience Scent</span>
                  <ArrowRightIcon className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            HISTORICAL TIMELINE
        ========================================================================= */}
        <section className="space-y-12 border-t border-[#1a1a24] pt-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Lineage
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              Nearly A Century of Mastery
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {milestones.map((m, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-[#101017] border border-[#222230] space-y-3 relative overflow-hidden"
              >
                <span className="text-3xl font-serif-luxury font-bold text-[#d4af37] block">
                  {m.year}
                </span>
                <h4 className="text-white text-base font-semibold">{m.title}</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">{m.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            CALL TO ACTION
        ========================================================================= */}
        <section className="rounded-3xl overflow-hidden bg-gradient-to-r from-[#171722] via-[#1e1a24] to-[#12121a] border border-[#d4af37]/35 p-10 sm:p-16 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-4">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold block">
              Enter The Sanctuary
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-light leading-tight">
              Begin Your Olfactory Journey With The 5 Creations
            </h2>
            <p className="text-sm text-zinc-300 font-light leading-relaxed">
              Every bottle order is accompanied by complimentary 2ml discovery vials to sample before unsealing your flacon.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/shop"
                className="px-8 py-4 bg-[#d4af37] hover:bg-[#e6ca7b] text-black font-semibold text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-xl shadow-[#d4af37]/20"
              >
                Explore The 5 Masterpieces
              </Link>
              <Link
                href="/scent-finder"
                className="px-8 py-4 bg-[#14141e] hover:bg-[#1f1f2d] text-zinc-200 border border-[#2c2c3d] font-semibold text-xs uppercase tracking-[0.2em] rounded-full transition-all"
              >
                Take Scent Finder Quiz
              </Link>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
