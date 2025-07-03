"use client";

import { useCategoryContext } from "@/app/[...slug]/_hooks/useCategoryContext";
import { useFilterSidebarData } from "./hooks/useFilterSidebarData";
import { FilterList } from "./filterList/FilterList";

export function FilterSidebar() {
  const {
    category,
    subcategory,
    subcategories,
    filters,
    allCategoryProducts,
    productsFilteredByCategoryAndSubcategory,
  } = useCategoryContext();

  const { subcategoryItems, filtersData } = useFilterSidebarData(
    category,
    subcategory,
    subcategories,
    filters,
    allCategoryProducts,
    productsFilteredByCategoryAndSubcategory
  );

  return (
    <aside className="shadow space-y-12">
      {/* Subcategorías */}
      <div>
        <h2 className="p-2 rounded-t-md rounded-b-xs text-base font-bold bg-gray-800 text-white">
          Subcategorías
        </h2>
        <FilterList items={subcategoryItems} />
      </div>

      {/* Filtros dinámicos */}
      {filtersData.map(({ label, options, field }) => (
        <div key={field}>
          <h2 className="p-2 rounded-t-md rounded-b-xs text-base font-bold bg-gray-800 text-white">
            {label}
          </h2>
          <FilterList items={options} />
        </div>
      ))}
    </aside>
  );
}
