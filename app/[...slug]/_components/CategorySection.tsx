"use client";

import { useState } from "react";
import { useCategoryContext } from "../_hooks/useCategoryContext";
import { ItemsToShowSelect } from "./filters/ItemsToShowSelect";
import { sortProducts } from "@/app/lib/sortProducts";
import { SortSelect } from "./filters/SortSelect";
import { FilterHeader } from "@/app/components/filter-sidebar/FilterHeader";
import { FilterSidebar } from "@/app/components/filter-sidebar/FilterSidebar";
import { ProductCard } from "@/app/components/productCard/ProductCard";
import { IoClose } from "react-icons/io5";

export const CategorySection = () => {
  const { filteredProducts, sort, itemsToShow } = useCategoryContext();

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const sortedProducts = sortProducts(filteredProducts, sort);
  const displayedProducts = sortedProducts.slice(0, itemsToShow);

  return (
    <section className="custom-container py-16 animate-fadeInSlow">
      <div className="flex flex-col gap-2">
        <FilterHeader />

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

          <div className="w-full md:w-auto justify-end flex gap-16 ">
            <SortSelect />
            <ItemsToShowSelect />
          </div>
        </div>
      </div>

      {/* Panel lateral móvil */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="absolute inset-y-0 right-0 w-full bg-white p-6 overflow-y-auto animate-slide-in-left">
            <div className="flex justify-end">
              <button onClick={() => setIsFilterOpen(false)}>
                <IoClose className="w-8 h-8 text-white bg-red-600 rounded-full p-1" />
              </button>
            </div>

            <FilterSidebar />
          </div>
        </div>
      )}

      {/* Layout principal */}
      <div className="flex flex-col md:flex-row gap-12">
        <div className="hidden md:block w-[30%] max-w-[260px]">
          <FilterSidebar />
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4 gap-6">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
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
      </div>
    </section>
  );
};
