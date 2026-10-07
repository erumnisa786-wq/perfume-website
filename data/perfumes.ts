export interface Accord {
  name: string;
  percentage: number;
}

export interface BottleSize {
  size: string;
  price: number;
  label: string;
}

export interface PerfumeReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
}

export interface Perfume {
  id: string;
  name: string;
  frenchTitle: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: 'Smoked Oud' | 'Woody & Amber' | 'Velvet Floral' | 'Fresh Aquatic' | 'Citrus & Gourmand';
  concentration: 'Extrait de Parfum (32%)' | 'Eau de Parfum (22%)' | 'Absolu Privé (35%)';
  gender: 'Unisex' | 'For Her' | 'For Him';
  rating: number;
  reviewsCount: number;
  badge?: 'Bestseller' | 'Private Reserve' | 'New Release' | 'Masterpiece' | 'Limited Batch';
  description: string;
  story: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  accords: Accord[];
  longevity: string;
  sillage: string;
  season: string[];
  perfumer: string;
  harvestOrigin: string;
  sizes: BottleSize[];
  image: string;
  gallery: string[];
  bottleColor: string;
  inStock: boolean;
  reviews: PerfumeReview[];
}

export const PERFUMES: Perfume[] = [
  {
    id: "oud-imperial-absolu",
    name: "Oud Impérial Absolu",
    frenchTitle: "L'Élixir Majestueux de la Nuit",
    tagline: "A nocturnal convergence of Cambodian agarwood, midnight saffron, and smoked velvet damask roses.",
    price: 340,
    originalPrice: 390,
    category: "Smoked Oud",
    concentration: "Extrait de Parfum (32%)",
    gender: "Unisex",
    rating: 4.96,
    reviewsCount: 184,
    badge: "Bestseller",
    description: "Conceived in the quiet sanctum of our Grasse atelier, Oud Impérial Absolu is an unapologetic hymn to rare woods and smoky resins. Aged for 18 months in French oak barrels, it weaves sovereign Cambodian oud with hand-harvested Taif roses and golden ambergris.",
    story: "Inspired by ancient incense routes stretching from Muscat to Isfahan, this composition opens with a blaze of royal saffron before submerging into opulent dark balsamic depths that linger into dawn.",
    topNotes: ["Royal Saffron", "Pink Peppercorn", "Bergamot of Calabria"],
    heartNotes: ["Bulgarian Damask Rose", "Taif Rose", "Smoked Labdanum", "Atlas Cedar"],
    baseNotes: ["Cambodian Wild Oud", "Aged Ambergris", "Birch Tar", "Bourbon Vanilla"],
    accords: [
      { name: "Smoky Oud", percentage: 95 },
      { name: "Balsamic Amber", percentage: 88 },
      { name: "Velvet Rose", percentage: 82 },
      { name: "Warm Leather", percentage: 76 },
    ],
    longevity: "16 - 20 Hours",
    sillage: "Enormous & Magnetic",
    season: ["Autumn", "Winter", "Black-Tie Soirée"],
    perfumer: "Aurélien Guichard",
    harvestOrigin: "Phnom Penh & Grasse (2024 Reserve)",
    sizes: [
      { size: "50ml", price: 270, label: "50ml / 1.7 fl. oz." },
      { size: "100ml", price: 340, label: "100ml / 3.4 fl. oz. (Signature)" },
      { size: "200ml", price: 490, label: "200ml / 6.8 fl. oz. (Flacon Privé)" }
    ],
    image: "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop"
    ],
    bottleColor: "amber",
    inStock: true,
    reviews: [
      {
        id: "r1",
        author: "Camille de Montfort",
        rating: 5,
        date: "2 weeks ago",
        title: "The definitive oud masterpiece",
        comment: "The rose and smoky saffron opening gives way to the smoothest, most aristocratic oud I have ever experienced. Lasts well past 18 hours on silk.",
        verified: true
      },
      {
        id: "r2",
        author: "Julian Sterling",
        rating: 5,
        date: "1 month ago",
        title: "Intoxicating sillage",
        comment: "Every single time I wear this in Geneva or London, people turn and ask for the name. It commands respect without being abrasive.",
        verified: true
      }
    ]
  },
  {
    id: "santal-blanche",
    name: "Santal Blanche",
    frenchTitle: "Le Voile de Bois Blanc",
    tagline: "Creamy Australian sandalwood embraced by powdery Florentine iris and warm cardamom warmth.",
    price: 260,
    category: "Woody & Amber",
    concentration: "Eau de Parfum (22%)",
    gender: "Unisex",
    rating: 4.92,
    reviewsCount: 142,
    badge: "Masterpiece",
    description: "A sanctuary of tactile tranquility. Santal Blanche pairs the serene warmth of sustainably harvested Australian sandalwood with the ethereal softness of Florentine iris butter and pure white cashmere musk.",
    story: "Created to embody the morning sun filtering through linen curtains onto polished cedar floors in an architect's Parisian loft.",
    topNotes: ["Green Cardamom", "White Violet", "Crisp Bergamot"],
    heartNotes: ["Florentine Iris", "Papyrus", "Ambrette Seed"],
    baseNotes: ["Australian Sandalwood", "Cashmere Cedar", "White Amber"],
    accords: [
      { name: "Creamy Sandalwood", percentage: 96 },
      { name: "Powdery Iris", percentage: 86 },
      { name: "Warm Spicy", percentage: 78 },
      { name: "Clean Musk", percentage: 72 },
    ],
    longevity: "12 - 14 Hours",
    sillage: "Sophisticated & Close",
    season: ["Spring", "Autumn", "All Year"],
    perfumer: "Marie Salamagne",
    harvestOrigin: "Western Australia & Florence",
    sizes: [
      { size: "50ml", price: 210, label: "50ml / 1.7 fl. oz." },
      { size: "100ml", price: 260, label: "100ml / 3.4 fl. oz. (Signature)" },
      { size: "200ml", price: 380, label: "200ml / 6.8 fl. oz. (Flacon Privé)" }
    ],
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop"
    ],
    bottleColor: "gold",
    inStock: true,
    reviews: [
      {
        id: "r3",
        author: "Eleanor Vance",
        rating: 5,
        date: "3 weeks ago",
        title: "Pure peaceful luxury",
        comment: "This has become my everyday signature scent. The iris note softens the sandalwood into liquid silk. Understated opulence at its highest.",
        verified: true
      }
    ]
  },
  {
    id: "rose-nocturne",
    name: "Rose Nocturne",
    frenchTitle: "L'Ombre Écarlate",
    tagline: "Dark Bulgarian damask rose submerged in tart cassis liqueur and Indonesian patchouli.",
    price: 280,
    category: "Velvet Floral",
    concentration: "Eau de Parfum (22%)",
    gender: "For Her",
    rating: 4.89,
    reviewsCount: 119,
    badge: "Bestseller",
    description: "The antithesis of timid florals. Rose Nocturne captures roses cut at twilight under a crescent moon, infused with dark berry juices, incense smoke, and the deep earthy seduction of aged patchouli.",
    story: "An homage to midnight operas at the Palais Garnier, where velvet cloaks retain the memory of crushed crimson blooms and forbidden encounters.",
    topNotes: ["Blackcurrant Cassis", "Blood Orange", "Pink Pepper"],
    heartNotes: ["Bulgarian Rose Absolu", "Turkish Rose", "Geranium Leaf"],
    baseNotes: ["Indonesian Patchouli", "Smoked Incense", "Benzoin", "Black Musk"],
    accords: [
      { name: "Dark Rose", percentage: 98 },
      { name: "Fruity Cassis", percentage: 80 },
      { name: "Earth Patchouli", percentage: 85 },
      { name: "Balsamic Warmth", percentage: 70 },
    ],
    longevity: "14 - 16 Hours",
    sillage: "Heavy & Dramatic",
    season: ["Autumn", "Winter", "Nocturnal Affairs"],
    perfumer: "Dominique Ropion",
    harvestOrigin: "Kazanlak Valley, Bulgaria",
    sizes: [
      { size: "50ml", price: 220, label: "50ml / 1.7 fl. oz." },
      { size: "100ml", price: 280, label: "100ml / 3.4 fl. oz. (Signature)" },
      { size: "200ml", price: 410, label: "200ml / 6.8 fl. oz. (Flacon Privé)" }
    ],
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop"
    ],
    bottleColor: "rose",
    inStock: true,
    reviews: [
      {
        id: "r4",
        author: "Genevieve Moreau",
        rating: 5,
        date: "1 month ago",
        title: "Gothic romantic perfection",
        comment: "This is not your grandmother's rose. It is dark, vampy, sensual, and intoxicating. Patchouli and cassis elevate it to high art.",
        verified: true
      }
    ]
  },
  {
    id: "nectar-de-figue",
    name: "Nectar de Figue",
    frenchTitle: "Le Jardin Édenique",
    tagline: "Sun-drenched wild fig fruit, crushed green leaves, velvety coconut water, and white cedar.",
    price: 230,
    category: "Fresh Aquatic",
    concentration: "Eau de Parfum (22%)",
    gender: "Unisex",
    rating: 4.87,
    reviewsCount: 96,
    badge: "New Release",
    description: "Sunlight dancing across Aegean stone terrace. Nectar de Figue opens with bitter green sap and crushed emerald leaves before unfolding the lactonic nectar of ripe purple figs, grounded in crisp Mediterranean cedarwood.",
    story: "Crafted during an artist retreat along the cliffs of Hydra, bottling the breeze as sun-warmed fig groves meet salty Aegean sea spray.",
    topNotes: ["Crushed Fig Leaves", "Sunlit Mandarin", "Green Galbanum"],
    heartNotes: ["Ripe Purple Fig Pulp", "Coconut Water", "White Jasmine"],
    baseNotes: ["Virginian Cedar", "Sun-Bleached Driftwood", "Warm Amber"],
    accords: [
      { name: "Green Fig", percentage: 95 },
      { name: "Lactonic Milk", percentage: 84 },
      { name: "Woody Cedar", percentage: 76 },
      { name: "Fresh Crisp", percentage: 88 },
    ],
    longevity: "10 - 12 Hours",
    sillage: "Luminous & Breezy",
    season: ["Spring", "Summer", "Warm Days"],
    perfumer: "Olivia Giacobetti",
    harvestOrigin: "Peloponnese, Greece",
    sizes: [
      { size: "50ml", price: 185, label: "50ml / 1.7 fl. oz." },
      { size: "100ml", price: 230, label: "100ml / 3.4 fl. oz. (Signature)" },
      { size: "200ml", price: 340, label: "200ml / 6.8 fl. oz. (Flacon Privé)" }
    ],
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=1000&auto=format&fit=crop"
    ],
    bottleColor: "emerald",
    inStock: true,
    reviews: [
      {
        id: "r5",
        author: "Marcus Lindqvist",
        rating: 5,
        date: "2 weeks ago",
        title: "The greenest, most realistic fig",
        comment: "You can smell both the bitter crushed branch and the sweet milky fruit. Incredibly uplifting for warm days.",
        verified: true
      }
    ]
  },
  {
    id: "fleur-doranger-prive",
    name: "Fleur d'Oranger Privé",
    frenchTitle: "Le Printemps Méditerranéen",
    tagline: "Dewy Tunisian neroli, sun-kissed orange blossom petals, petitgrain, and sparkling bergamot.",
    price: 240,
    category: "Citrus & Gourmand",
    concentration: "Extrait de Parfum (32%)",
    gender: "Unisex",
    rating: 4.93,
    reviewsCount: 104,
    badge: "Private Reserve",
    description: "An intoxicating burst of Mediterranean morning light. Distilled from hand-picked white blossoms from Cap Bon, blended with bitter orange wood and sparkling Calabrian bergamot.",
    story: "Walking through blooming citrus orchards along the coast of Amalfi at 7 AM, as dew evaporates from tender white petals into the warming sun.",
    topNotes: ["Calabrian Bergamot", "Bitter Orange Petitgrain", "Mandarin Zest"],
    heartNotes: ["Tunisian Neroli Absolu", "Grasse Orange Blossom", "Sambac Jasmine"],
    baseNotes: ["White Cedarwood", "Clean Amber", "Silk Musk", "Madagascar Vanilla"],
    accords: [
      { name: "White Floral", percentage: 94 },
      { name: "Citrus Fresh", percentage: 92 },
      { name: "Clean Radiance", percentage: 82 },
      { name: "Warm Vanilla", percentage: 78 },
    ],
    longevity: "12 - 15 Hours",
    sillage: "Vibrant & Radiant",
    season: ["Spring", "Summer", "Sunlit Days"],
    perfumer: "Anne Flipo",
    harvestOrigin: "Nabeul, Tunisia & Grasse",
    sizes: [
      { size: "50ml", price: 190, label: "50ml / 1.7 fl. oz." },
      { size: "100ml", price: 240, label: "100ml / 3.4 fl. oz. (Signature)" },
      { size: "200ml", price: 350, label: "200ml / 6.8 fl. oz. (Flacon Privé)" }
    ],
    image: "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=1000&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1547887537-6158d64c35b3?q=80&w=1000&auto=format&fit=crop"
    ],
    bottleColor: "gold",
    inStock: true,
    reviews: [
      {
        id: "r8",
        author: "Chloé Fontaine",
        rating: 5,
        date: "3 weeks ago",
        title: "Pure sunshine in a bottle",
        comment: "So uplifting, so natural. Doesn't have any synthetic sharpness; it smells exactly like fresh orange blossoms crushed between your fingertips.",
        verified: true
      }
    ]
  }
];

export const OLFACTORY_FAMILIES = [
  {
    name: "Smoked Oud",
    count: 1,
    description: "Deep resinous agarwood, smoldering leather, frankincense & midnight embers.",
    accent: "#b45309"
  },
  {
    name: "Woody & Amber",
    count: 1,
    description: "Regal sandalwood, golden ambergris, bourbon vanilla & earthy Florentine iris.",
    accent: "#d4af37"
  },
  {
    name: "Velvet Floral",
    count: 1,
    description: "Midnight Bulgarian roses, dark cassis liqueur, patchouli & smoky incense.",
    accent: "#be185d"
  },
  {
    name: "Fresh Aquatic",
    count: 1,
    description: "Sunlit wild Aegean fig, crushed green leaves, coconut water & driftwood.",
    accent: "#0284c7"
  },
  {
    name: "Citrus & Gourmand",
    count: 1,
    description: "Sparkling Calabrian bergamot, Tunisian neroli, white orange blossom & vanilla.",
    accent: "#ea580c"
  }
];

export const DISCOVERY_SAMPLES = [
  { id: "s-oud", name: "Oud Impérial Absolu (2ml)", note: "Cambodian Oud & Damask Rose" },
  { id: "s-santal", name: "Santal Blanche (2ml)", note: "Australian Sandalwood & Iris" },
  { id: "s-rose", name: "Rose Nocturne (2ml)", note: "Bulgarian Rose & Patchouli" },
  { id: "s-figue", name: "Nectar de Figue (2ml)", note: "Wild Fig & White Cedar" },
  { id: "s-neroli", name: "Fleur d'Oranger Privé (2ml)", note: "Tunisian Neroli & Bergamot" },
];
