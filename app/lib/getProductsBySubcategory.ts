import { products } from "../data/data";
import { Product } from "../data/types";


export async function getProductsBySubcategory(subcategory: string): Promise<Product[]> {
  
  return products.filter((product) => product.subcategory === subcategory);
}