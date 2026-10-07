import { notFound } from "next/navigation";
import { PERFUMES } from "@/data/perfumes";
import ProductDetailClient from "@/components/ProductDetailClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return PERFUMES.map((perfume) => ({
    id: perfume.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const perfume = PERFUMES.find((p) => p.id === id);

  if (!perfume) {
    return {
      title: "Fragrance Not Found | ÉLYSIAN NOIR Paris",
      description: "Haute Parfumerie Flacon not found.",
    };
  }

  return {
    title: `${perfume.name} — ${perfume.concentration} | ÉLYSIAN NOIR Paris`,
    description: `${perfume.tagline} Formulated with 30%+ pure extrait concentration in Grasse, France.`,
    openGraph: {
      title: `${perfume.name} | ÉLYSIAN NOIR`,
      description: perfume.tagline,
      images: [{ url: perfume.image }],
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const perfume = PERFUMES.find((p) => p.id === id);

  if (!perfume) {
    notFound();
  }

  return <ProductDetailClient perfume={perfume} />;
}
