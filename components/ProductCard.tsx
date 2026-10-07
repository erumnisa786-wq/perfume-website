"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Perfume } from "@/data/perfumes";
import { useCart } from "@/context/CartContext";
import { HeartIcon, BagIcon, StarIcon, SparklesIcon } from "./Icons";

interface ProductCardProps {
  perfume: Perfume;
  onQuickView?: (perfume: Perfume) => void;
}

export default function ProductCard({ perfume, onQuickView }: ProductCardProps) {
  const { addToCart, toggleWishlist, isWishlisted } = useCart();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1); // Default to 100ml
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const activeSize = perfume.sizes[selectedSizeIndex] || perfume.sizes[0];
  const wishlisted = isWishlisted(perfume.id);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsAdding(true);
    addToCart(perfume, activeSize, 1);
    setTimeout(() => setIsAdding(false), 800);
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex flex-col bg-[#111116] border border-[#22222d] hover:border-[#d4af37]/40 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#d4af37]/5"
    >
      {/* Top Media Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-[#16161f]">
        {/* Perfume Image with Smooth Zoom */}
        <Link href={`/product/${perfume.id}`} className="block w-full h-full">
          <img
            src={perfume.image}
            alt={perfume.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
        </Link>

        {/* Ambient Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-black/20 pointer-events-none" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10 pointer-events-none">
          {perfume.badge && (
            <span className="text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#d4af37] border border-[#d4af37]/30">
              {perfume.badge}
            </span>
          )}
          <span className="text-[10px] tracking-wider uppercase font-medium px-2 py-0.5 rounded-full bg-zinc-900/80 backdrop-blur-md text-zinc-300 border border-zinc-700/40">
            {perfume.category}
          </span>
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleWishlist(perfume.id);
          }}
          className={`absolute top-3 right-3 z-10 p-2.5 rounded-full backdrop-blur-md transition-all ${
            wishlisted
              ? "bg-[#d4af37] text-black shadow-lg"
              : "bg-black/50 text-white hover:text-[#d4af37] hover:bg-black/80"
          }`}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
        >
          <HeartIcon className="w-4 h-4" filled={wishlisted} />
        </button>

        {/* Quick View Button (Desktop Hover) */}
        {onQuickView && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onQuickView(perfume);
            }}
            className={`absolute bottom-3 left-1/2 -translate-x-1/2 z-10 px-4 py-2 bg-black/80 backdrop-blur-md text-zinc-200 hover:text-white hover:bg-black text-[11px] uppercase tracking-widest rounded-full border border-zinc-700 transition-all duration-300 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            Quick View
          </button>
        )}
      </div>

      {/* Content Container */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Concentration & Rating */}
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
            <span className="text-[10px] uppercase tracking-widest text-[#d4af37]">
              {perfume.concentration}
            </span>
            <div className="flex items-center space-x-1 text-zinc-300">
              <StarIcon className="w-3.5 h-3.5 text-[#d4af37]" />
              <span className="text-xs font-semibold">{perfume.rating}</span>
              <span className="text-[10px] text-zinc-500">({perfume.reviewsCount})</span>
            </div>
          </div>

          {/* Perfume Name */}
          <Link href={`/product/${perfume.id}`} className="block group/title">
            <h3 className="font-serif-luxury text-lg font-medium text-white group-hover/title:text-[#d4af37] transition-colors leading-snug">
              {perfume.name}
            </h3>
          </Link>
          <p className="text-xs text-zinc-400 italic line-clamp-1 mt-0.5">{perfume.frenchTitle}</p>

          {/* Scent Pyramid Top Notes Pills */}
          <div className="mt-3 flex flex-wrap gap-1.5">
            {perfume.topNotes.slice(0, 3).map((note) => (
              <span
                key={note}
                className="text-[10px] text-zinc-400 bg-[#191924] px-2 py-0.5 rounded border border-[#272738]"
              >
                {note}
              </span>
            ))}
          </div>
        </div>

        {/* Size Selector & Price & Add Action */}
        <div className="pt-2 border-t border-[#1d1d28] space-y-3">
          {/* Size Pills */}
          <div className="flex items-center justify-between text-xs">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500">Volume</span>
            <div className="flex space-x-1">
              {perfume.sizes.map((s, idx) => (
                <button
                  key={s.size}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedSizeIndex(idx);
                  }}
                  className={`text-[10px] px-2 py-0.5 rounded transition-all ${
                    selectedSizeIndex === idx
                      ? "bg-[#d4af37] text-black font-semibold"
                      : "bg-[#181824] text-zinc-400 hover:text-white"
                  }`}
                >
                  {s.size}
                </button>
              ))}
            </div>
          </div>

          {/* Price & Action Row */}
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-baseline space-x-2">
                <span className="text-lg font-bold text-white font-serif-luxury">
                  ${activeSize.price}
                </span>
                {perfume.originalPrice && selectedSizeIndex === 1 && (
                  <span className="text-xs text-zinc-500 line-through">
                    ${perfume.originalPrice}
                  </span>
                )}
              </div>
              <span className="text-[10px] text-zinc-500">Free 2ml samples</span>
            </div>

            <button
              onClick={handleQuickAdd}
              disabled={isAdding}
              className="flex items-center space-x-1.5 px-4 py-2 rounded-xl bg-[#1b1b26] hover:bg-[#d4af37] text-[#d4af37] hover:text-black border border-[#d4af37]/30 hover:border-transparent font-medium text-xs tracking-wider uppercase transition-all duration-300"
            >
              <BagIcon className="w-3.5 h-3.5" />
              <span>{isAdding ? "Added" : "Add to Bag"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
