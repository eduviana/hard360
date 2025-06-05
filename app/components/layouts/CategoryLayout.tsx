"use client";

import { FC } from "react";
import { Product } from "@/app/data/types";
import { ProductCard } from "../productCard/ProductCard";

interface Filter {
  name: string;
  options: string[];
}

interface CategoryLayoutProps {
  title: string;
  products: Product[];
  category: string;
  subcategory?: string;
  filters?: Filter[];
}

const CategoryLayout: FC<CategoryLayoutProps> = ({
  title,
  products,
  category,
  subcategory,
  filters,
}) => {
  return (
    <section className="custom-container py-16">
      {/* Título */}
      <div className="mb-10">
        <h1 className="text-3xl font-semibold capitalize">{title}</h1>
      </div>

      {/* Layout con Filtros y Productos */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Panel de Filtros */}
        <aside className="md:w-1/4 bg-white rounded-xl shadow-sm overflow-hidden">
          <div className="bg-zinc-800 p-4 rounded-xl text-white">
            <p className="text-sm mb-2 font-semibold">Filtros</p>
            {filters && filters.length > 0 ? (
              <ul className="space-y-4 text-sm">
                {filters.map((filter) => (
                  <li key={filter.name}>
                    <p className="font-medium mb-1">{filter.name}</p>
                    <ul className="pl-3 list-disc">
                      {filter.options.map((option) => (
                        <li key={option}>{option}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm italic">No hay filtros disponibles</p>
            )}
          </div>
        </aside>

        {/* Grid de Productos */}
        <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryLayout;