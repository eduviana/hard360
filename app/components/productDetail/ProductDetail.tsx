"use client";

import { Product } from "@/app/data/types";
import Image from "next/image";


interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <section className="custom-container py-16">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Imagen del producto */}
        <div className="md:w-1/2">
          <Image
            src={product.image}
            alt={product.title}
            width={600}
            height={600}
            className="rounded-lg object-contain w-full h-auto"
          />
        </div>

        {/* Detalles */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-semibold text-white">{product.title}</h1>
          <p className="text-white/80">{product.title}</p>
          <p className="text-2xl font-bold text-orange-600">${product.price}</p>

          {/* Agregar al carrito u otras acciones */}
          <button className="mt-4 bg-orange-600 hover:bg-orange-600/80 text-white px-6 py-2 rounded-xl">
            Agregar al carrito
          </button>
        </div>
      </div>
    </section>
  );
}