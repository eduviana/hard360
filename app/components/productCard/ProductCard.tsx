// import Link from "next/link";
// import { Product } from "@/app/data/types";

// interface ProductCardProps {
//   product: Product;
// }

// export const ProductCard = ({ product }: ProductCardProps) => {
//   const href = `/${product.category}/${product.subcategory}/${product.slug}`;

//   return (
//     <Link href={href} className="block">
//       <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col items-center p-4 transition hover:shadow-md">
//         <img
//           src={product.image}
//           alt={product.title}
//           className="w-full h-40 object-contain mb-4"
//         />
//         <h3 className="text-sm text-text-tertiary font-light text-center mb-2">
//           {product.title}
//         </h3>
//         <span className="text-text-primary text-[22px] font-semibold">
//           ${product.price}
//         </span>
//         <span>{product.brand}</span>
//       </div>
//     </Link>
//   );
// };

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
      <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col items-center p-4 transition hover:shadow-md">
        <div className="relative w-full h-40 mb-4">
          <Image
            src={product.thumbnail!}
            alt={product.title}
            fill
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>

        <h3 className="text-sm text-text-tertiary font-light text-center mb-2 line-clamp-2 h-10">
          {product.title}
        </h3>

        <span className="text-text-primary text-[22px] font-semibold">
          {formatCurrency(product.price)}
        </span>
      </div>
    </Link>
  );
};
