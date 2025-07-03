import { notFound } from "next/navigation";
import { getProductsFrom } from "../../lib/getProductsFrom";
import { getCategoryFilters } from "../../lib/getCategoryFilters";
import { applyFiltersToProducts } from "../../lib/applyFiltersToProducts";
import { getUniqueSubcategories } from "../../lib/getUniqueSubcategories";
import { CategorySection } from "../_components/CategorySection";
import type { FilterOption } from "../../data/types";
import { CategoryProvider } from "../_context/CategoryContext";

// Resuelve y devuelve la vista de categoría o subcategoría según los parámetros de la URL y los filtros activos.

// @param slug - Array de strings de la URL (ej: ["equipos", "notebooks"])
// @param resolvedSearchParams - Parámetros de búsqueda (filtros dinámicos de la URL)

export async function resolveCategoryView(
  slug: string[],
  resolvedSearchParams?: Record<string, string>
) {
  // 🟢 Extraer la categoría principal
  const [category] = slug;

  // 🟢 Extraer la subcategoría (si existe)
  const subcategory = slug.length === 2 ? slug[1] : undefined;

  // 🟢 Obtener todos los productos de la categoría (sin importar filtros)
  const categoryProducts = getProductsFrom(category);

  // 🚨 Si no hay productos en la categoría, mostrar página 404
  if (categoryProducts.length === 0) return notFound();

  // 🟢 Obtener los productos filtrados solo por categoría + subcategoría (sin filtros dinámicos aún)
  let filteredProducts = getProductsFrom(category, subcategory);

  // 🟢 Obtener los filtros dinámicos configurados para esta categoría y subcategoría
  const categoryFilters = getCategoryFilters(category, subcategory);

  // 🟢 Aplicar los filtros dinámicos activos (ej: marca, procesador, memoria ram etc.) sobre los productos filtrados
  filteredProducts = applyFiltersToProducts({
    products: filteredProducts,
    filters: categoryFilters,
    searchParams: resolvedSearchParams,
  });

  // 🟢 Limpiar los filtros para enviarlos al cliente (removiendo funciones como `activeFilter`)
  // const filtersToPass: FilterOption[] | undefined = categoryFilters?.map(
  //   ({ activeFilter, ...rest }) => rest
  // );
  const filtersToPass: FilterOption[] | undefined = categoryFilters?.map(
    (filter) => ({
      label: filter.label,
      field: filter.field,
      values: filter.values,
      subcategories: filter.subcategories,
    })
  );
  // 🟢 Obtener la lista única de subcategorías dentro de la categoría actual
  const subcategories = getUniqueSubcategories(categoryProducts);

  // 🟢 Devolver el componente de la sección de categoría listo para renderizarse
  return (
    <CategoryProvider
      category={category}
      subcategory={subcategory}
      subcategories={subcategories}
      filteredProducts={filteredProducts}
      allCategoryProducts={categoryProducts}
      filters={filtersToPass}
    >
      <CategorySection />
    </CategoryProvider>
  );
}
