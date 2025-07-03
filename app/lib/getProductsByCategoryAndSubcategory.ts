import { Product } from "../data/types";


//   Filtra los productos por categoría y opcionalmente subcategoría.
  
//   @param products - Lista completa de productos de la categoría
//   @param subcategory - Subcategoría opcional
//   @returns Lista de productos que pertenecen a la subcategoría o todos si no se especifica
 
export function getProductsByCategoryAndSubcategory(
  products: Product[],
  subcategory?: string
): Product[] {
  if (!subcategory) return products;
  return products.filter((p) => p.subcategory === subcategory);
}