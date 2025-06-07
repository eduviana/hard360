import { products } from "../data/data";
import { Product } from "../data/types";



export async function getProductBySlug(slug: string): Promise<Product | undefined> {
  return products.find(product => product.slug === slug);
}