"use client";

import { FilterHeader } from "@/app/components/filter-sidebar/FilterHeader";
import { FilterSidebar } from "@/app/components/filter-sidebar/FilterSidebar";
import { ProductCard } from "@/app/components/productCard/ProductCard";
import { IoClose } from "react-icons/io5";
import { Product } from "@/app/data/types";
import { useState } from "react";
import { SortSelect } from "./filters/SortSelect";
import { ItemsToShowSelect } from "./filters/ItemsToShowSelect";
import type { FilterOption } from "@/app/data/types"; // ✅ nuevo import

interface CategorySectionProps {
  category: string;
  subcategory?: string;
  subcategories: string[];
  filteredProducts: Product[];
  filters?: FilterOption[]; // ✅ nuevo
}

export const CategorySection = ({
  category,
  subcategory,
  subcategories,
  filteredProducts,
  filters, // ✅ nuevo
}: CategorySectionProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sort, setSort] = useState("default");
  const [itemsToShow, setItemsToShow] = useState(20);

  console.log(category, "Categoria");
  console.log(subcategory, "Sucategoria");
  console.log(subcategories, "Subcategoriass");
  console.log(filteredProducts, "Productos Filtrados");
  console.log(filters, "Filtrosssss");

  return (
    <section className="custom-container py-16">
      <div className="flex flex-col gap-2">
        <FilterHeader category={category} subcategory={subcategory} />

        {/* Encabezado de filtros y controles */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-text-secondary text-md font-medium">
              {filteredProducts.length} productos
            </span>
            <button
              className="md:hidden text-md font-semibold bg-orange-600 px-4 py-1 rounded cursor-pointer"
              onClick={() => setIsFilterOpen(true)}
            >
              <span className="text-white">Filtrar</span>
            </button>
          </div>

          <div className="flex gap-16 w-full md:w-auto">
            <SortSelect value={sort} onChange={setSort} />
            <ItemsToShowSelect value={itemsToShow} onChange={setItemsToShow} />
          </div>
        </div>
      </div>

      {/* Panel lateral móvil */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="absolute inset-y-0 right-0 w-full bg-white p-6 overflow-y-auto animate-slide-in-left">
            <div className="flex justify-end">
              <button onClick={() => setIsFilterOpen(false)}>
                <IoClose className="w-6 h-6 text-gray-700" />
              </button>
            </div>
            <FilterSidebar
              category={category}
              subcategories={subcategories}
              subcategory={subcategory}
              filters={filters} // ✅ nuevo
            />
          </div>
        </div>
      )}

      {/* Layout principal */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="hidden md:block w-1/4">
          <FilterSidebar
            category={category}
            subcategories={subcategories}
            subcategory={subcategory}
            filters={filters} // ✅ nuevo
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 items-stretch flex-1">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div
              className="col-span-full flex justify-center items-center text-gray-500 font-medium"
              style={{ minHeight: "300px" }}
            >
              No se encontraron productos.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
