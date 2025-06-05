import { products } from "../data/data";
import { Product, Category, Subcategory } from "../data/types";

export const getProductBySlug = (
  category: Category,
  subcategory: Subcategory,
  slug: string
): Product | undefined => {
  return products.find(
    (product) =>
      product.category === category &&
      product.subcategory === subcategory &&
      product.slug === slug
  );
};