"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Perfume, PERFUMES, BottleSize, PerfumeReview } from "@/data/perfumes";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import {
  StarIcon,
  HeartIcon,
  BagIcon,
  SparklesIcon,
  ClockIcon,
  DropletsIcon,
  ShieldCheckIcon,
  TruckIcon,
  GiftIcon,
  CheckIcon,
  PlusIcon,
  MinusIcon,
  ArrowRightIcon,
} from "@/components/Icons";

interface ProductDetailClientProps {
  perfume: Perfume;
}

export default function ProductDetailClient({ perfume }: ProductDetailClientProps) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1); // Default to 100ml
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(perfume.image);
  const [activeTab, setActiveTab] = useState<"notes" | "story" | "ritual" | "specs">("notes");
  const [reviews, setReviews] = useState<PerfumeReview[]>(perfume.reviews);
  const [isReviewFormOpen, setIsReviewFormOpen] = useState(false);
  const [newReviewAuthor, setNewReviewAuthor] = useState("");
  const [newReviewTitle, setNewReviewTitle] = useState("");
  const [newReviewComment, setNewReviewComment] = useState("");
  const [newReviewRating, setNewReviewRating] = useState(5);
  const [isAddedFeedback, setIsAddedFeedback] = useState(false);

  const selectedSize: BottleSize = perfume.sizes[selectedSizeIndex] || perfume.sizes[0];
  const wishlisted = isWishlisted(perfume.id);

  // Recommendations: Other 3 perfumes excluding current
  const relatedPerfumes = PERFUMES.filter((p) => p.id !== perfume.id).slice(0, 4);

  const handleAddToCart = () => {
    setIsAddedFeedback(true);
    addToCart(perfume, selectedSize, quantity);
    setTimeout(() => setIsAddedFeedback(false), 900);
  };

  const handleAddReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewAuthor.trim() || !newReviewComment.trim()) return;

    const newRev: PerfumeReview = {
      id: `rev-${Date.now()}`,
      author: newReviewAuthor,
      rating: newReviewRating,
      date: "Just now",
      title: newReviewTitle || "Exceptional fragrance",
      comment: newReviewComment,
      verified: true,
    };

    setReviews([newRev, ...reviews]);
    setNewReviewAuthor("");
    setNewReviewTitle("");
    setNewReviewComment("");
    setIsReviewFormOpen(false);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center space-x-2 text-xs uppercase tracking-wider text-zinc-500">
          <Link href="/" className="hover:text-[#d4af37] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#d4af37] transition-colors">
            The Collection
          </Link>
          <span>/</span>
          <Link
            href={`/shop?category=${encodeURIComponent(perfume.category)}`}
            className="hover:text-[#d4af37] transition-colors"
          >
            {perfume.category}
          </Link>
          <span>/</span>
          <span className="text-[#d4af37] font-medium">{perfume.name}</span>
        </nav>

        {/* Primary Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Visual Media Gallery (Spans 6 cols) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Stage Image */}
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden bg-[#13131c] border border-[#262635] shadow-2xl">
              <img
                src={selectedImage}
                alt={perfume.name}
                className="w-full h-full object-cover transition-all duration-700"
              />

              {/* Badges Overlay */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {perfume.badge && (
                  <span className="text-xs uppercase font-semibold px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/35 shadow-lg">
                    {perfume.badge}
                  </span>
                )}
                <span className="text-xs uppercase font-medium px-3 py-1 rounded-full bg-zinc-900/80 backdrop-blur-md text-zinc-300">
                  {perfume.category}
                </span>
              </div>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(perfume.id)}
                className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md transition-all ${
                  wishlisted
                    ? "bg-[#d4af37] text-black shadow-lg"
                    : "bg-black/60 text-white hover:text-[#d4af37]"
                }`}
                aria-label="Wishlist"
              >
                <HeartIcon className="w-5 h-5" filled={wishlisted} />
              </button>
            </div>

            {/* Thumbnail selector */}
            <div className="grid grid-cols-3 gap-3">
              {perfume.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`aspect-[4/3] rounded-xl overflow-hidden border transition-all ${
                    selectedImage === img
                      ? "border-[#d4af37] ring-2 ring-[#d4af37]/20 scale-[1.02]"
                      : "border-[#252533] opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="Thumbnail view" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            {/* Guarantee Pill bar below images */}
            <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs">
              <div className="bg-[#121219] p-3 rounded-xl border border-[#20202d] space-y-1">
                <TruckIcon className="w-4 h-4 text-[#d4af37] mx-auto" />
                <span className="text-[11px] text-zinc-300 block font-medium">Free Express Delivery</span>
                <span className="text-[9px] text-zinc-500">Orders over $150</span>
              </div>
              <div className="bg-[#121219] p-3 rounded-xl border border-[#20202d] space-y-1">
                <GiftIcon className="w-4 h-4 text-[#d4af37] mx-auto" />
                <span className="text-[11px] text-zinc-300 block font-medium">2 Free 2ml Samples</span>
                <span className="text-[9px] text-zinc-500">Test before unwrapping</span>
              </div>
              <div className="bg-[#121219] p-3 rounded-xl border border-[#20202d] space-y-1">
                <ShieldCheckIcon className="w-4 h-4 text-[#d4af37] mx-auto" />
                <span className="text-[11px] text-zinc-300 block font-medium">30-Day Guarantee</span>
                <span className="text-[9px] text-zinc-500">Unopened seal return</span>
              </div>
            </div>
          </div>

          {/* Right Column: Formulation Details & Purchase Suite (Spans 6 cols) */}
          <div className="lg:col-span-6 space-y-8">
            
            {/* Header info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-xs tracking-widest uppercase">
                <span className="text-[#d4af37] font-semibold">{perfume.concentration}</span>
                <span className="text-zinc-600">•</span>
                <span className="text-zinc-400">{perfume.gender}</span>
              </div>

              <h1 className="font-serif-luxury text-4xl sm:text-5xl font-normal text-white">
                {perfume.name}
              </h1>
              <p className="text-sm text-[#d4af37] font-light italic">{perfume.frenchTitle}</p>

              {/* Star Rating summary */}
              <div className="flex items-center space-x-3 text-xs pt-1">
                <div className="flex text-[#d4af37]">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="w-4 h-4" />
                  ))}
                </div>
                <span className="font-semibold text-white">{perfume.rating} / 5.0</span>
                <span className="text-zinc-500">({reviews.length} authenticated reviews)</span>
              </div>

              <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed pt-2">
                {perfume.tagline}
              </p>
            </div>

            {/* Dynamic Price Display */}
            <div className="p-5 rounded-2xl bg-[#12121a] border border-[#222230] flex items-center justify-between">
              <div>
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 block">
                  Flacon Price ({selectedSize.size})
                </span>
                <div className="flex items-baseline space-x-3">
                  <span className="font-serif-luxury text-3xl font-semibold text-white">
                    ${selectedSize.price * quantity}
                  </span>
                  {quantity > 1 && (
                    <span className="text-xs text-zinc-400">
                      (${selectedSize.price} each)
                    </span>
                  )}
                  {perfume.originalPrice && selectedSizeIndex === 1 && (
                    <span className="text-sm text-zinc-500 line-through">
                      ${perfume.originalPrice * quantity}
                    </span>
                  )}
                </div>
              </div>
              <span className="text-xs text-emerald-400 font-medium bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
                In Stock • Grasse Reserve
              </span>
            </div>

            {/* Bottle Volume Selector */}
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-widest text-zinc-400 font-medium block">
                Select Bottle Volume:
              </label>
              <div className="grid grid-cols-3 gap-3">
                {perfume.sizes.map((s, idx) => (
                  <button
                    key={s.size}
                    onClick={() => setSelectedSizeIndex(idx)}
                    className={`p-3 rounded-2xl border text-center transition-all ${
                      selectedSizeIndex === idx
                        ? "border-[#d4af37] bg-[#d4af37]/15 text-[#d4af37] shadow-lg shadow-[#d4af37]/5"
                        : "border-[#252535] bg-[#14141e] text-zinc-400 hover:text-white"
                    }`}
                  >
                    <div className="text-sm font-semibold">{s.size}</div>
                    <div className="text-xs font-serif-luxury mt-0.5 text-white">${s.price}</div>
                    <div className="text-[10px] text-zinc-500 mt-1 truncate">{s.label.split("(")[0]}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Add to Bag CTA */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-4">
                {/* Quantity */}
                <div className="flex items-center space-x-3 border border-[#2b2b3d] rounded-2xl px-4 py-3.5 bg-[#14141e]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="text-zinc-400 hover:text-white"
                    aria-label="Decrease quantity"
                  >
                    <MinusIcon className="w-4 h-4" />
                  </button>
                  <span className="text-sm font-semibold text-white w-6 text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="text-zinc-400 hover:text-white"
                    aria-label="Increase quantity"
                  >
                    <PlusIcon className="w-4 h-4" />
                  </button>
                </div>

                {/* Primary Add Button */}
                <button
                  onClick={handleAddToCart}
                  disabled={isAddedFeedback}
                  className="flex-1 py-4 px-8 rounded-2xl bg-gradient-to-r from-[#d4af37] to-[#e6ca7b] hover:from-[#c29c2d] hover:to-[#d4af37] text-black font-semibold text-xs tracking-[0.2em] uppercase flex items-center justify-center space-x-3 transition-all duration-300 shadow-xl shadow-[#d4af37]/15"
                >
                  <BagIcon className="w-4 h-4" />
                  <span>
                    {isAddedFeedback
                      ? "Added to Bag ✓"
                      : `Add to Bag • $${selectedSize.price * quantity}`}
                  </span>
                </button>
              </div>

              <div className="text-center text-[11px] text-zinc-500 pt-1">
                ✦ Complimentary gift box packaging & 2 discovery vials included automatically at checkout.
              </div>
            </div>

            {/* Metrics Quick Highlights */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="bg-[#121219] p-3.5 rounded-xl border border-[#222230] flex items-center space-x-3">
                <ClockIcon className="w-5 h-5 text-[#d4af37]" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">Longevity</span>
                  <span className="text-xs text-white font-medium">{perfume.longevity}</span>
                </div>
              </div>
              <div className="bg-[#121219] p-3.5 rounded-xl border border-[#222230] flex items-center space-x-3">
                <DropletsIcon className="w-5 h-5 text-[#d4af37]" />
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 block">Sillage</span>
                  <span className="text-xs text-white font-medium">{perfume.sillage}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            DETAILED TABS: Olfactory Notes Pyramid, Brand Story, Ritual & Specs
        ========================================================================= */}
        <div className="pt-10 border-t border-[#1d1d28] space-y-8">
          
          {/* Tab Navigation */}
          <div className="flex border-b border-[#222230] space-x-8 overflow-x-auto">
            {[
              { id: "notes", label: "Scent Pyramid & Accords" },
              { id: "story", label: "The Story & Heritage" },
              { id: "ritual", label: "Application Ritual" },
              { id: "specs", label: "Technical Specifications" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 text-xs uppercase tracking-widest font-semibold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === tab.id
                    ? "border-[#d4af37] text-[#d4af37]"
                    : "border-transparent text-zinc-400 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: Scent Pyramid & Accords */}
          {activeTab === "notes" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Pyramid Cards (Spans 7 cols) */}
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-sm uppercase tracking-widest text-zinc-400 font-semibold mb-4">
                  The Olfactory Pyramid
                </h3>

                {/* Top Notes */}
                <div className="p-6 rounded-2xl bg-[#12121a] border border-[#232333] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#d4af37]">
                      Top Notes (First 15 - 30 Minutes)
                    </span>
                    <span className="text-[10px] text-zinc-500">Initial Impression</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {perfume.topNotes.map((note) => (
                      <span
                        key={note}
                        className="text-xs bg-[#1a1a26] text-zinc-200 px-3 py-1.5 rounded-lg border border-[#2a2a3d]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Heart Notes */}
                <div className="p-6 rounded-2xl bg-[#12121a] border border-[#232333] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#d4af37]">
                      Heart Notes (2 - 6 Hours)
                    </span>
                    <span className="text-[10px] text-zinc-500">Core Character</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {perfume.heartNotes.map((note) => (
                      <span
                        key={note}
                        className="text-xs bg-[#1a1a26] text-zinc-200 px-3 py-1.5 rounded-lg border border-[#2a2a3d]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Base Notes */}
                <div className="p-6 rounded-2xl bg-[#12121a] border border-[#232333] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase tracking-widest font-semibold text-[#d4af37]">
                      Base Notes (6 - 20+ Hours)
                    </span>
                    <span className="text-[10px] text-zinc-500">The Enduring Drydown</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {perfume.baseNotes.map((note) => (
                      <span
                        key={note}
                        className="text-xs bg-[#1a1a26] text-zinc-200 px-3 py-1.5 rounded-lg border border-[#2a2a3d]"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Accords Breakdown (Spans 5 cols) */}
              <div className="lg:col-span-5 bg-[#12121a] border border-[#232333] rounded-2xl p-6 space-y-6">
                <div>
                  <h3 className="text-sm uppercase tracking-widest text-zinc-400 font-semibold">
                    Dominant Olfactory Accords
                  </h3>
                  <p className="text-xs text-zinc-500 mt-1">Laboratory chromatography profile</p>
                </div>

                <div className="space-y-4">
                  {perfume.accords.map((accord) => (
                    <div key={accord.name} className="space-y-1.5">
                      <div className="flex justify-between text-xs">
                        <span className="text-zinc-300 font-medium">{accord.name}</span>
                        <span className="text-[#d4af37] font-semibold">{accord.percentage}%</span>
                      </div>
                      <div className="w-full h-2 bg-[#1a1a24] rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#b58f2d] to-[#d4af37] rounded-full"
                          style={{ width: `${accord.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-[#181822] border border-[#28283a] text-xs text-zinc-400 space-y-1">
                  <span className="text-[#d4af37] font-semibold block">Master Perfumer Note:</span>
                  <p className="leading-relaxed text-zinc-300">
                    &quot;Crafted without artificial fixatives. The projection relies entirely on raw botanical resin density.&quot;
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: The Story & Heritage */}
          {activeTab === "story" && (
            <div className="max-w-3xl space-y-6 text-sm text-zinc-300 leading-relaxed font-light">
              <h3 className="font-serif-luxury text-2xl text-white">The Genesis of {perfume.name}</h3>
              <p>{perfume.description}</p>
              <div className="p-6 rounded-2xl bg-[#12121a] border border-[#222230] space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
                  The Olfactory Narrative
                </span>
                <p className="italic text-zinc-300">{perfume.story}</p>
              </div>
            </div>
          )}

          {/* TAB 3: Ritual */}
          {activeTab === "ritual" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-[#12121a] border border-[#232333] space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
                  01. The Pulse Points
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Mist generously upon warm arterial pulse points: inner wrists, clavicle hollow, and behind the earlobes. Body heat allows natural resins to radiate dynamically.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#12121a] border border-[#232333] space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
                  02. Garment Layering
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Extrait formulations bond exceptionally with natural fabrics like cashmere, raw silk, and wool. Spray from 20cm away to envelop coats and scarves for days.
                </p>
              </div>
              <div className="p-6 rounded-2xl bg-[#12121a] border border-[#232333] space-y-3">
                <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
                  03. Never Rub
                </span>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  Resist the temptation to rub wrists together. Friction crushes delicate volatile top notes like saffron and bergamot, altering the designed scent progression.
                </p>
              </div>
            </div>
          )}

          {/* TAB 4: Technical Specifications */}
          {activeTab === "specs" && (
            <div className="max-w-2xl bg-[#12121a] border border-[#232333] rounded-2xl overflow-hidden divide-y divide-[#1e1e2c] text-xs">
              <div className="flex p-4">
                <span className="w-48 text-zinc-500 uppercase tracking-wider">Perfumer Nose</span>
                <span className="text-white font-medium">{perfume.perfumer}</span>
              </div>
              <div className="flex p-4">
                <span className="w-48 text-zinc-500 uppercase tracking-wider">Provenance & Harvest</span>
                <span className="text-white font-medium">{perfume.harvestOrigin}</span>
              </div>
              <div className="flex p-4">
                <span className="w-48 text-zinc-500 uppercase tracking-wider">Concentration</span>
                <span className="text-white font-medium">{perfume.concentration}</span>
              </div>
              <div className="flex p-4">
                <span className="w-48 text-zinc-500 uppercase tracking-wider">Longevity On Skin</span>
                <span className="text-white font-medium">{perfume.longevity}</span>
              </div>
              <div className="flex p-4">
                <span className="w-48 text-zinc-500 uppercase tracking-wider">Sillage Footprint</span>
                <span className="text-white font-medium">{perfume.sillage}</span>
              </div>
              <div className="flex p-4">
                <span className="w-48 text-zinc-500 uppercase tracking-wider">Optimal Seasons</span>
                <span className="text-white font-medium">{perfume.season.join(", ")}</span>
              </div>
            </div>
          )}
        </div>

        {/* =========================================================================
            CUSTOMER REVIEWS & WRITE A REVIEW FORM
        ========================================================================= */}
        <div className="pt-10 border-t border-[#1d1d28] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Client Testimonials
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white mt-1">
                Authenticated Reviews ({reviews.length})
              </h3>
            </div>

            <button
              onClick={() => setIsReviewFormOpen(!isReviewFormOpen)}
              className="px-6 py-2.5 rounded-full bg-[#1b1b26] hover:bg-[#d4af37] text-[#d4af37] hover:text-black border border-[#d4af37]/35 text-xs font-semibold uppercase tracking-wider transition-all"
            >
              {isReviewFormOpen ? "Cancel Review" : "Write an Olfactory Review"}
            </button>
          </div>

          {/* Interactive Review Form */}
          {isReviewFormOpen && (
            <form
              onSubmit={handleAddReview}
              className="p-6 sm:p-8 rounded-2xl bg-[#12121a] border border-[#d4af37]/40 space-y-4 max-w-2xl animate-in fade-in"
            >
              <h4 className="font-serif-luxury text-lg text-white">Share Your Olfactory Impression</h4>
              
              <div className="space-y-1">
                <label className="text-xs text-zinc-400 block">Star Rating</label>
                <div className="flex space-x-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      type="button"
                      key={star}
                      onClick={() => setNewReviewRating(star)}
                      className={`p-1 ${
                        newReviewRating >= star ? "text-[#d4af37]" : "text-zinc-600"
                      }`}
                    >
                      <StarIcon className="w-5 h-5" filled={newReviewRating >= star} />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={newReviewAuthor}
                    onChange={(e) => setNewReviewAuthor(e.target.value)}
                    placeholder="e.g. Charlotte de V."
                    className="w-full bg-[#181824] border border-[#2b2b3d] text-white text-xs px-3 py-2.5 rounded-xl focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
                <div>
                  <label className="text-xs text-zinc-400 block mb-1">Review Headline</label>
                  <input
                    type="text"
                    value={newReviewTitle}
                    onChange={(e) => setNewReviewTitle(e.target.value)}
                    placeholder="e.g. Unrivaled sillage and longevity"
                    className="w-full bg-[#181824] border border-[#2b2b3d] text-white text-xs px-3 py-2.5 rounded-xl focus:outline-none focus:border-[#d4af37]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-zinc-400 block mb-1">Detailed Sensory Thoughts</label>
                <textarea
                  required
                  rows={3}
                  value={newReviewComment}
                  onChange={(e) => setNewReviewComment(e.target.value)}
                  placeholder="Describe the notes on your skin, the drydown, compliment factor..."
                  className="w-full bg-[#181824] border border-[#2b2b3d] text-white text-xs p-3 rounded-xl focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2.5 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-wider rounded-xl hover:bg-[#e6ca7b] transition-all"
              >
                Submit Review
              </button>
            </form>
          )}

          {/* Reviews List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.id}
                className="p-6 rounded-2xl bg-[#111117] border border-[#20202e] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="flex text-[#d4af37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-3.5 h-3.5" />
                    ))}
                  </div>
                  <span className="text-[11px] text-zinc-500">{rev.date}</span>
                </div>

                <h5 className="font-medium text-white text-sm">{rev.title}</h5>
                <p className="text-xs text-zinc-300 leading-relaxed">&quot;{rev.comment}&quot;</p>

                <div className="flex items-center space-x-2 text-[11px] pt-1">
                  <span className="text-zinc-400 font-medium">{rev.author}</span>
                  {rev.verified && (
                    <span className="text-emerald-400 flex items-center space-x-1">
                      <CheckIcon className="w-3 h-3" />
                      <span>Verified Flacon Owner</span>
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* =========================================================================
            CURATED COMPANIONS (RECOMMENDATIONS FROM THE 15 PRODUCTS)
        ========================================================================= */}
        <div className="pt-10 border-t border-[#1d1d28] space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Olfactory Recommendations
              </span>
              <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white mt-1">
                You May Also Desire
              </h3>
            </div>
            <Link
              href="/shop"
              className="text-xs uppercase tracking-widest text-[#d4af37] hover:underline flex items-center space-x-1"
            >
              <span>View All 15</span>
              <ArrowRightIcon className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedPerfumes.map((p) => (
              <ProductCard key={p.id} perfume={p} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
