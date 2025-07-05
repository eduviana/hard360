import { notFound } from "next/navigation";
import { products } from "../../data/data";
import ProductDetail from "../../components/productDetail/ProductDetail";

// Resuelve y devuelve la vista de detalle de un producto específico según los parámetros de la URL.

// @param slug - Array de strings de la URL (ej: ["equipos", "notebooks", "notebook-dell-inspiron-15"])

export function resolveProductView(slug: string[]) {
  // 🟢 Extraer la categoría, subcategoría y slug del producto desde la URL
  const [category, subcategory, productSlug] = slug;

  // 🟢 Buscar el producto en el listado global que coincida con los 3 valores
  const product = products.find(
    (p) =>
      p.slug === productSlug &&
      p.category === category &&
      p.subcategory === subcategory
  );

  // 🚨 Si no se encuentra el producto, mostrar página 404
  if (!product) return notFound();

  // 🟢 Devolver la vista de detalle del producto encontrado
  return (
    <div className="custom-container py-8">
      <ProductDetail product={product} />
    </div>
  );
}
