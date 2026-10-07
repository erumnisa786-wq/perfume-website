"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { BagIcon, HeartIcon, SearchIcon, MenuIcon, XIcon, CompassIcon } from "./Icons";
import { PERFUMES } from "@/data/perfumes";

export default function Navbar() {
  const pathname = usePathname();
  const { totalItemsCount, openCart, wishlist } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const searchResults = searchQuery.trim()
    ? PERFUMES.filter(
        (p) =>
          p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.topNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase())) ||
          p.heartNotes.some((n) => n.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 4)
    : [];

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "The Collection (5)", href: "/shop" },
    { label: "Maison Heritage", href: "/about" },
    { label: "Concierge", href: "/contact" },
    { label: "Scent Quiz", href: "/scent-finder" },
  ];

  return (
    <>
      {/* Top Privilege Banner */}
      <div className="bg-[#121217] border-b border-[#22222a] py-2 px-4 text-center text-xs tracking-widest uppercase text-zinc-400">
        <span className="text-[#d4af37] font-medium mr-2">✦ Privilège Maison:</span>
        Receive 2 complimentary discovery vials with every full-size bottle. Free insured global shipping over $150.
      </div>

      {/* Main Luxury Navigation Bar */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-xl bg-[#09090b]/85 border-b border-[#1c1c24] transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Mobile Menu Toggle */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-zinc-300 hover:text-white p-2"
              aria-label="Toggle Navigation"
            >
              {isMobileMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-8 text-sm tracking-wider uppercase font-medium">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`transition-colors py-1 border-b-2 ${
                    isActive
                      ? "text-[#d4af37] border-[#d4af37]"
                      : "text-zinc-400 hover:text-white border-transparent hover:border-zinc-600"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Maison Brand Logo */}
          <div className="flex-1 lg:flex-none text-center">
            <Link href="/" className="inline-block group text-center">
              <span className="block font-serif-luxury text-2xl sm:text-3xl tracking-[0.22em] uppercase text-white group-hover:text-[#d4af37] transition-colors">
                ÉLYSIAN NOIR
              </span>
              <span className="block text-[10px] tracking-[0.35em] uppercase text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Haute Parfumerie • Paris
              </span>
            </Link>
          </div>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-4 sm:space-x-6">
            {/* Quick Scent Finder Pill (Desktop) */}
            <Link
              href="/scent-finder"
              className="hidden md:flex items-center space-x-2 text-xs uppercase tracking-widest text-zinc-300 hover:text-[#d4af37] border border-[#2b2b36] hover:border-[#d4af37] px-3 py-1.5 rounded-full transition-all"
            >
              <CompassIcon className="w-4 h-4 text-[#d4af37]" />
              <span>Scent Quiz</span>
            </Link>

            {/* Search Trigger */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-zinc-300 hover:text-[#d4af37] p-2 transition-colors relative"
              aria-label="Search Fragrances"
            >
              <SearchIcon className="w-5 h-5" />
            </button>

            {/* Wishlist Link */}
            <Link
              href="/shop?filter=wishlist"
              className="text-zinc-300 hover:text-[#d4af37] p-2 transition-colors relative hidden sm:block"
              aria-label="Wishlist"
            >
              <HeartIcon className="w-5 h-5" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 text-[10px] bg-[#d4af37] text-black font-bold rounded-full flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>

            {/* Shopping Bag Icon with Cart Drawer trigger */}
            <button
              onClick={openCart}
              className="text-zinc-100 hover:text-[#d4af37] p-2 transition-colors relative flex items-center"
              aria-label="View Shopping Bag"
            >
              <BagIcon className="w-5 h-5" />
              {totalItemsCount > 0 && (
                <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 bg-gradient-to-r from-[#d4af37] to-[#e6ca7b] text-black text-[11px] font-bold rounded-full flex items-center justify-center shadow-lg">
                  {totalItemsCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#0e0e13] border-b border-[#22222b] px-6 py-6 space-y-4 animate-in fade-in">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base tracking-widest uppercase font-medium py-2 ${
                    pathname === link.href ? "text-[#d4af37]" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <div className="pt-4 border-t border-[#22222b] flex items-center justify-between">
              <Link
                href="/scent-finder"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-2 text-sm text-[#d4af37]"
              >
                <CompassIcon className="w-4 h-4" />
                <span>Take Fragrance Quiz</span>
              </Link>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openCart();
                }}
                className="text-sm text-zinc-300"
              >
                Shopping Bag ({totalItemsCount})
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Luxury Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-start justify-center pt-24 px-4">
          <div className="bg-[#121217] border border-[#2b2b38] rounded-2xl w-full max-w-2xl overflow-hidden shadow-2xl">
            <div className="p-6 border-b border-[#22222b] flex items-center space-x-4">
              <SearchIcon className="w-6 h-6 text-[#d4af37]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by perfume name, note (e.g. Oud, Rose, Santal)..."
                className="w-full bg-transparent text-white placeholder-zinc-500 focus:outline-none text-lg"
                autoFocus
              />
              <button
                onClick={() => {
                  setIsSearchOpen(false);
                  setSearchQuery("");
                }}
                className="text-zinc-400 hover:text-white p-2"
              >
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Search Results */}
            <div className="p-6 max-h-96 overflow-y-auto">
              {searchQuery.trim() === "" ? (
                <div className="text-center py-6 text-zinc-500 text-sm">
                  <p className="mb-2 uppercase tracking-widest text-xs text-zinc-400">Popular Scent Searches</p>
                  <div className="flex flex-wrap justify-center gap-2 mt-3">
                    {["Oud", "Sandalwood", "Damask Rose", "Bourbon Vanilla", "Iris", "Bergamot"].map((term) => (
                      <button
                        key={term}
                        onClick={() => setSearchQuery(term)}
                        className="text-xs bg-[#1a1a24] hover:bg-[#252533] text-zinc-300 px-3 py-1.5 rounded-full border border-[#2b2b38] transition-colors"
                      >
                        {term}
                      </button>
                    ))}
                  </div>
                </div>
              ) : searchResults.length > 0 ? (
                <div className="space-y-3">
                  <div className="text-xs uppercase tracking-widest text-[#d4af37] mb-3">
                    Found {searchResults.length} creations
                  </div>
                  {searchResults.map((perfume) => (
                    <Link
                      key={perfume.id}
                      href={`/product/${perfume.id}`}
                      onClick={() => {
                        setIsSearchOpen(false);
                        setSearchQuery("");
                      }}
                      className="flex items-center space-x-4 p-3 rounded-xl hover:bg-[#1a1a24] border border-transparent hover:border-[#333342] transition-colors group"
                    >
                      <img
                        src={perfume.image}
                        alt={perfume.name}
                        className="w-14 h-14 object-cover rounded-lg border border-[#2e2e3b]"
                      />
                      <div className="flex-1">
                        <h4 className="text-white font-medium group-hover:text-[#d4af37] transition-colors">
                          {perfume.name}
                        </h4>
                        <p className="text-xs text-zinc-400">{perfume.frenchTitle}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <span className="text-[11px] text-[#d4af37] bg-[#d4af37]/10 px-2 py-0.5 rounded">
                            {perfume.category}
                          </span>
                          <span className="text-xs text-zinc-300">${perfume.price}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                  <div className="pt-3 text-center">
                    <Link
                      href={`/shop?search=${encodeURIComponent(searchQuery)}`}
                      onClick={() => setIsSearchOpen(false)}
                      className="text-xs text-[#d4af37] uppercase tracking-wider hover:underline"
                    >
                      View all results in collection →
                    </Link>
                  </div>
                </div>
              ) : (
                <div className="text-center py-8 text-zinc-400">
                  <p>No rare essences matching &quot;{searchQuery}&quot;</p>
                  <p className="text-xs text-zinc-500 mt-1">Try exploring by note like Vanilla, Rose, or Oud</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
