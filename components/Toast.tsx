"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { CheckIcon, SparklesIcon } from "./Icons";

export default function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-[#181822] border border-[#d4af37]/40 shadow-2xl shadow-black/80 rounded-2xl py-3 px-5 flex items-center space-x-3 text-sm text-white">
        <div className="w-6 h-6 rounded-full bg-[#d4af37]/20 text-[#d4af37] flex items-center justify-center flex-shrink-0">
          <SparklesIcon className="w-3.5 h-3.5" />
        </div>
        <p className="font-medium text-xs tracking-wide">{toastMessage}</p>
      </div>
    </div>
  );
}
