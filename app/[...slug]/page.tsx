import { notFound } from "next/navigation";
import { Metadata } from "next";

import { resolveProductView } from "./_services/resolveProductView";
import { resolveCategoryView } from "./_services/resolveCategoryView";

interface PageProps {
  params: Promise<{ slug: string[] }>;
  searchParams?: Promise<Record<string, string>>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug.length === 1) return { title: `${slug[0]}` };
  if (slug.length === 2) return { title: `${slug[1]}` };
  if (slug.length === 3) return { title: `${slug[2]}` };

  return { title: "No encontrado" };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;

  if (slug.length < 1 || slug.length > 3) return notFound();

  if (slug.length === 1 || slug.length === 2) {
    return await resolveCategoryView(slug, resolvedSearchParams);
  }

  if (slug.length === 3) {
    return resolveProductView(slug);
  }

  return notFound();
}
