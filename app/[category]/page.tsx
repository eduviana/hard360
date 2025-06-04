import { notFound } from "next/navigation";
import { getProductsByCategory } from "../lib/getProductsByCategory";
import CategoryLayout from "../components/layouts/CategoryLayout";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;

  const products = await getProductsByCategory(category);

  if (!products || products.length === 0) return notFound();

  return <CategoryLayout title={category} products={products} />;
}
