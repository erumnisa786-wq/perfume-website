"use client";

import React from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { XIcon, PlusIcon, MinusIcon, TrashIcon, BagIcon, ArrowRightIcon, TruckIcon } from "./Icons";

export default function CartDrawer() {
  const {
    isCartOpen,
    closeCart,
    items,
    removeFromCart,
    updateQuantity,
    subtotal,
    shipping,
    total,
    totalItemsCount,
  } = useCart();

  if (!isCartOpen) return null;

  const freeShippingThreshold = 150;
  const progressToFreeShipping = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Dimmed backdrop */}
      <div
        onClick={closeCart}
        className="absolute inset-0 bg-black/75 backdrop-blur-sm transition-opacity"
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#0e0e13] border-l border-[#242430] flex flex-col shadow-2xl">
          
          {/* Header */}
          <div className="px-6 py-5 border-b border-[#1f1f2a] flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <BagIcon className="w-5 h-5 text-[#d4af37]" />
              <h2 className="font-serif-luxury text-lg tracking-wider uppercase text-white">
                Your Selection ({totalItemsCount})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="text-zinc-400 hover:text-white p-2 rounded-lg hover:bg-zinc-800 transition-colors"
              aria-label="Close Bag"
            >
              <XIcon className="w-5 h-5" />
            </button>
          </div>

          {/* Complimentary Shipping Progress */}
          <div className="px-6 py-3 bg-[#13131a] border-b border-[#1f1f2a] text-xs">
            <div className="flex items-center justify-between text-zinc-300 mb-1.5">
              <span className="flex items-center space-x-1.5">
                <TruckIcon className="w-4 h-4 text-[#d4af37]" />
                <span>
                  {remainingForFreeShipping === 0
                    ? "Complimentary Worldwide Express Unlocked"
                    : `Add $${remainingForFreeShipping} for Free Worldwide Express`}
                </span>
              </span>
              <span className="text-[#d4af37] font-semibold">{Math.round(progressToFreeShipping)}%</span>
            </div>
            <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#b38b25] to-[#d4af37] rounded-full transition-all duration-500"
                style={{ width: `${progressToFreeShipping}%` }}
              />
            </div>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto px-6 py-6 divide-y divide-[#1c1c26]">
            {items.length === 0 ? (
              <div className="text-center py-16 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#181822] flex items-center justify-center text-zinc-500 mb-4 border border-[#2b2b38]">
                  <BagIcon className="w-8 h-8" />
                </div>
                <h3 className="text-white font-medium text-lg mb-1">Your bag is empty</h3>
                <p className="text-zinc-400 text-xs max-w-xs mb-6">
                  Experience the sensory realm of Élysian Noir. Discover our 15 artisanal extraits.
                </p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="px-6 py-2.5 bg-[#d4af37] hover:bg-[#e6ca7b] text-black text-xs font-semibold tracking-widest uppercase rounded-full transition-all"
                >
                  Explore The Collection
                </Link>
              </div>
            ) : (
              items.map((item) => (
                <div key={`${item.perfume.id}-${item.size.size}`} className="py-4 flex space-x-4">
                  <Link
                    href={`/product/${item.perfume.id}`}
                    onClick={closeCart}
                    className="relative w-20 h-24 rounded-lg overflow-hidden border border-[#262633] bg-[#14141c] flex-shrink-0"
                  >
                    <img
                      src={item.perfume.image}
                      alt={item.perfume.name}
                      className="w-full h-full object-cover"
                    />
                  </Link>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between">
                        <Link
                          href={`/product/${item.perfume.id}`}
                          onClick={closeCart}
                          className="font-serif-luxury text-sm font-medium text-white hover:text-[#d4af37] transition-colors"
                        >
                          {item.perfume.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.perfume.id, item.size.size)}
                          className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                          aria-label="Remove item"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-zinc-400 mt-0.5">{item.size.label}</p>
                      <span className="text-[10px] text-[#d4af37] uppercase tracking-wider">
                        {item.perfume.concentration}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity selector */}
                      <div className="flex items-center space-x-2 border border-[#2a2a38] rounded-full px-2 py-0.5 bg-[#12121a]">
                        <button
                          onClick={() =>
                            updateQuantity(item.perfume.id, item.size.size, item.quantity - 1)
                          }
                          className="text-zinc-400 hover:text-white p-1"
                          aria-label="Decrease quantity"
                        >
                          <MinusIcon className="w-3 h-3" />
                        </button>
                        <span className="text-xs text-white font-medium w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.perfume.id, item.size.size, item.quantity + 1)
                          }
                          className="text-zinc-400 hover:text-white p-1"
                          aria-label="Increase quantity"
                        >
                          <PlusIcon className="w-3 h-3" />
                        </button>
                      </div>

                      <div className="text-sm font-semibold text-[#f4efe6]">
                        ${item.size.price * item.quantity}
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer summary */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#1f1f2a] bg-[#111117] space-y-4">
              <div className="space-y-1.5 text-xs">
                <div className="flex justify-between text-zinc-400">
                  <span>Subtotal</span>
                  <span className="text-white font-medium">${subtotal}</span>
                </div>
                <div className="flex justify-between text-zinc-400">
                  <span>Insured Global Shipping</span>
                  <span className={shipping === 0 ? "text-emerald-400 font-medium" : "text-white"}>
                    {shipping === 0 ? "FREE" : `$${shipping}`}
                  </span>
                </div>
                <div className="flex justify-between text-sm font-semibold text-white pt-2 border-t border-[#22222d]">
                  <span className="uppercase tracking-wider">Estimated Total</span>
                  <span className="text-[#d4af37] text-base">${total}</span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="w-full flex items-center justify-center space-x-2 py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#e6ca7b] hover:from-[#c5a02e] hover:to-[#d4af37] text-black font-semibold tracking-wider uppercase text-xs transition-all shadow-lg shadow-[#d4af37]/10"
                >
                  <span>Review Bag & Checkout</span>
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
                <button
                  onClick={closeCart}
                  className="w-full py-2.5 text-xs text-zinc-400 hover:text-white uppercase tracking-widest text-center transition-colors"
                >
                  Continue Exploring
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
