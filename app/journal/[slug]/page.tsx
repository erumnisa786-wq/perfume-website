import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowRightIcon, SparklesIcon } from "@/components/Icons";
import { PERFUMES } from "@/data/perfumes";

// ---------------------------------------------------------------------------
// Article Data (same as journal index, extended with body content)
// ---------------------------------------------------------------------------

const articles: Record<
  string,
  {
    slug: string;
    category: string;
    title: string;
    subtitle: string;
    date: string;
    readTime: string;
    author: string;
    image: string;
    body: { type: "paragraph" | "heading" | "pullquote"; text: string }[];
    relatedPerfumeId?: string;
  }
> = {
  "art-of-oud-extraction": {
    slug: "art-of-oud-extraction",
    category: "Ingredient Dispatch",
    title: "The Art of Wild Oud Extraction in Cambodia's Ancient Forests",
    subtitle:
      "How a single piece of agarwood, aged centuries in rainforest heartwood, becomes the sovereign soul of Oud Impérial Absolu.",
    date: "September 2026",
    readTime: "9 min read",
    author: "Aurélien Guichard, Master Perfumer",
    image:
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1600&auto=format&fit=crop",
    relatedPerfumeId: "oud-imperial-absolu",
    body: [
      {
        type: "paragraph",
        text: "The forests of Kampong Thom Province in central Cambodia are not entered lightly. Ancient Aquilaria malaccensis trees—the source of the world's most coveted oud—grow in dense jungle undergrowth that has seen little change since the age of the Khmer Empire. To source the wild agarwood at the heart of Oud Impérial Absolu, our procurement team spends weeks establishing trust with local custodian families who have protected these groves for generations.",
      },
      {
        type: "pullquote",
        text: "\"Oud cannot be rushed. The infection, the years of resin accumulation, the cutting, the hydro-distillation—each demands complete deference to natural time.\"",
      },
      {
        type: "paragraph",
        text: "Oud—or agarwood—forms when an Aquilaria tree becomes infected with a specific Phialophora parasitica mould. As a defence mechanism, the tree saturates its heartwood with a rich dark resin over years, sometimes decades. Only infected wood carries the precious volatile compounds that define oud's unmistakable profile: smoky, leathery, animalic, balsamic, with an extraordinary complexity that unfolds differently in every hour of wear.",
      },
      {
        type: "heading",
        text: "The Rarity Calculus",
      },
      {
        type: "paragraph",
        text: "Less than 2% of Aquilaria trees in the wild naturally develop the agarwood resin formation without human intervention. This biological rarity, combined with decades of over-harvesting for the Arabian Gulf and East Asian markets, has made wild Cambodian oud one of the most expensive raw materials on Earth—exceeding gold by weight in the finest grades. At ÉLYSIAN NOIR, we source exclusively from CITES-certified sustainable wild extraction partners, ensuring no contribution to illegal trade.",
      },
      {
        type: "paragraph",
        text: "The extraction process for Oud Impérial Absolu uses low-pressure steam hydro-distillation in Cambodian copper stills, a method that preserves the volatile top notes that flash distillation at high temperatures would destroy. The result is a raw oud absolute of extraordinary aromatic complexity, which is then transported in amber glass to our Grasse atelier where it rests for 18 months in French Limousin oak barrels before being formally composed.",
      },
      {
        type: "heading",
        text: "The Character of Wild vs. Cultivated Oud",
      },
      {
        type: "paragraph",
        text: "Cultivated (plantation) oud, while more ethically consistent, carries an inevitable uniformity. The infection is induced, the harvest is scheduled, and the result is a refined but somewhat predictable character. Wild oud, by contrast, is entirely the product of its environment—the specific fungi present in that tree, the mineral composition of the soil, the canopy density, and decades of singular biological evolution. Each piece of wild agarwood is, in essence, irreproducible.",
      },
      {
        type: "pullquote",
        text: "\"The piece of wild oud at the centre of Oud Impérial Absolu was estimated to be 60 years of active resin formation. The tree itself was over 120 years old.\"",
      },
      {
        type: "paragraph",
        text: "We honour this biological rarity by using wild oud at concentrations that allow its full dimensional complexity to express itself across the fragrance's 18-to-20-hour development arc—from its royal saffron and bergamot opening through the smoked labdanum heart, all the way to the profound birch tar and aged ambergris base that defines its extraordinary nocturnal signature.",
      },
    ],
  },
  "grasse-rose-harvest-2026": {
    slug: "grasse-rose-harvest-2026",
    category: "Harvest Letter",
    title: "Dawn Harvest in Grasse: The 2026 Centifolia Rose Season",
    subtitle:
      "Our master distiller documents six weeks of hand-picking roses before 7am in the terraced hills above Grasse.",
    date: "August 2026",
    readTime: "7 min read",
    author: "Marie Salamagne, Master Perfumer",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1600&auto=format&fit=crop",
    relatedPerfumeId: "santal-blanche",
    body: [
      {
        type: "paragraph",
        text: "At 5:15am, the light above Grasse is the colour of pale amber—not yet the gold of day, but no longer the blue of night. The centifolia rose fields stretch in long terraced rows down the hillside toward the valley, heavy with blooms that have opened only in the last two hours. This is the window. By 9am, the volatile aromatic molecules in the petals will have partially evaporated in the mounting Provençal heat. The harvest must be complete before then.",
      },
      {
        type: "pullquote",
        text: "\"A single rose provides only a fraction of a gram of absolute. It takes three and a half tonnes of hand-picked petals to yield one kilogram of Grasse rose absolute.\"",
      },
      {
        type: "paragraph",
        text: "The Rosa centifolia—the cabbage rose, the rose of a hundred petals—is Grasse's singular achievement. Unlike Bulgarian damask roses, which are firmer, more robust, and transport well to industrial facilities, the centifolia is fragile, waxy, and loses its aromatic character within hours of picking. It must be processed almost immediately in the copper stills a short distance from the fields. This biological demand explains why Grasse rose absolute is among the most expensive botanical materials in perfumery.",
      },
      {
        type: "heading",
        text: "What the 2026 Season Yielded",
      },
      {
        type: "paragraph",
        text: "The 2026 season was exceptional. A cold, wet April followed by a dry and warm May allowed a late but particularly aromatic bloom. The pickers—mostly women from the same families who have worked these fields for three generations—noted immediately that the petals had an unusual depth. The normal green top note of fresh-cut rose was present, but underneath lay an extraordinary honey-like warmth unusual for centifolia.",
      },
      {
        type: "paragraph",
        text: "Our Grasse distiller, who has managed the rose harvest for ÉLYSIAN NOIR since our founding extraction partnership, made the decision to extend the enfleurage period by three additional days to capture more of the heavy base aromatic compounds. The result is a 2026 centifolia absolute of uncommon richness that will contribute to the next private reserve of Rose Nocturne.",
      },
    ],
  },
  "history-of-oak-barrel-aging": {
    slug: "history-of-oak-barrel-aging",
    category: "Atelier Chronicle",
    title: "18 Months in French Limousin Oak: A Perfumer's Patience",
    subtitle:
      "The seldom-discussed process of resting raw extrait concentrations in aged French oak before the final composition.",
    date: "July 2026",
    readTime: "6 min read",
    author: "Dominique Ropion, Master Perfumer",
    image:
      "https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1600&auto=format&fit=crop",
    relatedPerfumeId: "rose-nocturne",
    body: [
      {
        type: "paragraph",
        text: "The idea to age perfume concentrations in oak barrels came to our founding perfumers in 1965 following a visit to the Cognac cellars of the Charente. The amber-coloured brandies resting in 350-litre Limousin oak barrels had an aromatic complexity and smoothness that no young spirit could match. The tannins in the oak, the slow oxygen exchange through the stave pores, the micro-climate of the cellar—all contributed to an aromatic transformation that simply could not be accelerated.",
      },
      {
        type: "pullquote",
        text: "\"We do not know precisely why oak barrel resting smooths and integrates a perfume concentrate in the way it does. We only know with certainty that it does.\"",
      },
      {
        type: "paragraph",
        text: "Our raw extrait concentrations—the initial blended composition of botanical absolutes, resins, and musks—are placed in specially commissioned 50-litre French Limousin oak barrels that previously held 12-year-old Cognac. The barrel interiors are lightly toasted, not charred, to avoid excessive vanillin and charcoal notes dominating. Over the following 18 months, the concentrate undergoes a slow, subtle transformation.",
      },
      {
        type: "heading",
        text: "What Changes During the Aging",
      },
      {
        type: "paragraph",
        text: "The primary effect is integration—sharp aromatic transitions between top, heart, and base notes soften considerably. Individual components that might initially feel disconnected begin to read as a unified olfactory composition. Secondary effects include the absorption of minute quantities of vanillin, ellagitannins, and woody lactones from the oak, which contribute additional depth to the base note profile without introducing an overt 'vanilla' or 'woody' character perceptible to the nose.",
      },
    ],
  },
  "iris-florentine-butter": {
    slug: "iris-florentine-butter",
    category: "Ingredient Dispatch",
    title: "The Three-Year Journey of Iris Butter from Florence",
    subtitle:
      "Why the finest iris absolute requires 36 months of patient rhizome drying before yielding its incomparable powdery opulence.",
    date: "June 2026",
    readTime: "5 min read",
    author: "Olivia Giacobetti, Master Perfumer",
    image:
      "https://images.unsplash.com/photo-1490750967868-88df5691cc5d?q=80&w=1600&auto=format&fit=crop",
    relatedPerfumeId: "santal-blanche",
    body: [
      {
        type: "paragraph",
        text: "The iris rhizomes harvested this autumn will not produce their fragrant butter for three more years. This is not inefficiency—it is simply the nature of iris, the most time-intensive ingredient in all of classical perfumery. The orris butter we use in Santal Blanche was planted during the spring of 2022 in the Florentine hills near Pontassieve, where Iris pallida has been cultivated for perfumery since the Renaissance.",
      },
      {
        type: "pullquote",
        text: "\"Fresh iris root is nearly odourless. Only after three years of cellar drying does its extraordinary powdery, violet, and woody aromatic profile emerge.\"",
      },
      {
        type: "paragraph",
        text: "The chemistry behind the delayed emergence of iris fragrance centres on a precursor molecule called irone A, which is present in fresh rhizomes but is odourless. Over three years of slow enzymatic breakdown during drying, irone A converts to a complex mixture of aromatic compounds—including methyl-gamma-ionone—that collectively create the unmistakable iris character: powdery, violet-like, woody, with a faint carrot-like facet that perfumers value enormously as a bridging note between floral and woody accords.",
      },
    ],
  },
  "sillage-and-skin-chemistry": {
    slug: "sillage-and-skin-chemistry",
    category: "Olfactory Essay",
    title: "Why the Same Perfume Smells Different On Every Skin",
    subtitle:
      "A fragrance sommelier's exploration of skin pH, microbiome, and the dermal alchemy that makes your signature scent truly singular.",
    date: "May 2026",
    readTime: "8 min read",
    author: "Anne Flipo, Master Perfumer",
    image:
      "https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=1600&auto=format&fit=crop",
    relatedPerfumeId: "fleur-doranger-prive",
    body: [
      {
        type: "paragraph",
        text: "The question we receive most frequently in our concierge consultations is one that initially seems straightforward but opens into remarkable complexity: 'I smell this fragrance on a friend and find it extraordinary—why does it smell different on me?' The answer reveals the intimate relationship between perfumery and human biology, and explains why we always encourage clients to experience any fragrance on their own skin before purchasing.",
      },
      {
        type: "heading",
        text: "Skin pH and Aromatic Expression",
      },
      {
        type: "paragraph",
        text: "Human skin pH ranges from approximately 4.5 to 7.0, influenced by genetics, diet, medication, hydration, and hormonal state. This pH range significantly affects how perfume molecules behave. Acidic skin (low pH) tends to amplify and sharpen citrus and fresh top notes while accelerating their evaporation. More alkaline skin (higher pH) tends to soften sharp edges and extend the mid-note development phase, giving the same fragrance a rounder, more powdery character.",
      },
      {
        type: "pullquote",
        text: "\"Your skin microbiome—the unique community of bacteria living on your skin's surface—actively metabolises perfume molecules, creating secondary aromatic compounds that no perfumer designs for, but which become part of your singular scent signature.\"",
      },
      {
        type: "paragraph",
        text: "This is why we formulate our Élysian Noir extraits at 30%+ oil concentration—not simply to achieve longevity, but to ensure that even after dermal chemistry has transformed the top and mid-note profiles, the deep base notes remain present, unambiguous, and structurally complete. The depth of concentration acts as an aromatic guarantee.",
      },
    ],
  },
  "ambergris-the-rarest-note": {
    slug: "ambergris-the-rarest-note",
    category: "Rare Ingredients",
    title: "Ambergris: The Ocean's Rarest Treasure and Its Role in Our Extraits",
    subtitle:
      "Discovered only on remote Atlantic coastlines, aged ambergris provides the ineffable fixative depth in our Oud Impérial Absolu.",
    date: "April 2026",
    readTime: "10 min read",
    author: "Aurélien Guichard, Master Perfumer",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1600&auto=format&fit=crop",
    relatedPerfumeId: "oud-imperial-absolu",
    body: [
      {
        type: "paragraph",
        text: "Ambergris is one of the most extraordinary substances in the natural world—a waxy, grey-brown material produced in the intestine of sperm whales and expelled into the ocean, where it floats for years, sometimes decades, undergoing slow photochemical transformation before washing ashore. Fresh ambergris carries an unpleasant faecal odour; aged ambergris, transformed by sunlight and seawater into a complex aromatic compound, is one of the most refined fixatives known to perfumery.",
      },
      {
        type: "pullquote",
        text: "\"The aged ambergris used in our Oud Impérial Absolu was found on a remote Azorean beach, estimated to have been floating for over 40 years. Its aromatic profile was incomparable.\"",
      },
      {
        type: "paragraph",
        text: "The primary aromatic compound in aged ambergris is ambroxide (also called ambrein), a tricyclic terpenoid ether with an extraordinary ability to act as a fragrance fixative—it bonds to other aromatic molecules and dramatically extends their evaporation time. This is why perfumers prize ambergris above nearly any other base note material: a drop of genuine aged ambergris can extend the longevity of an entire composition by several hours, while simultaneously adding its own characteristic clean-animalic, oceanic-woody aromatic signature.",
      },
      {
        type: "heading",
        text: "Ethical Sourcing of Ambergris",
      },
      {
        type: "paragraph",
        text: "ÉLYSIAN NOIR uses only naturally occurring beachcombed ambergris—material found washed ashore, never taken from harvested or captive animals. This is both an ethical choice and a practical one: the ambergris found on beaches has already undergone the extended solar and oceanic transformation that produces the finest aromatic quality. Under CITES regulations, naturally beachcombed ambergris is legal to trade in most jurisdictions when properly documented.",
      },
      {
        type: "paragraph",
        text: "Our current supply—sufficient for the current release of Oud Impérial Absolu—was sourced through a network of trusted coastal naturalists and represents several decades of ocean aging. Once exhausted, we cannot simply purchase more on demand; we must wait for nature's irregular provisioning. This is the authentic scarcity that defines genuine haute parfumerie.",
      },
    ],
  },
};

// ---------------------------------------------------------------------------

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) {
    return { title: "Article Not Found | ÉLYSIAN NOIR" };
  }
  return {
    title: `${article.title} | Le Journal ÉLYSIAN NOIR`,
    description: article.subtitle,
  };
}

export default async function JournalArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = articles[slug];

  if (!article) {
    notFound();
  }

  const relatedPerfume = article.relatedPerfumeId
    ? PERFUMES.find((p) => p.id === article.relatedPerfumeId)
    : null;

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ambient glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-[#d4af37]/5 rounded-full blur-[200px] pointer-events-none" />

      {/* Hero Image */}
      <div className="relative h-[55vh] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-[#09090b]" />
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 -mt-24 relative z-10 pb-24">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-xs uppercase tracking-wider text-zinc-500 mb-8">
          <Link href="/" className="hover:text-[#d4af37] transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/journal" className="hover:text-[#d4af37] transition-colors">
            Journal
          </Link>
          <span>/</span>
          <span className="text-zinc-400 truncate">{article.category}</span>
        </nav>

        {/* Article Header */}
        <header className="space-y-5 mb-12">
          <div className="flex items-center space-x-3">
            <span className="text-[10px] uppercase tracking-widest text-[#d4af37] bg-[#d4af37]/15 border border-[#d4af37]/30 px-3 py-1 rounded-full font-semibold">
              {article.category}
            </span>
          </div>

          <h1 className="font-serif-luxury text-3xl sm:text-5xl text-white font-light leading-[1.1]">
            {article.title}
          </h1>
          <p className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed">
            {article.subtitle}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-[#1e1e2b] text-xs text-zinc-500">
            <div className="space-y-0.5">
              <span className="block text-[#d4af37] font-medium">
                {article.author}
              </span>
              <span>
                {article.date} · {article.readTime}
              </span>
            </div>
            <Link
              href="/journal"
              className="text-zinc-400 hover:text-[#d4af37] transition-colors flex items-center space-x-1"
            >
              <span>← Back to Journal</span>
            </Link>
          </div>
        </header>

        {/* Article Body */}
        <article className="space-y-6 prose-custom">
          {article.body.map((block, i) => {
            if (block.type === "paragraph") {
              return (
                <p
                  key={i}
                  className="text-sm sm:text-base text-zinc-300 font-light leading-[1.9]"
                >
                  {block.text}
                </p>
              );
            }
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  className="font-serif-luxury text-2xl sm:text-3xl text-white font-light pt-6"
                >
                  {block.text}
                </h2>
              );
            }
            if (block.type === "pullquote") {
              return (
                <blockquote
                  key={i}
                  className="border-l-2 border-[#d4af37] pl-6 my-8"
                >
                  <p className="font-serif-luxury text-lg sm:text-xl text-zinc-200 italic font-light leading-relaxed">
                    {block.text}
                  </p>
                </blockquote>
              );
            }
            return null;
          })}
        </article>

        {/* Related Perfume */}
        {relatedPerfume && (
          <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-[#111118] border border-[#d4af37]/30 space-y-4">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-widest text-[#d4af37] font-semibold">
              <SparklesIcon className="w-3.5 h-3.5" />
              <span>The Creation Featured in This Dispatch</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-20 h-24 rounded-xl overflow-hidden flex-shrink-0 border border-[#2b2b3b]">
                <img
                  src={relatedPerfume.image}
                  alt={relatedPerfume.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 space-y-1">
                <span className="text-[10px] uppercase tracking-widest text-[#d4af37]">
                  {relatedPerfume.category}
                </span>
                <h3 className="font-serif-luxury text-xl text-white">
                  {relatedPerfume.name}
                </h3>
                <p className="text-xs text-zinc-400 italic">
                  {relatedPerfume.tagline}
                </p>
                <div className="flex items-center gap-3 pt-2">
                  <Link
                    href={`/product/${relatedPerfume.id}`}
                    className="text-xs flex items-center space-x-1 text-[#d4af37] hover:text-[#f5e29f] transition-colors font-medium"
                  >
                    <span>Explore Flacon</span>
                    <ArrowRightIcon className="w-3 h-3" />
                  </Link>
                  <span className="text-zinc-600">·</span>
                  <span className="text-xs text-zinc-400">
                    From ${relatedPerfume.price}
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Back link */}
        <div className="mt-12 pt-8 border-t border-[#1a1a24] text-center">
          <Link
            href="/journal"
            className="inline-flex items-center space-x-2 text-xs uppercase tracking-widest text-zinc-400 hover:text-[#d4af37] transition-colors"
          >
            <span>← Return to Le Journal</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
