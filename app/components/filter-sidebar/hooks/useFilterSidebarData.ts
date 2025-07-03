import { useSearchParams } from "next/navigation";
import { getProductsExcludingFilter } from "@/app/lib/getProductsExcludingFilter";
import { getLinkWithParam } from "@/app/lib/getLinkWithParam";
import { FilterOption, Product } from "@/app/data/types";

export interface FilterListItem {
  label: string;
  count: number;
  isActive: boolean;
  link: string;
}

export const useFilterSidebarData = (
  category: string,
  subcategory: string | undefined,
  subcategories: string[],
  filters: FilterOption[] | undefined,
  allProductsFromCategory: Product[],
  productsFilteredByCategoryAndSubcategory: Product[]
) => {
  const searchParams = useSearchParams();
  const basePath = subcategory ? `/${category}/${subcategory}` : `/${category}`;

  const subcategoryItems: FilterListItem[] = subcategories.map((sub) => ({
    label: sub,
    count: allProductsFromCategory.filter((p) => p.subcategory === sub).length,
    isActive: sub === subcategory,
    link: `/${category}/${sub}`,
  }));

  const filtersData = (filters ?? []).map(({ label, field, values }) => {
    const current = searchParams.get(field as string);

    const productsForCount = getProductsExcludingFilter(
      productsFilteredByCategoryAndSubcategory,
      filters,
      searchParams,
      field as string
    );

    const options: FilterListItem[] = values.map((val) => ({
      label: val,
      count: productsForCount.filter((p) => p[field] === val).length,
      isActive: current === val,
      link: getLinkWithParam(basePath, searchParams, field as string, val),
    }));

    return { label, field, options };
  });

  return { subcategoryItems, filtersData };
};
