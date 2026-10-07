import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | ÉLYSIAN NOIR Haute Parfumerie",
  description:
    "Terms of sale, returns policy, and general conditions governing purchases and services from ÉLYSIAN NOIR Haute Parfumerie.",
};

export default function TermsPage() {
  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing the ÉLYSIAN NOIR online boutique or engaging with any of our services — including in-boutique consultations, bespoke engraving, or discovery subscription programs — you accept and agree to be bound by these Terms and Conditions. If you do not accept these terms, please refrain from using our services.",
        "These terms are governed by the laws of France and the European Union. In the event of a dispute, the courts of Paris, France shall have exclusive jurisdiction unless applicable consumer protection laws in your jurisdiction provide otherwise.",
      ],
    },
    {
      title: "Product Descriptions & Pricing",
      content: [
        "All fragrance descriptions, ingredient lists, longevity estimates, and olfactory characterisations presented on our boutique represent our genuine assessment of each creation's character. Individual experience of fragrance is subjective and may vary based on personal skin chemistry, environment, and olfactory sensitivity. We make no guarantee that your subjective experience will match our descriptions.",
        "Prices are stated in USD and are subject to change without notice. The price displayed at the time of order confirmation is the price you will be charged. Applicable taxes and customs duties for international orders are the responsibility of the purchaser and are calculated and displayed at checkout.",
      ],
    },
    {
      title: "Orders & Payment",
      content: [
        "Order confirmation constitutes a binding purchase agreement. We reserve the right to cancel orders where fraud indicators are detected, where payment cannot be verified, or where inventory levels have changed between cart creation and payment processing.",
        "Accepted payment methods include all major credit and debit cards (Visa, Mastercard, American Express), and selected digital payment services. All card data is processed through PCI-DSS Level 1 certified processors. ÉLYSIAN NOIR does not store, view, or have access to full card numbers.",
      ],
    },
    {
      title: "Shipping & Delivery",
      content: [
        "Orders are dispatched from our Paris atelier within 2–3 business days of confirmed payment. All parcels are insured, temperature-controlled, and require a signature upon delivery. Estimated delivery timeframes: Europe 2–3 business days; North America 3–4 business days; Asia-Pacific & Middle East 4–7 business days.",
        "Complimentary insured express shipping is applied to all orders totalling USD $150 or more. Orders below this threshold carry a flat express courier fee of USD $25. This fee covers the specialised temperature-controlled packaging required to preserve fragrance integrity during transit.",
      ],
    },
    {
      title: "Returns & Exchanges",
      content: [
        "We offer a 30-day return policy on all full-size flacons returned in their original, factory-sealed condition. An unopened factory seal is an absolute requirement for return acceptance — this protects the integrity of our products and the safety of other patrons. Products that have been opened, sprayed, or tampered with in any way are not eligible for return.",
        "To initiate a return, contact our concierge at concierge@elysian-noir.paris with your order reference. We will provide a prepaid insured return label (Europe and North America) or reimbursement of reasonable courier costs (other regions) upon receipt and inspection of the returned goods. Refunds are processed within 5–7 business days of return confirmation.",
        "Bespoke engraved flacons, discovery sample vials, and discounted clearance items are non-returnable.",
      ],
    },
    {
      title: "Bespoke Services",
      content: [
        "Bespoke in-boutique consultations are complimentary and non-binding. Private reservation bookings may be cancelled or rescheduled without penalty up to 24 hours before the appointment time. No-shows or cancellations with less than 24 hours notice may result in a AED/EUR/USD 50 deposit requirement for future bookings at our discretion.",
        "Bespoke diamond-tip engraving services are non-reversible and non-refundable once production has commenced. Engraving requests are confirmed in writing by our atelier team before production begins.",
      ],
    },
    {
      title: "Intellectual Property",
      content: [
        "All content on the ÉLYSIAN NOIR digital boutique — including fragrance names, perfume formulation descriptions, photography, editorial copy, and brand identity elements — is the exclusive intellectual property of ÉLYSIAN NOIR PARFUMS SAS and is protected under French and international copyright law.",
        "Reproduction, republication, redistribution, or commercial use of any content without express written permission is strictly prohibited. Requests for editorial licensing may be directed to press@elysian-noir.paris.",
      ],
    },
    {
      title: "Limitation of Liability",
      content: [
        "ÉLYSIAN NOIR's liability for any claim arising from a product purchase or service engagement is limited to the purchase price of the specific product or service in question. We are not liable for indirect, consequential, or incidental damages of any kind.",
        "We are not liable for delays or non-performance caused by circumstances beyond our reasonable control, including natural disasters, customs delays, carrier disruptions, or force majeure events.",
      ],
    },
  ];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#d4af37]/4 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 space-y-12">
        {/* Header */}
        <div className="border-b border-[#1e1e2b] pb-10 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#161622] border border-[#d4af37]/30 text-[#d4af37] text-[10px] uppercase tracking-[0.3em]">
            <span>Legal & Compliance</span>
          </div>
          <h1 className="font-serif-luxury text-4xl sm:text-5xl text-white font-light">
            Terms & Conditions
          </h1>
          <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
            These terms govern all purchases, bespoke service engagements, and
            use of the ÉLYSIAN NOIR digital boutique and physical salons. Please
            read them carefully before engaging with our services.
          </p>
          <p className="text-xs text-zinc-500">
            Effective date: 1 September 2026 · Governed by French Law
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-white font-light flex items-center space-x-3">
                <span className="text-sm text-[#d4af37] font-mono">
                  {String(idx + 1).padStart(2, "0")}.
                </span>
                <span>{section.title}</span>
              </h2>
              {section.content.map((paragraph, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm text-zinc-300 font-light leading-[1.85] pl-8"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Footer links */}
        <div className="pt-10 border-t border-[#1a1a24] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            Legal enquiries:{" "}
            <a
              href="mailto:legal@elysian-noir.paris"
              className="text-[#d4af37] hover:underline"
            >
              legal@elysian-noir.paris
            </a>
          </p>
          <div className="flex space-x-6">
            <Link
              href="/privacy-policy"
              className="hover:text-[#d4af37] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="hover:text-[#d4af37] transition-colors"
            >
              Contact Concierge
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
