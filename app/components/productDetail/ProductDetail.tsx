"use client";

import { Product } from "@/app/data/types";
import { specsComponentMap } from "./_components/specs/specsComponentMap";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const SpecsComponent = specsComponentMap[product.subcategory];

  return (
    <section className="">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Imagen del producto */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.title}
            width={400}
            height={400}
            className="rounded-lg object-contain w-full h-auto"
          />
        </div>

        {/* Detalles básicos */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-semibold text-primary">
            {product.title}
          </h1>

          <div className="flex items-center gap-8">
            <p className="text-2xl font-bold text-secondary">
              ${product.price}
            </p>
            <p className="text-2xl font-bold text-secondary">
              {product.discount}% off
            </p>
          </div>

          <button className="mt-4 bg-orange-600 hover:bg-orange-600/80 text-white px-6 py-2 rounded-xl">
            Agregar al carrito
          </button>
        </div>
      </div>

      {/* Especificaciones Técnicas */}
      {SpecsComponent && product.specs && (
        <SpecsComponent specs={product.specs} />
      )}
    </section>
  );
}
