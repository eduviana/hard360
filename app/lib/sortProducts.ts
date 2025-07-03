import { Product } from "../data/types";

export const sortProducts = (products: Product[], sort: string): Product[] => {
  switch (sort) {
    case "priceAsc":
      return [...products].sort((a, b) => Number(a.price) - Number(b.price));
    case "priceDesc":
      return [...products].sort((a, b) => Number(b.price) - Number(a.price));
    default:
      return products;
  }
};