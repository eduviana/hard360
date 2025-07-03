"use client";

import { createContext, useState } from "react";
import type { ReactNode } from "react";
import type { Product, FilterOption } from "@/app/data/types";
import { getProductsByCategoryAndSubcategory } from "@/app/lib/getProductsByCategoryAndSubcategory";

export interface CategoryContextType {
  category: string;
  subcategory?: string;
  subcategories: string[];
  filteredProducts: Product[];
  allCategoryProducts: Product[];
  filters?: FilterOption[];
  sort: string;
  setSort: (value: string) => void;
  itemsToShow: number;
  setItemsToShow: (value: number) => void;
  productsFilteredByCategoryAndSubcategory: Product[];
}

export const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
);

export const CategoryProvider = ({
  children,
  category,
  subcategory,
  subcategories,
  filteredProducts,
  allCategoryProducts,
  filters,
}: {
  children: ReactNode;
  category: string;
  subcategory?: string;
  subcategories: string[];
  filteredProducts: Product[];
  allCategoryProducts: Product[];
  filters?: FilterOption[];
}) => {
  const [sort, setSort] = useState("default");
  const [itemsToShow, setItemsToShow] = useState(10);

  const productsFilteredByCategoryAndSubcategory =
    getProductsByCategoryAndSubcategory(allCategoryProducts, subcategory);

  const value: CategoryContextType = {
    category,
    subcategory,
    subcategories,
    filteredProducts,
    allCategoryProducts,
    filters,
    sort,
    setSort,
    itemsToShow,
    setItemsToShow,
    productsFilteredByCategoryAndSubcategory,
  };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
};
