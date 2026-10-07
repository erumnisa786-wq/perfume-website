"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Perfume } from "@/data/perfumes";
import { useCart } from "@/context/CartContext";
import { XIcon, StarIcon, BagIcon, ArrowRightIcon, DropletsIcon, ClockIcon } from "./Icons";

interface QuickViewModalProps {
  perfume: Perfume | null;
  onClose: () => void;
}

export default function QuickViewModal({ perfume, onClose }: QuickViewModalProps) {
  const { addToCart } = useCart();
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(1);
  const [quantity, setQuantity] = useState(1);

  if (!perfume) return null;

  const currentSize = perfume.sizes[selectedSizeIndex] || perfume.sizes[0];

  const handleAdd = () => {
    addToCart(perfume, currentSize, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in">
      <div className="relative bg-[#111117] border border-[#262635] rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-zinc-400 hover:text-white bg-black/50 rounded-full transition-colors"
          aria-label="Close"
        >
          <XIcon className="w-5 h-5" />
        </button>

        {/* Product Visual */}
        <div className="md:w-1/2 relative bg-[#171722] aspect-[4/5] md:aspect-auto">
          <img
            src={perfume.image}
            alt={perfume.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 flex flex-col gap-1.5">
            {perfume.badge && (
              <span className="text-[10px] uppercase font-semibold px-2.5 py-1 rounded-full bg-black/80 text-[#d4af37] border border-[#d4af37]/30">
                {perfume.badge}
              </span>
            )}
            <span className="text-[10px] uppercase font-medium px-2 py-0.5 rounded-full bg-zinc-900/80 text-zinc-300">
              {perfume.category}
            </span>
          </div>
        </div>

        {/* Content Details */}
        <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between space-y-6">
          <div className="space-y-3">
            <div>
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-medium">
                {perfume.concentration}
              </span>
              <h2 className="font-serif-luxury text-2xl font-semibold text-white mt-1">
                {perfume.name}
              </h2>
              <p className="text-xs text-zinc-400 italic">{perfume.frenchTitle}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2 text-xs text-zinc-300">
              <div className="flex text-[#d4af37]">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-3.5 h-3.5" />
                ))}
              </div>
              <span className="font-semibold">{perfume.rating}</span>
              <span className="text-zinc-500">({perfume.reviewsCount} reviews)</span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3">
              {perfume.description}
            </p>

            {/* Olfactory Notes Mini Breakdown */}
            <div className="bg-[#171722] rounded-xl p-3 border border-[#232332] space-y-1.5 text-xs">
              <div className="flex items-center text-zinc-400">
                <span className="w-20 text-[10px] uppercase tracking-wider text-zinc-500">Top Notes:</span>
                <span className="text-zinc-300 text-[11px] truncate">{perfume.topNotes.join(" • ")}</span>
              </div>
              <div className="flex items-center text-zinc-400">
                <span className="w-20 text-[10px] uppercase tracking-wider text-zinc-500">Heart Notes:</span>
                <span className="text-zinc-300 text-[11px] truncate">{perfume.heartNotes.join(" • ")}</span>
              </div>
              <div className="flex items-center text-zinc-400">
                <span className="w-20 text-[10px] uppercase tracking-wider text-zinc-500">Base Notes:</span>
                <span className="text-zinc-300 text-[11px] truncate">{perfume.baseNotes.join(" • ")}</span>
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="bg-[#14141d] p-2 rounded-lg border border-[#22222e] flex items-center space-x-2">
                <ClockIcon className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <span className="text-[10px] text-zinc-500 block">Longevity</span>
                  <span className="text-xs text-zinc-200 font-medium">{perfume.longevity}</span>
                </div>
              </div>
              <div className="bg-[#14141d] p-2 rounded-lg border border-[#22222e] flex items-center space-x-2">
                <DropletsIcon className="w-4 h-4 text-[#d4af37]" />
                <div>
                  <span className="text-[10px] text-zinc-500 block">Sillage</span>
                  <span className="text-xs text-zinc-200 font-medium">{perfume.sillage}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Size, Quantity & Add to Cart */}
          <div className="space-y-4 pt-3 border-t border-[#1f1f2a]">
            {/* Size options */}
            <div>
              <span className="text-[11px] uppercase tracking-wider text-zinc-400 block mb-2">
                Select Flacon Volume
              </span>
              <div className="grid grid-cols-3 gap-2">
                {perfume.sizes.map((s, idx) => (
                  <button
                    key={s.size}
                    onClick={() => setSelectedSizeIndex(idx)}
                    className={`py-2 px-3 text-xs rounded-xl border text-center transition-all ${
                      selectedSizeIndex === idx
                        ? "border-[#d4af37] bg-[#d4af37]/15 text-[#d4af37] font-semibold"
                        : "border-[#262635] bg-[#161622] text-zinc-400 hover:text-white"
                    }`}
                  >
                    <div className="font-medium">{s.size}</div>
                    <div className="text-[10px] mt-0.5">${s.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Price & Add to Cart */}
            <div className="flex items-center space-x-3">
              <button
                onClick={handleAdd}
                className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6ca7b] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 hover:opacity-95 transition-opacity"
              >
                <BagIcon className="w-4 h-4" />
                <span>Add to Bag • ${currentSize.price * quantity}</span>
              </button>

              <Link
                href={`/product/${perfume.id}`}
                onClick={onClose}
                className="p-3 rounded-xl bg-[#1a1a24] border border-[#2b2b3a] text-zinc-300 hover:text-[#d4af37] transition-colors"
                title="View Full Scent Experience"
              >
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
