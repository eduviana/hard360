import { products } from "../data/data";
import { Product } from "../data/types";

export const getProductBySlug = (
  category: string,
  subcategory: string,
  slug: string
): Product | undefined => {
  return products.find(
    (product) =>
      product.category === category &&
      product.subcategory === subcategory &&
      product.slug === slug
  );
};