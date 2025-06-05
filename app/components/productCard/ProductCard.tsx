import Link from "next/link";
import { Product } from "@/app/data/types";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const href = `/${product.category}/${product.subcategory}/${product.slug}`;

  return (
    <Link href={href} className="block">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col items-center p-4 transition hover:shadow-md">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-contain mb-4"
        />
        <h3 className="text-sm text-text-tertiary font-light text-center mb-2">
          {product.title}
        </h3>
        <span className="text-text-primary text-[22px] font-semibold">
          ${product.price}
        </span>
      </div>
    </Link>
  );
};