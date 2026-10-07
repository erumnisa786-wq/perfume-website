"use client";

import React, { useState, useMemo } from "react";
import { PERFUMES, OLFACTORY_FAMILIES, Perfume } from "@/data/perfumes";
import ProductCard from "@/components/ProductCard";
import QuickViewModal from "@/components/QuickViewModal";
import { useCart } from "@/context/CartContext";
import {
  FilterIcon,
  SearchIcon,
  XIcon,
  SparklesIcon,
  HeartIcon,
  ChevronDownIcon,
} from "@/components/Icons";

export default function ShopPage() {
  const { wishlist } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedConcentration, setSelectedConcentration] = useState<string>("All");
  const [selectedGender, setSelectedGender] = useState<string>("All");
  const [selectedTag, setSelectedTag] = useState<string>("All"); // 'Bestseller', 'Private Reserve', 'Wishlist'
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [quickViewPerfume, setQuickViewPerfume] = useState<Perfume | null>(null);

  // Filter & Sort Logic
  const filteredPerfumes = useMemo(() => {
    return PERFUMES.filter((perfume) => {
      // Category filter
      if (selectedCategory !== "All" && perfume.category !== selectedCategory) {
        return false;
      }
      // Concentration filter
      if (
        selectedConcentration !== "All" &&
        !perfume.concentration.toLowerCase().includes(selectedConcentration.toLowerCase())
      ) {
        return false;
      }
      // Gender filter
      if (selectedGender !== "All" && perfume.gender !== selectedGender) {
        return false;
      }
      // Tag filter
      if (selectedTag === "Wishlist" && !wishlist.includes(perfume.id)) {
        return false;
      }
      if (selectedTag === "Bestseller" && perfume.badge !== "Bestseller") {
        return false;
      }
      if (selectedTag === "Private Reserve" && perfume.badge !== "Private Reserve") {
        return false;
      }
      if (selectedTag === "New Release" && perfume.badge !== "New Release") {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = perfume.name.toLowerCase().includes(q);
        const matchTagline = perfume.tagline.toLowerCase().includes(q);
        const matchCategory = perfume.category.toLowerCase().includes(q);
        const matchNotes = [
          ...perfume.topNotes,
          ...perfume.heartNotes,
          ...perfume.baseNotes,
        ].some((n) => n.toLowerCase().includes(q));

        if (!matchName && !matchTagline && !matchCategory && !matchNotes) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "reviews") return b.reviewsCount - a.reviewsCount;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0; // default featured
    });
  }, [
    selectedCategory,
    selectedConcentration,
    selectedGender,
    selectedTag,
    searchQuery,
    sortBy,
    wishlist,
  ]);

  const resetFilters = () => {
    setSelectedCategory("All");
    setSelectedConcentration("All");
    setSelectedGender("All");
    setSelectedTag("All");
    setSearchQuery("");
    setSortBy("featured");
  };

  const hasActiveFilters =
    selectedCategory !== "All" ||
    selectedConcentration !== "All" ||
    selectedGender !== "All" ||
    selectedTag !== "All" ||
    searchQuery.trim() !== "";

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Page Hero Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto pt-6">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>The Flagship Collection (5 Signature Extraits)</span>
          </div>
          <h1 className="font-serif-luxury text-4xl sm:text-6xl text-white font-light">
            Artisanal Formulations
          </h1>
          <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed">
            Every flacon is distilled in Grasse from sustainably sourced botanical absolutes and rare resins. 
            Select your olfactory territory below or search by specific notes like Iris, Oud, or Sandalwood.
          </p>
        </div>

        {/* Filter & Controls Suite */}
        <div className="bg-[#101017] border border-[#232332] rounded-2xl p-6 space-y-6 shadow-xl">
          
          {/* Top row: Search and Sort */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search notes, names, ingredients..."
                className="w-full bg-[#171724] border border-[#2b2b3d] focus:border-[#d4af37] rounded-xl pl-11 pr-10 py-3 text-xs text-white placeholder-zinc-500 focus:outline-none transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white"
                >
                  <XIcon className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center space-x-3 w-full md:w-auto justify-end">
              <span className="text-xs uppercase tracking-wider text-zinc-400">Sort by:</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#171724] border border-[#2b2b3d] text-xs text-zinc-200 py-3 pl-4 pr-10 rounded-xl focus:outline-none focus:border-[#d4af37] appearance-none cursor-pointer"
                >
                  <option value="featured">Featured Masterpieces</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="reviews">Most Reviewed</option>
                  <option value="name">Name (A - Z)</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
                  <ChevronDownIcon className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Olfactory Families Tabs */}
          <div>
            <div className="text-[11px] uppercase tracking-widest text-zinc-500 mb-2 font-medium">
              Olfactory Families
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`text-xs px-4 py-2 rounded-full uppercase tracking-wider transition-all ${
                  selectedCategory === "All"
                    ? "bg-[#d4af37] text-black font-semibold shadow-md"
                    : "bg-[#171724] text-zinc-400 hover:text-white border border-[#29293b]"
                }`}
              >
                All Families (15)
              </button>
              {OLFACTORY_FAMILIES.map((fam) => (
                <button
                  key={fam.name}
                  onClick={() => setSelectedCategory(fam.name)}
                  className={`text-xs px-4 py-2 rounded-full uppercase tracking-wider transition-all ${
                    selectedCategory === fam.name
                      ? "bg-[#d4af37] text-black font-semibold shadow-md"
                      : "bg-[#171724] text-zinc-400 hover:text-white border border-[#29293b]"
                  }`}
                >
                  {fam.name} ({fam.count})
                </button>
              ))}
            </div>
          </div>

          {/* Secondary filter chips: Gender, Concentration & Badges */}
          <div className="pt-2 border-t border-[#1d1d28] flex flex-wrap items-center justify-between gap-4 text-xs">
            <div className="flex flex-wrap items-center gap-2">
              {/* Quick tags */}
              <button
                onClick={() => setSelectedTag(selectedTag === "Bestseller" ? "All" : "Bestseller")}
                className={`px-3 py-1.5 rounded-lg border transition-all ${
                  selectedTag === "Bestseller"
                    ? "border-[#d4af37] bg-[#d4af37]/20 text-[#d4af37]"
                    : "border-[#262638] bg-[#14141e] text-zinc-400 hover:text-white"
                }`}
              >
                ★ Bestsellers
              </button>
              <button
                onClick={() =>
                  setSelectedTag(selectedTag === "Private Reserve" ? "All" : "Private Reserve")
                }
                className={`px-3 py-1.5 rounded-lg border transition-all ${
                  selectedTag === "Private Reserve"
                    ? "border-[#d4af37] bg-[#d4af37]/20 text-[#d4af37]"
                    : "border-[#262638] bg-[#14141e] text-zinc-400 hover:text-white"
                }`}
              >
                ✦ Private Reserve
              </button>
              <button
                onClick={() => setSelectedTag(selectedTag === "Wishlist" ? "All" : "Wishlist")}
                className={`px-3 py-1.5 rounded-lg border flex items-center space-x-1.5 transition-all ${
                  selectedTag === "Wishlist"
                    ? "border-[#d4af37] bg-[#d4af37]/20 text-[#d4af37]"
                    : "border-[#262638] bg-[#14141e] text-zinc-400 hover:text-white"
                }`}
              >
                <HeartIcon className="w-3.5 h-3.5" filled={selectedTag === "Wishlist"} />
                <span>My Wishlist ({wishlist.length})</span>
              </button>

              {/* Gender selector */}
              <select
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
                className="bg-[#14141e] border border-[#262638] text-xs text-zinc-300 py-1.5 px-3 rounded-lg focus:outline-none"
              >
                <option value="All">Character: All</option>
                <option value="Unisex">Unisex Formulations</option>
                <option value="For Her">For Her</option>
                <option value="For Him">For Him</option>
              </select>

              {/* Concentration selector */}
              <select
                value={selectedConcentration}
                onChange={(e) => setSelectedConcentration(e.target.value)}
                className="bg-[#14141e] border border-[#262638] text-xs text-zinc-300 py-1.5 px-3 rounded-lg focus:outline-none"
              >
                <option value="All">Concentration: All</option>
                <option value="Extrait">Extrait de Parfum (32%)</option>
                <option value="Eau de Parfum">Eau de Parfum (22%)</option>
                <option value="Absolu">Absolu Privé (35%)</option>
              </select>
            </div>

            {/* Clear filters action */}
            {hasActiveFilters && (
              <button
                onClick={resetFilters}
                className="text-xs text-[#d4af37] hover:underline flex items-center space-x-1"
              >
                <XIcon className="w-3.5 h-3.5" />
                <span>Reset All Filters</span>
              </button>
            )}
          </div>
        </div>

        {/* Counter and Results Status */}
        <div className="flex items-center justify-between text-xs text-zinc-400 px-1">
          <span>
            Presenting <strong className="text-white">{filteredPerfumes.length}</strong> of{" "}
            <strong className="text-white">{PERFUMES.length}</strong> creations
          </span>
          {hasActiveFilters && (
            <span className="text-[#d4af37]">Active filters applied</span>
          )}
        </div>

        {/* 5 Products Grid */}
        {filteredPerfumes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredPerfumes.map((perfume) => (
              <ProductCard
                key={perfume.id}
                perfume={perfume}
                onQuickView={setQuickViewPerfume}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-[#111118] border border-[#22222f] rounded-2xl p-8 space-y-4">
            <h3 className="font-serif-luxury text-2xl text-white">No creations match your filter</h3>
            <p className="text-xs text-zinc-400 max-w-md mx-auto">
              No fragrances in our reserve currently match the selected criteria. Try resetting your search or exploring our discovery quiz.
            </p>
            <button
              onClick={resetFilters}
              className="px-6 py-2.5 bg-[#d4af37] text-black text-xs font-semibold uppercase tracking-wider rounded-full hover:bg-[#e6ca7b] transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Discovery Box Promotion at bottom of catalog */}
        <div className="mt-16 bg-gradient-to-r from-[#14141e] via-[#1a1722] to-[#12121a] border border-[#d4af37]/30 rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 max-w-xl">
            <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              The Discovery Coffret
            </span>
            <h3 className="font-serif-luxury text-2xl sm:text-3xl text-white">
              Undecided on a Full 100ml Flacon?
            </h3>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              Order our Coffret Découverte featuring six 2ml sample extraits. The entire $45 purchase price is credited towards your first full-size bottle order.
            </p>
          </div>
          <button
            onClick={() => {
              const oud = PERFUMES[0];
              // Add discovery voucher
              setQuickViewPerfume(oud);
            }}
            className="px-8 py-4 bg-[#d4af37] hover:bg-[#e6ca7b] text-black text-xs font-semibold uppercase tracking-[0.2em] rounded-full transition-all whitespace-nowrap shadow-xl shadow-[#d4af37]/15"
          >
            Order Discovery Set ($45)
          </button>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        perfume={quickViewPerfume}
        onClose={() => setQuickViewPerfume(null)}
      />
    </div>
  );
}
