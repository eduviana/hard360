import { FilterOption, SubcategoryFilter, Category, filtersByCategory } from "../data/types";

function isSubcategoryFilter(obj: unknown): obj is SubcategoryFilter {
  return (
    typeof obj === "object" &&
    obj !== null &&
    ("hidden" in obj || "values" in obj || "activeFilter" in obj)
  );
}

export function getCategoryFilters(
  category: string,
  subcategory?: string
): FilterOption[] | undefined {
  const baseCategoryFilters = filtersByCategory[category as Category] as FilterOption[] | undefined;

  const filters = baseCategoryFilters
    ?.map((filter) => {
      const subFilterCandidate =
        subcategory && filter.subcategories?.[subcategory];

      if (!isSubcategoryFilter(subFilterCandidate)) return filter;

      const subFilter = subFilterCandidate;

      if (subFilter.hidden) return null;

      if (subFilter.values) {
        return {
          ...filter,
          values: subFilter.values,
          activeFilter: subFilter.activeFilter ?? filter.activeFilter,
        };
      }

      return filter;
    })
    .filter((f): f is FilterOption => f !== null);

  return filters;
}