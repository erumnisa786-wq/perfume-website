import React from "react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | ÉLYSIAN NOIR Haute Parfumerie",
  description:
    "ÉLYSIAN NOIR's commitment to your privacy. How we collect, protect, and use your personal data across our digital sanctuary and global boutiques.",
};

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Data We Collect",
      content: [
        "When you engage with ÉLYSIAN NOIR — whether through our online boutique, consultation request forms, or newsletter subscriptions — we may collect information including your name, email address, postal address, telephone number, and payment details. Payment data is processed exclusively through PCI-DSS compliant third-party processors and is never stored on our servers.",
        "We also collect non-personally identifiable data through cookies and analytics tools, including browsing behaviour, fragrance preferences indicated through our Scent Finder quiz, and device information. This data helps us refine your bespoke experience.",
      ],
    },
    {
      title: "How We Use Your Data",
      content: [
        "Your personal data is used exclusively to fulfil orders and reservation requests, personalise your fragrance consultation experience, communicate order status and dispatch notifications, and — with your explicit consent — send Le Cercle Privé dispatches including harvest letters and first-access invitations.",
        "We never sell, lease, or share your personal information with third parties for marketing purposes. Your data is shared only with essential service providers (logistics, payment processing, analytics) under strict contractual confidentiality obligations.",
      ],
    },
    {
      title: "Data Retention",
      content: [
        "Customer order data is retained for a maximum of seven years to comply with financial regulatory requirements in France and the European Union. Marketing consent data is retained until you withdraw consent. You may request deletion of all non-regulatory personal data at any time by contacting our privacy office at privacy@elysian-noir.paris.",
      ],
    },
    {
      title: "Cookies & Tracking",
      content: [
        "Our digital boutique uses essential cookies required for functionality (session management, cart persistence), analytics cookies (aggregated, anonymised traffic data via privacy-first tools), and preference cookies (your olfactory family selections and quiz results).",
        "No third-party advertising cookies or cross-site tracking scripts are embedded in our boutique. You may manage or withdraw cookie consent at any time through your browser settings or our cookie preference panel.",
      ],
    },
    {
      title: "Your Rights (GDPR & CCPA)",
      content: [
        "As a data subject under GDPR (European Union) or CCPA (California), you hold rights including: access to a copy of your personal data, correction of inaccurate data, erasure of data not subject to retention requirements, restriction of processing, data portability, and the right to object to processing based on legitimate interest.",
        "To exercise any of these rights, please contact our Data Privacy Officer at privacy@elysian-noir.paris. All requests will be acknowledged within 48 hours and fulfilled within 30 calendar days.",
      ],
    },
    {
      title: "International Data Transfers",
      content: [
        "ÉLYSIAN NOIR is headquartered in Paris, France, and operates within the European Economic Area (EEA). Where your data is transferred to service providers outside the EEA (for example, our logistics partners in North America or Asia-Pacific), we ensure appropriate safeguards are in place, including standard contractual clauses approved by the European Commission.",
      ],
    },
    {
      title: "Security",
      content: [
        "We employ industry-standard encryption (TLS 1.3) for all data in transit, at-rest encryption for stored personal data, and conduct regular penetration testing of our digital infrastructure. Our boutique and concierge systems are hosted on SOC 2 Type II certified infrastructure providers.",
      ],
    },
    {
      title: "Contact & Updates",
      content: [
        "Our Data Privacy Officer may be contacted at: privacy@elysian-noir.paris or by post at: ÉLYSIAN NOIR Parfums, Attn: Privacy Office, 18 Place Vendôme, 75001 Paris, France.",
        "This policy was last updated in September 2026. We reserve the right to update this policy; material changes will be communicated to registered patrons by email no less than 30 days before taking effect.",
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
            Privacy Policy
          </h1>
          <p className="text-sm text-zinc-400 font-light leading-relaxed max-w-2xl">
            ÉLYSIAN NOIR is committed to protecting the privacy of our patrons
            with the same devotion we bring to our perfumery. This policy
            describes how we collect, protect, and use your personal
            information.
          </p>
          <p className="text-xs text-zinc-500">
            Effective date: 1 September 2026 · Last revised: September 2026
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-10">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="font-serif-luxury text-xl sm:text-2xl text-white font-light flex items-center space-x-3">
                <span className="text-sm text-[#d4af37] font-mono">
                  0{idx + 1}.
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
            Questions?{" "}
            <a
              href="mailto:privacy@elysian-noir.paris"
              className="text-[#d4af37] hover:underline"
            >
              privacy@elysian-noir.paris
            </a>
          </p>
          <div className="flex space-x-6">
            <Link href="/terms" className="hover:text-[#d4af37] transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/contact" className="hover:text-[#d4af37] transition-colors">
              Contact Concierge
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
