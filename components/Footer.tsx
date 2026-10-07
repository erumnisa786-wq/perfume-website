"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ShieldCheckIcon, TruckIcon, DropletsIcon, GiftIcon, CheckIcon } from "./Icons";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#070709] border-t border-[#1c1c24] text-zinc-400 text-sm">
      {/* Brand Value Pillars Bar */}
      <div className="border-b border-[#181820] py-10 bg-[#0b0b0f]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-[#171722] border border-[#262638] flex items-center justify-center text-[#d4af37] flex-shrink-0">
              <DropletsIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-medium text-sm tracking-wide">30%+ Extrait Concentration</h4>
              <p className="text-xs text-zinc-500 mt-1">High concentration pure perfume oils crafted for 14+ hours of opulent sillage.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-[#171722] border border-[#262638] flex items-center justify-center text-[#d4af37] flex-shrink-0">
              <GiftIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-medium text-sm tracking-wide">Complimentary Discovery Vials</h4>
              <p className="text-xs text-zinc-500 mt-1">Receive two 2ml sample flacons with every order to test before opening.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-[#171722] border border-[#262638] flex items-center justify-center text-[#d4af37] flex-shrink-0">
              <TruckIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-medium text-sm tracking-wide">Insured Worldwide Delivery</h4>
              <p className="text-xs text-zinc-500 mt-1">Complimentary temperature-controlled express shipment on all orders over $150.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-10 h-10 rounded-xl bg-[#171722] border border-[#262638] flex items-center justify-center text-[#d4af37] flex-shrink-0">
              <ShieldCheckIcon className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white font-medium text-sm tracking-wide">Artisanal Grasse Provenance</h4>
              <p className="text-xs text-zinc-500 mt-1">Hand-harvested botanicals from sustainable historic estates in the French Riviera.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Brand Intro & Newsletter (Spans 2 cols) */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <span className="font-serif-luxury text-2xl tracking-[0.2em] uppercase text-white block">
                ÉLYSIAN NOIR
              </span>
              <span className="text-[10px] tracking-[0.35em] uppercase text-[#d4af37]">
                Haute Parfumerie • Paris
              </span>
            </div>
            <p className="text-xs leading-relaxed text-zinc-400 max-w-sm">
              Founded on the belief that scent is the most intimate form of memory. Every flacon is filled with rare botanical absolutes, aged in Grasse and poured by hand in numbered limited reserves.
            </p>

            {/* Newsletter VIP */}
            <div className="pt-2">
              <span className="text-xs font-semibold tracking-wider uppercase text-white block mb-2">
                Le Cercle Privé
              </span>
              <p className="text-xs text-zinc-400 mb-3">
                Receive private invitations to confidential harvest reserves and a 15% inaugural gift code.
              </p>
              {subscribed ? (
                <div className="p-3 bg-[#131c15] border border-emerald-500/30 rounded-xl text-emerald-400 text-xs flex items-center space-x-2">
                  <CheckIcon className="w-4 h-4 text-emerald-400" />
                  <span>Bienvenue. Your privilege code is <strong>ELYSIAN15</strong>.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="flex-1 bg-[#121217] border border-[#262635] focus:border-[#d4af37] text-white text-xs px-4 py-3 rounded-xl focus:outline-none placeholder-zinc-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-[#d4af37] hover:bg-[#e6ca7b] text-black font-semibold text-xs tracking-wider uppercase px-5 py-3 rounded-xl transition-all shadow-md shadow-[#d4af37]/10"
                  >
                    Join
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Links Column 1: Collection */}
          <div>
            <h5 className="text-white text-xs uppercase tracking-widest font-semibold mb-4">
              The Collection
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/shop" className="hover:text-[#d4af37] transition-colors">
                  All 5 Signature Extraits
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Smoked+Oud" className="hover:text-[#d4af37] transition-colors">
                  Smoked Oud & Resins
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Woody+%26+Amber" className="hover:text-[#d4af37] transition-colors">
                  Woody & Amber
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Velvet+Floral" className="hover:text-[#d4af37] transition-colors">
                  Velvet Florals
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Fresh+Aquatic" className="hover:text-[#d4af37] transition-colors">
                  Fresh & Marine
                </Link>
              </li>
              <li>
                <Link href="/shop?category=Citrus+%26+Gourmand" className="hover:text-[#d4af37] transition-colors">
                  Citrus & Gourmands
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2: The Experience */}
          <div>
            <h5 className="text-white text-xs uppercase tracking-widest font-semibold mb-4">
              The Experience
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/scent-finder" className="hover:text-[#d4af37] transition-colors flex items-center space-x-1">
                  <span>Scent Finder Quiz</span>
                  <span className="text-[9px] bg-[#d4af37]/20 text-[#d4af37] px-1.5 py-0.2 rounded">Interactive</span>
                </Link>
              </li>
              <li>
                <Link href="/journal" className="hover:text-[#d4af37] transition-colors flex items-center space-x-1">
                  <span>Le Journal</span>
                  <span className="text-[9px] bg-emerald-500/20 text-emerald-400 px-1.5 rounded">New</span>
                </Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-[#d4af37] transition-colors">
                  Review Bag & Checkout
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#d4af37] transition-colors">
                  Maison Heritage & Grasse
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
                  Concierge & Salons
                </Link>
              </li>
              <li>
                <Link href="/shop?filter=bestseller" className="hover:text-[#d4af37] transition-colors">
                  Maison Bestsellers
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Maison & Concierge */}
          <div>
            <h5 className="text-white text-xs uppercase tracking-widest font-semibold mb-4">
              Concierge
            </h5>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors block">
                  Atelier: 18 Place Vendôme, Paris
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#d4af37] transition-colors block">
                  Private Consultations: +33 (0)1 42 68 00 24
                </Link>
              </li>
              <li>
                <a href="mailto:concierge@elysian-noir.paris" className="hover:text-[#d4af37] transition-colors block">
                  concierge@elysian-noir.paris
                </a>
              </li>
              <li className="pt-2 text-zinc-500">
                <span>Returns & Exchanges: 30-Day Policy with unopened original seal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-12 mt-12 border-t border-[#1a1a24] space-y-4">
          <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500">
            <p>© 2026 ÉLYSIAN NOIR PARFUMS. Crafted in Grasse &amp; Paris. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 sm:mt-0 text-zinc-400">
              <span>IFRA Certified</span>
              <span>Sustainable Glass</span>
              <span>Cruelty-Free</span>
              <span className="text-[#d4af37]">USD ($)</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center sm:justify-start gap-x-6 gap-y-1 text-[11px] text-zinc-600">
            <Link href="/privacy-policy" className="hover:text-zinc-400 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-zinc-400 transition-colors">Terms &amp; Conditions</Link>
            <Link href="/journal" className="hover:text-zinc-400 transition-colors">Le Journal</Link>
            <a href="mailto:concierge@elysian-noir.paris" className="hover:text-zinc-400 transition-colors">concierge@elysian-noir.paris</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
