"use client";

import { Product } from "@/app/data/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import type { FilterOption } from "@/app/data/types";

interface FilterSidebarProps {
  category: string;
  subcategories: string[];
  subcategory?: string;
  filters?: FilterOption[];
  products: Product[]; // productos filtrados actuales (para mostrar en grid)
  allProductsFromCategory: Product[]; // todos productos categoría (para conteo subcategorías)
  productsFilteredByCategoryAndSubcategory: Product[]; // para conteo filtros dinámicos (antes de aplicar filtros dinámicos)
}

export function FilterSidebar({
  category,
  subcategories,
  subcategory,
  filters,
  allProductsFromCategory,
  productsFilteredByCategoryAndSubcategory,
}: FilterSidebarProps) {
  const searchParams = useSearchParams();
  const basePath = subcategory ? `/${category}/${subcategory}` : `/${category}`;

  // Esta función devuelve productos filtrados por todos los filtros excepto el que se pasa como excludeField
  const getProductsExcludingFilter = (excludeField: string) => {
    // Obtenemos todos los filtros activos (field -> value) desde searchParams
    const activeFilters: Record<string, string> = {};
    filters?.forEach(({ field }) => {
      const val = searchParams.get(field as string);
      if (val && field !== excludeField) {
        activeFilters[field as string] = val;
      }
    });

    // Filtramos productosFilteredByCategoryAndSubcategory aplicando activeFilters excepto excludeField
    return productsFilteredByCategoryAndSubcategory.filter((p) => {
      for (const [field, val] of Object.entries(activeFilters)) {
        // Si el producto no cumple un filtro activo, se excluye
        if (p[field as keyof Product] !== val) return false;
      }
      return true;
    });
  };

  const getLinkWithParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    return `${basePath}?${params.toString()}`;
  };

  return (
    <aside className="shadow space-y-12">
      {/* Subcategorías con conteo global */}
      <div>
        <h2 className="p-2 rounded-t-md rounded-b-xs text-base font-bold bg-gray-800 text-white">
          Subcategorías
        </h2>
        <ul className="space-y-1">
          {subcategories.map((sub) => {
            const isActive = sub === subcategory;
            const count = allProductsFromCategory.filter(
              (p) => p.subcategory === sub
            ).length;

            return (
              <li
                key={sub}
                className="py-2 px-4 rounded-sm transition-colors bg-gray-50 hover:bg-slate-200"
              >
                <Link
                  href={`/${category}/${sub}`}
                  scroll={false}
                  className={`text-sm capitalize flex justify-between items-center ${
                    isActive
                      ? "text-green-600 font-bold"
                      : "text-neutral-800 font-medium"
                  }`}
                >
                  <span>{sub.replaceAll("-", " ")}</span>
                  <span>({count})</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Filtros dinámicos con conteo filtrado correctamente */}
      {filters?.map(({ label, field, values }) => {
        const current = searchParams.get(field as string);

        // Obtenemos productos filtrados por todos los filtros menos el actual
        const productsForCount = getProductsExcludingFilter(field as string);

        return (
          <div key={String(field)}>
            <h2 className="p-2 rounded-t-md rounded-b-xs text-base font-bold bg-gray-800 text-white">
              {label}
            </h2>
            <ul className="space-y-2">
              {values.map((val) => {
                const count = productsForCount.filter(
                  (p) => p[field] === val
                ).length;

                return (
                  <li
                    key={val}
                    className="py-2 px-4 rounded-sm transition-colors bg-gray-50 hover:bg-slate-200"
                  >
                    <Link
                      href={getLinkWithParam(field as string, val)}
                      scroll={false}
                      className={`text-sm capitalize flex justify-between items-center ${
                        current === val
                          ? "text-green-600 font-bold"
                          : "text-neutral-800 font-medium"
                      }`}
                    >
                      <span>{val.replaceAll("-", " ")}</span>
                      <span>({count})</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </aside>
  );
}
