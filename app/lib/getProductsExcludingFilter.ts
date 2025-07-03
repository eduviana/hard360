import { Product, FilterOption } from "@/app/data/types";

export const getProductsExcludingFilter = (
  products: Product[],
  filters: FilterOption[] | undefined,
  searchParams: URLSearchParams,
  excludeField: string
) => {
  const activeFilters: Record<string, string> = {};
  filters?.forEach(({ field }) => {
    const val = searchParams.get(field as string);
    if (val && field !== excludeField) {
      activeFilters[field as string] = val;
    }
  });

  return products.filter((p) => {
    for (const [field, val] of Object.entries(activeFilters)) {
      if (p[field as keyof Product] !== val) return false;
    }
    return true;
  });
};