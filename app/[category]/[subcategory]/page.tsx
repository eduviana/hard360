import CategoryLayout from "@/app/components/layouts/CategoryLayout";
import { getProductsByCategory } from "@/app/lib/getProductsByCategory";
import { notFound } from "next/navigation";

interface SubcategoryPageProps {
  params: Promise<{
    category: string;
    subcategory: string;
  }>;
}

export default async function SubcategoryPage({
  params,
}: SubcategoryPageProps) {
  const { category, subcategory } = await params;

  const products = await getProductsByCategory(category, subcategory);

  if (!products || products.length === 0) return notFound();

  return (
    <CategoryLayout
      title={`${category} / ${subcategory}`}
      products={products}
    />
  );
}
