import { products } from "../data/data";
import { Product } from "../data/types";

export const getProductsByCategory = (
  category: string,
  subcategory?: string
): Product[] => {
  return products.filter((product) => {
    const matchCategory = product.category === category;
    const matchSubcategory = subcategory ? product.subcategory === subcategory : true;
    return matchCategory && matchSubcategory;
  });
};