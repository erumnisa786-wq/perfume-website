"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { DISCOVERY_SAMPLES, PERFUMES } from "@/data/perfumes";
import {
  BagIcon,
  TrashIcon,
  PlusIcon,
  MinusIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  TruckIcon,
  GiftIcon,
  CheckIcon,
  SparklesIcon,
} from "@/components/Icons";

export default function CartPage() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    subtotal,
    selectedSamples,
    toggleSample,
    clearCart,
  } = useCart();

  const freeShippingThreshold = 150;
  const hasFreeShipping = subtotal >= freeShippingThreshold || subtotal === 0;
  const amountUntilFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  const [promoCode, setPromoCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [promoError, setPromoError] = useState("");
  const [promoSuccess, setPromoSuccess] = useState("");
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<any | null>(null);

  const [shippingDetails, setShippingDetails] = useState({
    firstName: "Camille",
    lastName: "de Montfort",
    email: "camille@elysian-patron.com",
    address: "18 Rue de la Paix",
    city: "Paris",
    postalCode: "75002",
    country: "France",
  });

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError("");
    setPromoSuccess("");

    const code = promoCode.trim().toUpperCase();
    if (code === "ELYSIAN15") {
      setAppliedDiscount(0.15);
      setPromoSuccess("15% Privilège Maison discount applied!");
    } else if (code === "MAISONVIP") {
      setAppliedDiscount(0.2);
      setPromoSuccess("20% Le Cercle Privé VIP discount applied!");
    } else {
      setPromoError("Invalid privilege invitation code.");
    }
  };

  const discountAmount = subtotal * appliedDiscount;
  const shippingFee = hasFreeShipping || subtotal === 0 ? 0 : 25;
  const finalTotal = Math.max(0, subtotal - discountAmount + shippingFee);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCheckingOut(true);

    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderConfirmed({
        orderId: `ELYSIAN-ORD-${Math.floor(100000 + Math.random() * 900000)}`,
        items: [...items],
        total: finalTotal,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      });
      clearCart();
    }, 1200);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 pt-4">
          <div className="inline-flex items-center space-x-2 text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Votre Panier Privé</span>
          </div>
          <h1 className="font-serif-luxury text-3xl sm:text-5xl text-white font-light">
            Bag & Checkout Experience
          </h1>
          <p className="text-xs sm:text-sm text-zinc-400">
            Review your signature selections, claim your 2 complimentary discovery vials, and proceed to insured courier dispatch.
          </p>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div className="max-w-2xl mx-auto bg-[#13131c] border border-[#232332] rounded-2xl p-4 sm:p-5 text-xs text-center space-y-2.5">
          {hasFreeShipping ? (
            <p className="text-[#d4af37] font-medium flex items-center justify-center space-x-2">
              <CheckIcon className="w-4 h-4 text-[#d4af37]" />
              <span>You have unlocked complimentary insured express courier delivery ($150+ order).</span>
            </p>
          ) : (
            <p className="text-zinc-300">
              Add <strong className="text-white font-semibold">${amountUntilFreeShipping}</strong> more to qualify for complimentary temperature-controlled express delivery.
            </p>
          )}

          <div className="w-full bg-[#1e1e2d] h-2 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#d4af37] to-[#fae5a2] h-full transition-all duration-500 rounded-full"
              style={{
                width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
              }}
            />
          </div>
        </div>

        {/* Order Confirmed Screen */}
        {orderConfirmed ? (
          <div className="max-w-2xl mx-auto bg-[#111118] border border-emerald-500/30 rounded-3xl p-8 sm:p-12 text-center space-y-6 shadow-2xl animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
              <CheckIcon className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Commande Validée • Grasse & Paris
              </span>
              <h2 className="font-serif-luxury text-3xl text-white">
                Merci for Your Patronage
              </h2>
              <p className="text-xs sm:text-sm text-zinc-300">
                Your bespoke order is being hand-packaged in our Paris atelier with silk ribbon and wax seal.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-black/50 border border-[#232332] text-xs flex justify-between items-center text-left">
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Order Reference</span>
                <span className="text-emerald-400 font-mono font-bold text-sm">
                  {orderConfirmed.orderId}
                </span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Date</span>
                <span className="text-white font-medium">{orderConfirmed.date}</span>
              </div>
              <div>
                <span className="text-zinc-500 block text-[10px] uppercase">Total Amount</span>
                <span className="text-[#d4af37] font-bold text-sm">
                  ${orderConfirmed.total.toFixed(2)}
                </span>
              </div>
            </div>

            <div className="pt-4 flex justify-center gap-4">
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-[#d4af37] hover:bg-[#e6ca7b] text-black font-semibold text-xs uppercase tracking-wider rounded-full transition-all"
              >
                Continue Exploring The 5 Scents
              </Link>
            </div>
          </div>
        ) : items.length === 0 ? (
          /* Empty Bag State */
          <div className="max-w-md mx-auto text-center py-20 px-6 rounded-3xl bg-[#111118] border border-[#232332] space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#181824] border border-[#2b2b3d] text-zinc-500 flex items-center justify-center mx-auto">
              <BagIcon className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="font-serif-luxury text-2xl text-white">Your Bag is Empty</h3>
              <p className="text-xs text-zinc-400 leading-relaxed">
                You have not selected any flacons yet. Explore our 5 signature extraits and discover your defining scent.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-block px-8 py-4 bg-[#d4af37] hover:bg-[#e6ca7b] text-black font-semibold text-xs uppercase tracking-[0.2em] rounded-full transition-all shadow-xl shadow-[#d4af37]/20"
            >
              Explore The 5 Flacons
            </Link>
          </div>
        ) : (
          /* Cart with Items & Checkout Form */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Items Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="bg-[#111118] border border-[#232332] rounded-3xl p-6 sm:p-8 space-y-6">
                <div className="flex items-center justify-between border-b border-[#21212f] pb-4">
                  <h3 className="font-serif-luxury text-xl text-white">
                    Selected Flacons ({items.length})
                  </h3>
                  <button
                    onClick={clearCart}
                    className="text-xs text-zinc-500 hover:text-red-400 transition-colors"
                  >
                    Clear Bag
                  </button>
                </div>

                <div className="divide-y divide-[#1e1e2c] space-y-4">
                  {items.map((item) => (
                    <div
                      key={`${item.perfume.id}-${item.size.size}`}
                      className="pt-4 first:pt-0 flex gap-4 sm:gap-6 items-center"
                    >
                      <Link
                        href={`/product/${item.perfume.id}`}
                        className="w-20 h-24 rounded-xl overflow-hidden bg-[#181824] flex-shrink-0 border border-[#262638]"
                      >
                        <img
                          src={item.perfume.image}
                          alt={item.perfume.name}
                          className="w-full h-full object-cover"
                        />
                      </Link>

                      <div className="flex-1 space-y-1">
                        <span className="text-[10px] uppercase tracking-wider text-[#d4af37]">
                          {item.perfume.category}
                        </span>
                        <Link
                          href={`/product/${item.perfume.id}`}
                          className="font-serif-luxury text-base text-white hover:text-[#d4af37] block transition-colors"
                        >
                          {item.perfume.name}
                        </Link>
                        <span className="text-xs text-zinc-400 block">
                          Size: {item.size.label}
                        </span>
                        <span className="text-xs font-semibold text-white block">
                          ${item.size.price} each
                        </span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-2 bg-[#171722] border border-[#262635] rounded-lg p-1">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.perfume.id,
                              item.size.size,
                              item.quantity - 1
                            )
                          }
                          className="p-1 text-zinc-400 hover:text-white"
                        >
                          <MinusIcon className="w-3.5 h-3.5" />
                        </button>
                        <span className="text-xs font-semibold px-2 text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.perfume.id,
                              item.size.size,
                              item.quantity + 1
                            )
                          }
                          className="p-1 text-zinc-400 hover:text-white"
                        >
                          <PlusIcon className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total for item & delete */}
                      <div className="text-right space-y-1">
                        <span className="font-serif-luxury text-base font-semibold text-white block">
                          ${item.size.price * item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            removeFromCart(item.perfume.id, item.size.size)
                          }
                          className="text-zinc-500 hover:text-red-400 transition-colors p-1"
                        >
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complimentary 2ml Discovery Vials Picker */}
              <div className="bg-[#111118] border border-[#232332] rounded-3xl p-6 sm:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                    <GiftIcon className="w-4 h-4" />
                    <span>Choose 2 Complimentary Discovery Samples</span>
                  </div>
                  <span className="text-xs text-zinc-400">
                    Selected: <strong>{selectedSamples.length}/2</strong>
                  </span>
                </div>

                <p className="text-xs text-zinc-400">
                  Select 2 sample vials (2ml each) to test before opening your full flacon seal:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {DISCOVERY_SAMPLES.map((sample) => {
                    const isSelected = selectedSamples.includes(sample.id);
                    return (
                      <button
                        key={sample.id}
                        type="button"
                        onClick={() => toggleSample(sample.id)}
                        className={`p-3 rounded-xl border text-left flex items-center justify-between transition-all ${
                          isSelected
                            ? "bg-[#181825] border-[#d4af37] text-white shadow-md shadow-[#d4af37]/10"
                            : "bg-[#14141e] border-[#252535] text-zinc-400 hover:border-zinc-600"
                        }`}
                      >
                        <div className="space-y-0.5">
                          <span className="text-xs font-medium block text-white">
                            {sample.name}
                          </span>
                          <span className="text-[10px] text-zinc-500 block">
                            {sample.note}
                          </span>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border flex items-center justify-center text-xs ${
                            isSelected
                              ? "bg-[#d4af37] border-[#d4af37] text-black"
                              : "border-zinc-700 text-transparent"
                          }`}
                        >
                          ✓
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

            </div>

            {/* Right Summary & Checkout Column (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Order Summary Card */}
              <div className="bg-[#111118] border border-[#232332] rounded-3xl p-6 sm:p-8 space-y-6">
                <h3 className="font-serif-luxury text-xl text-white">
                  Order Summary
                </h3>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between text-zinc-400">
                    <span>Subtotal</span>
                    <span className="text-white font-medium">${subtotal}</span>
                  </div>

                  {appliedDiscount > 0 && (
                    <div className="flex justify-between text-emerald-400">
                      <span>Privilège Discount ({(appliedDiscount * 100).toFixed(0)}%)</span>
                      <span>-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}

                  <div className="flex justify-between text-zinc-400">
                    <span>Insured Express Courier</span>
                    <span className={shippingFee === 0 ? "text-emerald-400 font-semibold" : "text-white"}>
                      {shippingFee === 0 ? "COMPLIMENTARY" : `$${shippingFee}`}
                    </span>
                  </div>

                  <div className="flex justify-between text-zinc-400">
                    <span>Discovery Vials (2x 2ml)</span>
                    <span className="text-emerald-400 font-semibold">COMPLIMENTARY</span>
                  </div>

                  <div className="pt-3 border-t border-[#232332] flex justify-between items-baseline">
                    <span className="text-sm uppercase tracking-wider text-white font-semibold">
                      Total
                    </span>
                    <span className="font-serif-luxury text-2xl font-bold text-[#d4af37]">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Promo Code Form */}
                <form onSubmit={handleApplyPromo} className="pt-2 space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Try 'ELYSIAN15' or 'MAISONVIP'"
                      className="flex-1 bg-[#171724] border border-[#28283a] focus:border-[#d4af37] text-white text-xs px-3.5 py-3 rounded-xl focus:outline-none uppercase placeholder:normal-case placeholder-zinc-500"
                    />
                    <button
                      type="submit"
                      className="px-4 py-3 bg-[#1e1e2d] hover:bg-[#d4af37] text-zinc-200 hover:text-black text-xs font-semibold uppercase tracking-wider rounded-xl transition-all"
                    >
                      Apply
                    </button>
                  </div>
                  {promoSuccess && (
                    <p className="text-xs text-emerald-400">{promoSuccess}</p>
                  )}
                  {promoError && (
                    <p className="text-xs text-rose-400">{promoError}</p>
                  )}
                </form>

                {/* Instant Express Checkout Form */}
                <form onSubmit={handlePlaceOrder} className="pt-4 border-t border-[#232332] space-y-4">
                  <span className="text-xs uppercase tracking-wider text-[#d4af37] font-semibold block">
                    Fast Courier Dispatch Information
                  </span>

                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      value={shippingDetails.firstName}
                      onChange={(e) => setShippingDetails({ ...shippingDetails, firstName: e.target.value })}
                      placeholder="First Name"
                      className="bg-[#171724] border border-[#28283a] text-white text-xs px-3 py-2.5 rounded-xl focus:outline-none"
                    />
                    <input
                      type="text"
                      required
                      value={shippingDetails.lastName}
                      onChange={(e) => setShippingDetails({ ...shippingDetails, lastName: e.target.value })}
                      placeholder="Last Name"
                      className="bg-[#171724] border border-[#28283a] text-white text-xs px-3 py-2.5 rounded-xl focus:outline-none"
                    />
                  </div>

                  <input
                    type="email"
                    required
                    value={shippingDetails.email}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, email: e.target.value })}
                    placeholder="Recipient Email"
                    className="w-full bg-[#171724] border border-[#28283a] text-white text-xs px-3 py-2.5 rounded-xl focus:outline-none"
                  />

                  <input
                    type="text"
                    required
                    value={shippingDetails.address}
                    onChange={(e) => setShippingDetails({ ...shippingDetails, address: e.target.value })}
                    placeholder="Delivery Address"
                    className="w-full bg-[#171724] border border-[#28283a] text-white text-xs px-3 py-2.5 rounded-xl focus:outline-none"
                  />

                  <div className="grid grid-cols-3 gap-2">
                    <input
                      type="text"
                      required
                      value={shippingDetails.city}
                      onChange={(e) => setShippingDetails({ ...shippingDetails, city: e.target.value })}
                      placeholder="City"
                      className="bg-[#171724] border border-[#28283a] text-white text-xs px-3 py-2.5 rounded-xl focus:outline-none"
                    />
                    <input
                      type="text"
                      required
                      value={shippingDetails.postalCode}
                      onChange={(e) => setShippingDetails({ ...shippingDetails, postalCode: e.target.value })}
                      placeholder="Postal Code"
                      className="bg-[#171724] border border-[#28283a] text-white text-xs px-3 py-2.5 rounded-xl focus:outline-none"
                    />
                    <input
                      type="text"
                      required
                      value={shippingDetails.country}
                      onChange={(e) => setShippingDetails({ ...shippingDetails, country: e.target.value })}
                      placeholder="Country"
                      className="bg-[#171724] border border-[#28283a] text-white text-xs px-3 py-2.5 rounded-xl focus:outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isCheckingOut}
                    className="w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#e6ca7b] hover:from-[#c29c2d] hover:to-[#d4af37] text-black font-semibold text-xs uppercase tracking-[0.2em] rounded-xl transition-all shadow-xl shadow-[#d4af37]/20 flex items-center justify-center space-x-2"
                  >
                    {isCheckingOut ? (
                      <span>Dispatching Order to Atelier...</span>
                    ) : (
                      <span>Place Insured Order (${finalTotal.toFixed(2)})</span>
                    )}
                  </button>
                </form>

                {/* Reassurance Badges */}
                <div className="pt-2 grid grid-cols-2 gap-3 text-[11px] text-zinc-400">
                  <div className="flex items-center space-x-2">
                    <ShieldCheckIcon className="w-4 h-4 text-[#d4af37]" />
                    <span>30-Day Sealed Returns</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TruckIcon className="w-4 h-4 text-[#d4af37]" />
                    <span>Temperature Controlled</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
