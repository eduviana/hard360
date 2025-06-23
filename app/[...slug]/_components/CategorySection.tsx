"use client"
import { FilterHeader } from "@/app/components/filter-sidebar/FilterHeader";
import { FilterSidebar } from "@/app/components/filter-sidebar/FilterSidebar";
import { ProductCard } from "@/app/components/productCard/ProductCard";
import { IoClose } from "react-icons/io5";
import { Product } from "@/app/data/types";
import { useState } from "react";
import { SortSelect } from "./filters/SortSelect";
import { ItemsToShowSelect } from "./filters/ItemsToShowSelect";

interface CategorySectionProps {
  category: string;
  subcategory?: string;
  subcategories: string[];
  filteredProducts: Product[];
}

export const CategorySection = ({
  category,
  subcategory,
  subcategories,
  filteredProducts,
}: CategorySectionProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const [sort, setSort] = useState("default");
  const [itemsToShow, setItemsToShow] = useState(20); // valor por defecto

  return (
    <section className="custom-container py-16">
      <div className="flex flex-col gap-2">
        <FilterHeader category={category} subcategory={subcategory} />

        {/* Encabezado de filtros y controles */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          {/* Izquierda: Cantidad + botón de filtro */}
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

          {/* Derecha: Selects de orden y cantidad */}
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
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 items-stretch flex-1">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 font-medium">
              No se encontraron productos.
            </div>
          )}
        </div>
      </div>
    </section>
  );
};