"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PERFUMES, Perfume } from "@/data/perfumes";
import { useCart } from "@/context/CartContext";
import {
  CompassIcon,
  SparklesIcon,
  ArrowRightIcon,
  StarIcon,
  CheckIcon,
  BagIcon,
} from "@/components/Icons";

export default function ScentFinderPage() {
  const { addToCart } = useCart();
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedIntensity, setSelectedIntensity] = useState<string | null>(null);
  const [selectedOccasion, setSelectedOccasion] = useState<string | null>(null);
  const [recommendedPerfume, setRecommendedPerfume] = useState<Perfume | null>(null);
  const [isAdded, setIsAdded] = useState(false);

  const questions = [
    {
      title: "What atmosphere or emotional world calls to you?",
      subtitle: "Close your eyes and choose the landscape of your memory.",
      options: [
        {
          id: "oud",
          label: "Smoldering Dark Woods & Royal Incense",
          desc: "Midnight embers, Cambodian agarwood, and regal saffron.",
          category: "Smoked Oud",
          perfumeId: "oud-imperial-absolu",
        },
        {
          id: "santal",
          label: "Weightless Cashmere & Creamy Sandalwood",
          desc: "Warm Australian woods, Florentine iris butter, and serene peace.",
          category: "Woody & Amber",
          perfumeId: "santal-blanche",
        },
        {
          id: "rose",
          label: "Nocturnal Crimson Velvet & Dark Cassis",
          desc: "Bulgarian damask roses cut at dusk, spiked with patchouli.",
          category: "Velvet Floral",
          perfumeId: "rose-nocturne",
        },
        {
          id: "figue",
          label: "Sun-Warmed Aegean Fig & Coastal Spray",
          desc: "Crushed green leaves, ripe fig nectar, and Mediterranean driftwood.",
          category: "Fresh Aquatic",
          perfumeId: "nectar-de-figue",
        },
        {
          id: "neroli",
          label: "Sparkling Citrus Groves & Golden Orange Blossom",
          desc: "Calabrian bergamot, Tunisian neroli, and sunny Mediterranean warmth.",
          category: "Citrus & Gourmand",
          perfumeId: "fleur-doranger-prive",
        },
      ],
    },
    {
      title: "What sillage and presence do you wish to project?",
      subtitle: "Fragrance is the invisible garment that precedes your arrival.",
      options: [
        {
          id: "magnetic",
          label: "Magnetic & Enormous",
          desc: "A bold trail that commands reverence and turns heads across a room.",
        },
        {
          id: "intimate",
          label: "Intimate & Dermal",
          desc: "A whisper of pure luxury that is revealed only when someone draws close.",
        },
        {
          id: "radiant",
          label: "Radiant & Luminous",
          desc: "An uplifting aura that leaves a memorable impression like sunlit air.",
        },
      ],
    },
    {
      title: "Where will this creation spend its time?",
      subtitle: "Choose your primary canvas for this olfactory extrait.",
      options: [
        {
          id: "evening",
          label: "Black-Tie Soirées & Nocturnal Encounters",
          desc: "Silk lapels, low-lit salons, and unforgettable nights.",
        },
        {
          id: "signature",
          label: "Daily Signature & Executive Presence",
          desc: "Boardrooms, private galleries, and effortless everyday poise.",
        },
        {
          id: "retreat",
          label: "Sunlit Escapes & Coastal Rejuvenation",
          desc: "Linen shirts, open sea terraces, and breezy afternoon escapes.",
        },
      ],
    },
  ];

  const handleSelectOption = (index: number, optionId: string) => {
    if (index === 0) {
      setSelectedMood(optionId);
      setCurrentStep(1);
    } else if (index === 1) {
      setSelectedIntensity(optionId);
      setCurrentStep(2);
    } else if (index === 2) {
      setSelectedOccasion(optionId);
      calculateMatch(selectedMood || "oud");
    }
  };

  const calculateMatch = (moodId: string) => {
    const matched = PERFUMES.find((p) => {
      if (moodId === "oud") return p.id === "oud-imperial-absolu";
      if (moodId === "santal") return p.id === "santal-blanche";
      if (moodId === "rose") return p.id === "rose-nocturne";
      if (moodId === "figue") return p.id === "nectar-de-figue";
      if (moodId === "neroli") return p.id === "fleur-doranger-prive";
      return p.id === "oud-imperial-absolu";
    });

    setRecommendedPerfume(matched || PERFUMES[0]);
    setCurrentStep(3);
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedMood(null);
    setSelectedIntensity(null);
    setSelectedOccasion(null);
    setRecommendedPerfume(null);
    setIsAdded(false);
  };

  const handleAddMatchToCart = () => {
    if (recommendedPerfume) {
      setIsAdded(true);
      addToCart(recommendedPerfume, recommendedPerfume.sizes[1] || recommendedPerfume.sizes[0], 1);
      setTimeout(() => setIsAdded(false), 1500);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto space-y-10 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 pt-6">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            <CompassIcon className="w-3.5 h-3.5" />
            <span>Diagnostic Olfactif Sur-Mesure</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl text-white font-light">
            The Bespoke Scent Finder
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl mx-auto">
            Answer 3 intuitive questions to discover which of our 5 master formulations was composed for your skin and presence.
          </p>
        </div>

        {/* Progress Bar */}
        {currentStep < 3 && (
          <div className="space-y-2 max-w-md mx-auto">
            <div className="flex justify-between text-xs text-zinc-400">
              <span>Question {currentStep + 1} of 3</span>
              <span className="text-[#d4af37]">{((currentStep + 1) / 3 * 100).toFixed(0)}% Complete</span>
            </div>
            <div className="w-full bg-[#1b1b26] h-1.5 rounded-full overflow-hidden">
              <div
                className="bg-gradient-to-r from-[#d4af37] to-[#fae5a2] h-full transition-all duration-300"
                style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Questions Carousel */}
        {currentStep < 3 ? (
          <div className="bg-[#111118] border border-[#232332] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fadeIn">
            <div className="space-y-2 text-center sm:text-left">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Step 0{currentStep + 1}
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white">
                {questions[currentStep].title}
              </h2>
              <p className="text-xs sm:text-sm text-zinc-400">
                {questions[currentStep].subtitle}
              </p>
            </div>

            <div className="space-y-3">
              {questions[currentStep].options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelectOption(currentStep, opt.id)}
                  className="w-full p-5 rounded-2xl bg-[#161622] hover:bg-[#1f1f2e] border border-[#272738] hover:border-[#d4af37] text-left transition-all group flex items-center justify-between"
                >
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-serif-luxury text-white group-hover:text-[#d4af37] transition-colors">
                      {opt.label}
                    </h4>
                    <p className="text-xs text-zinc-400 font-light">{opt.desc}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center text-zinc-400 group-hover:border-[#d4af37] group-hover:text-[#d4af37] transition-all flex-shrink-0 ml-4">
                    →
                  </div>
                </button>
              ))}
            </div>

            {currentStep > 0 && (
              <div className="pt-2 text-center">
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  ← Back to previous question
                </button>
              </div>
            )}
          </div>
        ) : (
          /* Recommendation Result Screen */
          recommendedPerfume && (
            <div className="bg-[#111118] border border-[#d4af37]/40 rounded-3xl p-8 sm:p-12 shadow-2xl space-y-8 animate-fadeIn">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
                  <SparklesIcon className="w-3.5 h-3.5" />
                  <span>Your Defining Signature Extrait</span>
                </div>
                <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white">
                  We Have Found Your Olfactory Match
                </h2>
              </div>

              {/* Matched Product Card */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-[#151520] border border-[#272738] rounded-2xl p-6 sm:p-8">
                <div className="md:col-span-5 relative aspect-[4/5] rounded-xl overflow-hidden bg-[#181824] border border-[#2b2b3b]">
                  <img
                    src={recommendedPerfume.image}
                    alt={recommendedPerfume.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-[#d4af37] border border-[#d4af37]/30">
                    {recommendedPerfume.category}
                  </div>
                </div>

                <div className="md:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest text-[#d4af37]">
                      {recommendedPerfume.concentration}
                    </span>
                    <div className="flex items-center space-x-1 text-xs text-zinc-300">
                      <StarIcon className="w-3.5 h-3.5 text-[#d4af37]" />
                      <span className="font-semibold">{recommendedPerfume.rating}</span>
                      <span className="text-zinc-500">({recommendedPerfume.reviewsCount} reviews)</span>
                    </div>
                  </div>

                  <h3 className="font-serif-luxury text-3xl text-white">
                    {recommendedPerfume.name}
                  </h3>
                  <p className="text-xs text-zinc-400 italic">
                    &ldquo;{recommendedPerfume.frenchTitle}&rdquo;
                  </p>

                  <p className="text-xs sm:text-sm text-zinc-300 font-light leading-relaxed">
                    {recommendedPerfume.description}
                  </p>

                  {/* Notes snippet */}
                  <div className="pt-2 grid grid-cols-3 gap-2 text-[11px] border-t border-[#232332]">
                    <div>
                      <span className="text-zinc-500 block uppercase">Top</span>
                      <span className="text-zinc-200 font-medium">{recommendedPerfume.topNotes[0]}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block uppercase">Heart</span>
                      <span className="text-zinc-200 font-medium">{recommendedPerfume.heartNotes[0]}</span>
                    </div>
                    <div>
                      <span className="text-zinc-500 block uppercase">Base</span>
                      <span className="text-zinc-200 font-medium">{recommendedPerfume.baseNotes[0]}</span>
                    </div>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={handleAddMatchToCart}
                      className="flex-1 py-3.5 bg-[#d4af37] hover:bg-[#e6ca7b] text-black font-semibold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-[#d4af37]/15 flex items-center justify-center space-x-2"
                    >
                      {isAdded ? (
                        <>
                          <CheckIcon className="w-4 h-4 text-black" />
                          <span>Added to Bag!</span>
                        </>
                      ) : (
                        <>
                          <BagIcon className="w-4 h-4 text-black" />
                          <span>Add Signature ({recommendedPerfume.sizes[1].label} • ${recommendedPerfume.price})</span>
                        </>
                      )}
                    </button>

                    <Link
                      href={`/product/${recommendedPerfume.id}`}
                      className="px-6 py-3.5 bg-[#1f1f2e] hover:bg-[#28283a] text-zinc-200 border border-[#303042] text-xs uppercase tracking-wider rounded-xl transition-all text-center flex items-center justify-center space-x-1"
                    >
                      <span>Full Flacon Specs</span>
                      <ArrowRightIcon className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Reset Quiz button */}
              <div className="text-center pt-2">
                <button
                  onClick={handleReset}
                  className="text-xs uppercase tracking-wider text-zinc-400 hover:text-[#d4af37] transition-colors"
                >
                  ↻ Retake Olfactory Diagnostic Quiz
                </button>
              </div>
            </div>
          )
        )}

      </div>
    </div>
  );
}
