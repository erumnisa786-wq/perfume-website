"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PERFUMES, OLFACTORY_FAMILIES } from "@/data/perfumes";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import {
  SparklesIcon,
  CompassIcon,
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  DropletsIcon,
} from "@/components/Icons";

export default function HomePage() {
  const [quickViewPerfume, setQuickViewPerfume] = useState<any>(null);
  const [selectedFamily, setSelectedFamily] = useState(OLFACTORY_FAMILIES[0].name);

  // Featured 5 signature scents
  const featuredPerfumes = PERFUMES;

  // Perfumes for selected family
  const familyPerfumes = PERFUMES.filter((p) => p.category === selectedFamily);

  return (
    <div className="relative overflow-hidden">
      {/* =========================================================================
          HERO SECTION: High Fashion & Haute Parfumerie
      ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center pt-8 pb-20 px-4 sm:px-6 lg:px-8">
        {/* Ambient Luxury Lighting Backdrops */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 right-10 w-[450px] h-[450px] bg-amber-600/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          
          {/* Left Column: Brand Statement & CTA */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#181824] border border-[#d4af37]/40 text-[#d4af37] text-xs uppercase tracking-widest">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>The 2026 Private Harvest Collection</span>
            </div>

            <h1 className="font-serif-luxury text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.08]">
              Bottled Poetry & <br />
              <span className="text-gold-gradient font-normal italic">
                Rare Botanical
              </span>{" "}
              Alchemy.
            </h1>

            <p className="text-base sm:text-lg text-zinc-300 max-w-xl mx-auto lg:mx-0 font-light leading-relaxed">
              Formulated in Grasse, France with over 30% pure extrait oil concentration. 
              Explore our curation of 5 rare fragrances designed to captivate, linger, and define your presence.
            </p>

            {/* Action buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/shop"
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#e6ca7b] hover:from-[#c29c2d] hover:to-[#d4af37] text-black text-xs uppercase tracking-[0.2em] font-semibold rounded-full transition-all duration-300 shadow-xl shadow-[#d4af37]/15 flex items-center justify-center space-x-2"
              >
                <span>Explore The 5 Creations</span>
                <ArrowRightIcon className="w-4 h-4" />
              </Link>

              <Link
                href="/scent-finder"
                className="w-full sm:w-auto px-8 py-4 bg-[#14141d] hover:bg-[#1f1f2d] text-zinc-200 hover:text-white border border-[#2c2c3d] hover:border-[#d4af37]/50 text-xs uppercase tracking-[0.2em] font-semibold rounded-full transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <CompassIcon className="w-4 h-4 text-[#d4af37]" />
                <span>Find Your Scent Quiz</span>
              </Link>
            </div>

            {/* Badges / Micro proof */}
            <div className="pt-6 border-t border-[#1e1e2b] flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-zinc-400">
              <div className="flex items-center space-x-2">
                <span className="text-[#d4af37] text-base">✦</span>
                <span>30%+ Pure Extrait Oils</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#d4af37] text-base">✦</span>
                <span>Hand-Poured in Grasse</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-[#d4af37] text-base">✦</span>
                <span>Two Free 2ml Samples With Order</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Showcase Flacon Card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Floating ambient glow frame */}
              <div className="relative rounded-3xl overflow-hidden bg-[#13131c] border border-[#d4af37]/30 shadow-2xl p-6 sm:p-8 backdrop-blur-xl group">
                
                {/* Image showcase */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#191925] mb-6">
                  <img
                    src={PERFUMES[0].image}
                    alt={PERFUMES[0].name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-[#d4af37] border border-[#d4af37]/30">
                    Flagship Extrait
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-[#d4af37]">
                      {PERFUMES[0].category}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-zinc-300">
                      <StarIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="font-semibold">{PERFUMES[0].rating}</span>
                      <span className="text-zinc-500">({PERFUMES[0].reviewsCount})</span>
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-2xl font-normal text-white">
                    {PERFUMES[0].name}
                  </h3>
                  <p className="text-xs text-zinc-400 italic">
                    {PERFUMES[0].tagline}
                  </p>

                  <div className="pt-3 flex items-center justify-between border-t border-[#232332]">
                    <div>
                      <span className="text-xs text-zinc-500 block">Flacon Privé</span>
                      <span className="text-lg font-bold text-white font-serif-luxury">
                        ${PERFUMES[0].price}
                      </span>
                    </div>

                    <Link
                      href={`/product/${PERFUMES[0].id}`}
                      className="px-5 py-2.5 rounded-xl bg-[#d4af37] text-black text-xs font-semibold tracking-wider uppercase hover:bg-[#e6ca7b] transition-colors"
                    >
                      Experience Scent
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED MASTERPIECES: 4 Selected Icons
      ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#181822] bg-[#0c0c10]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-2">
              <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                Haute Parfumerie Highlights
              </span>
              <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white">
                Signature Formulations
              </h2>
              <p className="text-sm text-zinc-400 max-w-xl">
                Uncompromising extraits aged in dark cellar oak barrels to achieve supreme olfactory richness and unrivaled 16-hour longevity.
              </p>
            </div>

            <Link
              href="/shop"
              className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#d4af37] hover:text-[#f5e29f] transition-colors"
            >
              <span>View All 5 Creations</span>
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          {/* Grid of 5 Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredPerfumes.map((perfume) => (
              <ProductCard
                key={perfume.id}
                perfume={perfume}
                onQuickView={setQuickViewPerfume}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          OLFACTORY FAMILIES EXPLORATION
      ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#181822] bg-[#09090c]">
        <div className="max-w-7xl mx-auto space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Scent Spheres
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white">
              Explore By Olfactory Family
            </h2>
            <p className="text-sm text-zinc-400">
              Each family embodies an emotional territory, from smoldering nocturnal resins to crystalline aquatic breezes.
            </p>
          </div>

          {/* Category Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {OLFACTORY_FAMILIES.map((fam) => (
              <button
                key={fam.name}
                onClick={() => setSelectedFamily(fam.name)}
                className={`px-5 py-3 rounded-full text-xs uppercase tracking-wider font-medium transition-all ${
                  selectedFamily === fam.name
                    ? "bg-[#d4af37] text-black shadow-lg shadow-[#d4af37]/20 font-semibold"
                    : "bg-[#14141d] text-zinc-400 hover:text-white border border-[#242432]"
                }`}
              >
                {fam.name} ({fam.count})
              </button>
            ))}
          </div>

          {/* Family Description Banner */}
          <div className="bg-[#12121a] border border-[#232332] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <h3 className="font-serif-luxury text-2xl text-white">
                {selectedFamily} Realm
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-2xl">
                {OLFACTORY_FAMILIES.find((f) => f.name === selectedFamily)?.description}
              </p>
            </div>

            <Link
              href={`/shop?category=${encodeURIComponent(selectedFamily)}`}
              className="px-6 py-3 bg-[#1e1e2b] hover:bg-[#d4af37] text-zinc-200 hover:text-black text-xs uppercase tracking-widest font-semibold rounded-full border border-[#303042] hover:border-transparent transition-all whitespace-nowrap"
            >
              Filter in Catalog →
            </Link>
          </div>

          {/* Perfumes in this Family */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {familyPerfumes.map((perfume) => (
              <ProductCard
                key={perfume.id}
                perfume={perfume}
                onQuickView={setQuickViewPerfume}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE QUIZ TEASER BANNER
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#181822]">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#171722] via-[#1c1822] to-[#12121a] border border-[#d4af37]/35 p-8 sm:p-14 shadow-2xl">
            {/* Ambient gold glow */}
            <div className="absolute right-0 top-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl space-y-6">
              <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-[#d4af37]">
                <CompassIcon className="w-4 h-4" />
                <span>Bespoke Olfactory Consultation</span>
              </div>

              <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-normal leading-tight">
                Not sure which rare extract belongs on your skin?
              </h2>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
                Take our 4-step Fragrance Finder quiz. In under 90 seconds, our master perfumery algorithm matches your temperament, sillage desires, and personal aesthetic to your soulmate scent.
              </p>

              <div className="pt-2">
                <Link
                  href="/scent-finder"
                  className="inline-flex items-center space-x-3 px-8 py-4 rounded-full bg-[#d4af37] hover:bg-[#e6ca7b] text-black font-semibold text-xs uppercase tracking-[0.2em] transition-all shadow-xl shadow-[#d4af37]/15"
                >
                  <span>Begin Scent Consultation</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          L'ATELIER DE GRASSE: HERITAGE & ARTISANRY
      ========================================================================= */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 border-t border-[#181822] bg-[#0c0c11]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Our Grasse Heritage • Est. 1928
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-white font-light">
              Slow Extraction, <br />
              <span className="text-gold-gradient font-normal italic">Timeless French</span> Savoir-Faire.
            </h2>
            <p className="text-sm text-zinc-300 leading-relaxed font-light">
              In an era dominated by synthetic acceleration, Élysian Noir honors the lost art of patient maturation. From the hand-harvested centifolia roses of Grasse to aged Cambodian oud trunks preserved for decades, we select solely what is rare and irreplaceable.
            </p>
            <p className="text-sm text-zinc-400 leading-relaxed">
              Every glass flacon is blown in Normandy, stamped with 24-karat gold foil, and hand-inspected before leaving our Parisian salon.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="border-l-2 border-[#d4af37] pl-4">
                <span className="text-2xl font-serif-luxury font-bold text-white block">30% - 35%</span>
                <span className="text-xs text-zinc-400">Pure Extrait Concentration</span>
              </div>
              <div className="border-l-2 border-[#d4af37] pl-4">
                <span className="text-2xl font-serif-luxury font-bold text-white block">18 Months</span>
                <span className="text-xs text-zinc-400">Aged in French Oak Barrels</span>
              </div>
            </div>
          </div>

          {/* Visual Showcase */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-[#1a1a24] border border-[#2b2b3a]">
                <img
                  src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop"
                  alt="Artisanal perfume bottle"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 rounded-xl bg-[#13131c] border border-[#21212d] text-center">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                  100% Recyclable Glass
                </span>
                <p className="text-[11px] text-zinc-400 mt-0.5">Refillable in Paris Atelier</p>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-4 rounded-xl bg-[#13131c] border border-[#21212d] text-center">
                <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold">
                  Zero Synthetic Fixatives
                </span>
                <p className="text-[11px] text-zinc-400 mt-0.5">Natural resin preservation</p>
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[3/4] bg-[#1a1a24] border border-[#2b2b3a]">
                <img
                  src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=800&auto=format&fit=crop"
                  alt="Amber perfume extrait"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          PRESS & ACCLAIM
      ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-[#181822] bg-[#08080a]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              The Critical Acclaim
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-8 rounded-2xl bg-[#111118] border border-[#21212f] space-y-4">
              <div className="flex justify-center text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <blockquote className="text-sm italic text-zinc-300">
                &quot;Élysian Noir proves that true luxury perfumery is alive. Oud Impérial Absolu is an astonishing masterpiece of balance.&quot;
              </blockquote>
              <cite className="block text-xs uppercase tracking-widest text-[#d4af37] font-semibold not-italic">
                — Vogue France
              </cite>
            </div>

            <div className="p-8 rounded-2xl bg-[#111118] border border-[#21212f] space-y-4">
              <div className="flex justify-center text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <blockquote className="text-sm italic text-zinc-300">
                &quot;The longevity is nothing short of miraculous. Santal Blanche stays on a cashmere scarf for nearly a full week.&quot;
              </blockquote>
              <cite className="block text-xs uppercase tracking-widest text-[#d4af37] font-semibold not-italic">
                — Harper&apos;s Bazaar
              </cite>
            </div>

            <div className="p-8 rounded-2xl bg-[#111118] border border-[#21212f] space-y-4">
              <div className="flex justify-center text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-4 h-4" />
                ))}
              </div>
              <blockquote className="text-sm italic text-zinc-300">
                &quot;A rare house that treats olfactory craft with the same reverence as grand cru Bordeaux wines.&quot;
              </blockquote>
              <cite className="block text-xs uppercase tracking-widest text-[#d4af37] font-semibold not-italic">
                — GQ Luxury Journal
              </cite>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickViewModal
        perfume={quickViewPerfume}
        onClose={() => setQuickViewPerfume(null)}
      />
    </div>
  );
}
