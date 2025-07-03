import { Product } from "../data/types";

export function getUniqueSubcategories(products: Product[]): string[] {
  const subcategorySet = new Set(
    products
      .map((p) => p.subcategory)
      .filter((sub): sub is NonNullable<typeof sub> => Boolean(sub))
  );

  return Array.from(subcategorySet);
}