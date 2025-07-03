import { Product, FilterOption } from "../data/types";

export function applyFiltersToProducts({
  products,
  filters,
  searchParams,
}: {
  products: Product[];
  filters?: FilterOption[];
  searchParams?: Record<string, string>;
}): Product[] {
  if (!filters || !searchParams) return products;

  return filters.reduce((filtered, filter) => {
    const value = searchParams[filter.field as string];
    if (!value) return filtered;

    return filtered.filter((p) => p[filter.field] === value);
  }, products);
}