import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found | ÉLYSIAN NOIR Paris",
  description: "The page you are seeking is unavailable. Return to the ÉLYSIAN NOIR collection.",
};

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#d4af37]/6 rounded-full blur-[180px]" />
        <div className="absolute top-1/4 right-1/4 w-[350px] h-[350px] bg-amber-700/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 text-center space-y-8 max-w-2xl mx-auto">
        {/* 404 Number */}
        <div className="relative">
          <span
            className="block font-serif-luxury text-[10rem] sm:text-[14rem] text-transparent leading-none select-none"
            style={{
              WebkitTextStroke: "1px rgba(212,175,55,0.15)",
            }}
          >
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="space-y-3 text-center">
              <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#161622] border border-[#d4af37]/40 text-[#d4af37] text-xs uppercase tracking-[0.25em]">
                <span>✦ Fragrance Not Found</span>
              </div>
              <h1 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light leading-tight">
                Lost in the
                <br />
                <span className="text-gold-gradient font-normal italic">
                  Olfactory Labyrinth
                </span>
              </h1>
            </div>
          </div>
        </div>

        <p className="text-sm sm:text-base text-zinc-300 font-light leading-relaxed max-w-lg mx-auto">
          The rare essence you seek has dissolved into the air. Perhaps it has
          been moved, or perhaps it never existed in our reserve. Allow us to
          guide you back to the sanctuary.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#e6ca7b] hover:from-[#c29c2d] hover:to-[#d4af37] text-black text-xs uppercase tracking-[0.2em] font-semibold rounded-full transition-all duration-300 shadow-xl shadow-[#d4af37]/15"
          >
            Return to Maison
          </Link>

          <Link
            href="/shop"
            className="w-full sm:w-auto px-8 py-4 bg-[#14141d] hover:bg-[#1f1f2d] text-zinc-200 hover:text-white border border-[#2c2c3d] hover:border-[#d4af37]/50 text-xs uppercase tracking-[0.2em] font-semibold rounded-full transition-all duration-300"
          >
            Explore The Collection
          </Link>
        </div>

        {/* Quick Links */}
        <div className="pt-6 border-t border-[#1e1e2b]">
          <p className="text-xs uppercase tracking-widest text-zinc-500 mb-4">
            Or visit these sanctuaries
          </p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs text-zinc-400">
            <Link
              href="/scent-finder"
              className="hover:text-[#d4af37] transition-colors"
            >
              Scent Finder Quiz
            </Link>
            <Link
              href="/about"
              className="hover:text-[#d4af37] transition-colors"
            >
              Our Grasse Heritage
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#d4af37] transition-colors"
            >
              Concierge
            </Link>
            <Link
              href="/journal"
              className="hover:text-[#d4af37] transition-colors"
            >
              The Journal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
