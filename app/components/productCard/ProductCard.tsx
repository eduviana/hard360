import Link from "next/link";
import { Product } from "@/app/data/types";
import Image from "next/image";
import { formatCurrency } from "@/app/helpers/formatCurrency";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const href = `/${product.category}/${product.subcategory}/${product.slug}`;

  return (
    <Link href={href} className="block">
  <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col items-center transition hover:shadow-md">
    <div className="relative w-full h-44 mb-4">
      <Image
        src={product.thumbnail!}
        alt={product.title}
        fill
        className="object-contain z-10"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      {/* Gradiente encima de la imagen */}
      <div className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-b from-white/0 to-gray-300/20" />
    </div>

    <div className="flex flex-col px-3">
      <h3 className="text-sm text-text-tertiary font-light text-center mb-2 line-clamp-2 h-10">
        {product.title}
      </h3>

      <span className="text-text-primary text-[22px] font-semibold self-center">
        {formatCurrency(product.price)}
      </span>
    </div>
  </div>
</Link>
  );
};
