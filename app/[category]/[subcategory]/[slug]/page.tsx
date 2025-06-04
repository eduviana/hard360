import { getProductBySlug } from "@/app/lib/getProductBySlug";
import { notFound } from "next/navigation";

interface ProductDetailPageProps {
  params: Promise<{
    category: string;
    subcategory: string;
    slug: string;
  }>;
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { category, subcategory, slug } = await params;

  const product = await getProductBySlug(category, subcategory, slug);

  if (!product) return notFound();

  return (
    <div className="custom-container py-12">
      <div className="flex flex-col md:flex-row gap-6">
        <img
          src={product.image}
          alt={product.title}
          className="w-full md:w-1/2 h-80 object-contain"
        />
        <div>
          <h1 className="text-2xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-orange-600 mb-6">${product.price}</p>
          <p className="text-gray-700">{product.title}</p>
        </div>
      </div>
    </div>
  );
}
