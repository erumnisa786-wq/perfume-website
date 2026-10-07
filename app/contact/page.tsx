"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  SparklesIcon,
  ShieldCheckIcon,
  CheckIcon,
  ChevronDownIcon,
  ClockIcon,
  TruckIcon,
} from "@/components/Icons";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "Private In-Boutique Session",
    location: "18 Place Vendôme, Paris",
    date: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<any | null>(null);

  // Accordion open/close state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const boutiques = [
    {
      city: "Paris",
      name: "Maison Élysian Vendôme",
      address: "18 Place Vendôme, 75001 Paris, France",
      phone: "+33 (0)1 42 68 00 24",
      hours: "Monday – Saturday: 10:00 – 19:30 CET",
      image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=800&auto=format&fit=crop",
    },
    {
      city: "London",
      name: "Mayfair Private Salon",
      address: "42 New Bond Street, Mayfair, London W1S 2RY",
      phone: "+44 (0)20 7946 0912",
      hours: "Monday – Saturday: 10:00 – 19:00 GMT",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=800&auto=format&fit=crop",
    },
    {
      city: "New York",
      name: "Madison Avenue Atelier",
      address: "740 Madison Avenue, Upper East Side, NY 10065",
      phone: "+1 (212) 555-0184",
      hours: "Monday – Saturday: 10:00 – 18:30 EST",
      image: "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=800&auto=format&fit=crop",
    },
  ];

  const faqs = [
    {
      q: "What makes Élysian Noir extraits distinct from conventional perfumes?",
      a: "Our formulations boast an uncommonly high 30% to 35% pure fragrance oil concentration (Extrait de Parfum), whereas standard commercial perfumes hover around 10%–15%. This creates an opulent 16-to-20-hour sillage that evolves dynamically with body heat rather than evaporating rapidly.",
    },
    {
      q: "How does the complimentary 2ml sample vial privilege work?",
      a: "Every full-size 100ml or 200ml flacon order includes two complimentary 2ml discovery vials. We encourage you to test the fragrance on your skin using the vial first. If for any reason the scent does not harmonize with your chemistry, you may return the unopened, sealed full-size flacon within 30 days for a full refund.",
    },
    {
      q: "Can I request custom engraving on my flacon?",
      a: "Yes. Our Parisian artisan atelier offers bespoke diamond-tip calligraphy engraving on the solid brass plaque or crystal flank of each flacon (up to 18 characters: initials, monograms, or significant dates). Select 'Bespoke Flacon Engraving' in our booking form or add a note at checkout.",
    },
    {
      q: "What are your international shipping and insured delivery timeframes?",
      a: "We provide complimentary insured, temperature-controlled express courier delivery on all orders over $150. Deliveries within Europe arrive within 2–3 business days; North America within 3–4 business days; and international destinations within 4–6 business days.",
    },
    {
      q: "Are your ingredients IFRA certified and sustainably sourced?",
      a: "Unconditionally. All formulations conform strictly to the latest International Fragrance Association (IFRA) global safety standards. Our sandalwood is legally harvested in Australia with replanting verification, and our roses and jasmine are sourced directly from historic family farms in Grasse.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedBooking({
        ...formData,
        code: `ELYSIAN-${Math.floor(100000 + Math.random() * 900000)}`,
      });
    }, 1000);
  };

  return (
    <div className="relative overflow-hidden py-12 px-4 sm:px-6 lg:px-8">
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/8 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-24 relative z-10">
        
        {/* =========================================================================
            HEADER
        ========================================================================= */}
        <section className="text-center space-y-6 max-w-3xl mx-auto pt-6">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#161622] border border-[#d4af37]/40 text-[#d4af37] text-xs uppercase tracking-[0.25em]">
            <SparklesIcon className="w-3.5 h-3.5" />
            <span>Le Service Concierge & Salons Privés</span>
          </div>

          <h1 className="font-serif-luxury text-4xl sm:text-6xl text-white font-light leading-[1.1]">
            Private Olfactory <br />
            <span className="text-gold-gradient font-normal italic">Consultation & Care</span>.
          </h1>

          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            Whether booking a confidential appointment in our Place Vendôme salons, arranging bespoke calligraphy engraving, or seeking guidance from our fragrance sommeliers, our concierge remains at your disposal.
          </p>

          <div className="pt-2 flex flex-wrap justify-center gap-6 text-xs text-zinc-400">
            <div className="flex items-center space-x-2">
              <span className="text-[#d4af37]">✦</span>
              <span>Direct Concierge: <strong>concierge@elysian-noir.paris</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-[#d4af37]">✦</span>
              <span>Paris Salon Hotline: <strong>+33 (0)1 42 68 00 24</strong></span>
            </div>
          </div>
        </section>

        {/* =========================================================================
            BOOKING FORM & CONCIERGE INFO
        ========================================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Booking Form (7 Cols) */}
          <div className="lg:col-span-7 bg-[#111118] border border-[#232332] rounded-3xl p-8 sm:p-10 shadow-2xl">
            <div className="space-y-2 mb-8">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
                Privilège Réservation
              </span>
              <h2 className="font-serif-luxury text-2xl sm:text-3xl text-white">
                Reserve An Appointment
              </h2>
              <p className="text-xs text-zinc-400">
                Please complete the form below. Our private concierge will confirm your private session within 2 hours.
              </p>
            </div>

            {submittedBooking ? (
              <div className="p-8 rounded-2xl bg-[#141d15] border border-emerald-500/30 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckIcon className="w-7 h-7" />
                </div>
                <h3 className="font-serif-luxury text-2xl text-white">
                  Consultation Confirmed
                </h3>
                <p className="text-xs text-zinc-300 max-w-md mx-auto">
                  Merci, <strong>{submittedBooking.name}</strong>. Your session request for{" "}
                  <strong className="text-[#d4af37]">{submittedBooking.serviceType}</strong> at{" "}
                  <strong>{submittedBooking.location}</strong> has been received into our priority register.
                </p>
                <div className="inline-block p-3 rounded-xl bg-black/40 border border-[#2b2b3b] text-xs">
                  <span className="text-zinc-500 block text-[10px] uppercase tracking-wider">
                    Booking Reference
                  </span>
                  <span className="text-emerald-400 font-mono font-bold text-base">
                    {submittedBooking.code}
                  </span>
                </div>
                <div className="pt-2">
                  <button
                    onClick={() => setSubmittedBooking(null)}
                    className="px-6 py-2.5 bg-[#1b1b24] hover:bg-[#252533] text-zinc-300 text-xs rounded-full border border-zinc-700 transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Camille de Montfort"
                      className="w-full bg-[#171722] border border-[#29293a] focus:border-[#d4af37] text-white text-xs px-4 py-3.5 rounded-xl focus:outline-none placeholder-zinc-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. camille@domain.com"
                      className="w-full bg-[#171722] border border-[#29293a] focus:border-[#d4af37] text-white text-xs px-4 py-3.5 rounded-xl focus:outline-none placeholder-zinc-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+33 6 12 34 56 78"
                      className="w-full bg-[#171722] border border-[#29293a] focus:border-[#d4af37] text-white text-xs px-4 py-3.5 rounded-xl focus:outline-none placeholder-zinc-500 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                      Service Type *
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-[#171722] border border-[#29293a] focus:border-[#d4af37] text-white text-xs px-4 py-3.5 rounded-xl focus:outline-none cursor-pointer transition-colors"
                    >
                      <option value="Private In-Boutique Session">Private In-Boutique Session</option>
                      <option value="Virtual Olfactory Consultation">Virtual Olfactory Consultation (45 min)</option>
                      <option value="Bespoke Flacon Engraving & Calligraphy">Bespoke Flacon Engraving & Calligraphy</option>
                      <option value="VIP Corporate & Wedding Scenting">VIP Corporate & Wedding Scenting</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                      Preferred Boutique Salon *
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-[#171722] border border-[#29293a] focus:border-[#d4af37] text-white text-xs px-4 py-3.5 rounded-xl focus:outline-none cursor-pointer transition-colors"
                    >
                      <option value="18 Place Vendôme, Paris">18 Place Vendôme, Paris</option>
                      <option value="42 New Bond Street, London">42 New Bond Street, London</option>
                      <option value="740 Madison Avenue, New York">740 Madison Avenue, New York</option>
                      <option value="Virtual Video Salon">Virtual Video Consultation</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                      Desired Date
                    </label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-[#171722] border border-[#29293a] focus:border-[#d4af37] text-white text-xs px-4 py-3.5 rounded-xl focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs uppercase tracking-wider text-zinc-400 font-medium">
                    Notes, Fragrance Preferences or Bespoke Requests
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the fragrances you admire (e.g. oud, amber, rose, or fresh notes) or specify custom flacon calligraphy initials..."
                    className="w-full bg-[#171722] border border-[#29293a] focus:border-[#d4af37] text-white text-xs px-4 py-3.5 rounded-xl focus:outline-none placeholder-zinc-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-gradient-to-r from-[#d4af37] to-[#e6ca7b] hover:from-[#c29c2d] hover:to-[#d4af37] text-black font-semibold text-xs uppercase tracking-[0.2em] rounded-xl transition-all shadow-xl shadow-[#d4af37]/20 flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <span>Registering Reservation...</span>
                  ) : (
                    <span>Confirm Concierge Appointment</span>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Right Information Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#111118] border border-[#232332] rounded-3xl p-8 space-y-6">
              <h3 className="font-serif-luxury text-xl text-white">
                The Salon Privé Experience
              </h3>
              <p className="text-xs text-zinc-300 leading-relaxed font-light">
                During a private olfactory consultation, an Élysian Noir scent sommelier conducts an unhurried dermal evaluation. 
                You will experience pure botanical absolutes before resting the 5 signature creations directly upon your pulse points.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-3 text-xs">
                  <div className="w-5 h-5 rounded-full bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-zinc-300">Complimentary 45-minute bespoke scent profile diagnostics</span>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <div className="w-5 h-5 rounded-full bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-zinc-300">Champagne and French patisserie hospitality in our salons</span>
                </div>
                <div className="flex items-start space-x-3 text-xs">
                  <div className="w-5 h-5 rounded-full bg-[#d4af37]/10 text-[#d4af37] flex items-center justify-center flex-shrink-0 mt-0.5">
                    ✓
                  </div>
                  <span className="text-zinc-300">Complimentary customized wax-sealed discovery set to take home</span>
                </div>
              </div>
            </div>

            {/* Direct Contacts Card */}
            <div className="bg-[#111118] border border-[#232332] rounded-3xl p-8 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#d4af37] font-semibold block">
                Instant Concierge Access
              </span>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between py-2 border-b border-[#21212f]">
                  <span className="text-zinc-400">Headquarters Atelier</span>
                  <span className="text-white font-medium">Grasse & Paris, France</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#21212f]">
                  <span className="text-zinc-400">Concierge Desk</span>
                  <span className="text-[#d4af37] font-medium">concierge@elysian-noir.paris</span>
                </div>
                <div className="flex justify-between py-2 border-b border-[#21212f]">
                  <span className="text-zinc-400">VIP Phone / Whatsapp</span>
                  <span className="text-white font-medium">+33 (0)1 42 68 00 24</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-zinc-400">Response Horizon</span>
                  <span className="text-emerald-400 font-medium">Within 2 hours (Global)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            FLAGSHIP BOUTIQUES
        ========================================================================= */}
        <section className="space-y-12 border-t border-[#1a1a24] pt-16">
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Global Salons
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              Visit Our Flagship Sanctuaries
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {boutiques.map((b, idx) => (
              <div
                key={idx}
                className="bg-[#111118] border border-[#232332] rounded-3xl overflow-hidden group hover:border-[#d4af37]/40 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-[#181824]">
                  <img
                    src={b.image}
                    alt={b.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase tracking-wider text-[#d4af37] border border-[#d4af37]/30">
                    {b.city} Flagship
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-serif-luxury text-xl text-white">{b.name}</h3>
                  <p className="text-xs text-zinc-300">{b.address}</p>
                  
                  <div className="pt-2 text-xs text-zinc-400 space-y-1 border-t border-[#1f1f2e]">
                    <p><strong>Hotline:</strong> {b.phone}</p>
                    <p><strong>Hours:</strong> {b.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =========================================================================
            FAQ ACCORDION
        ========================================================================= */}
        <section className="space-y-10 border-t border-[#1a1a24] pt-16 max-w-4xl mx-auto">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-[0.25em] text-[#d4af37] font-semibold">
              Frequently Asked Inquiries
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-4xl text-white font-light">
              Maison Questions & Guarantees
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="rounded-2xl bg-[#111118] border border-[#232332] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between text-sm sm:text-base font-serif-luxury text-white hover:text-[#d4af37] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDownIcon
                      className={`w-4 h-4 text-zinc-400 transform transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#d4af37]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 font-light leading-relaxed border-t border-[#1a1a26]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </div>
    </div>
  );
}
