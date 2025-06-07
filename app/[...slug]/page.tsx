import { notFound } from "next/navigation";
import { Metadata } from "next";
import { products } from "../data/data";
import { ProductCard } from "../components/productCard/ProductCard";
import ProductDetail from "../components/productDetail/ProductDetail";
import { FilterSidebar } from "../components/filter-sidebar/FilterSidebar";

interface PageProps {
  params: { slug: string[] };
  searchParams?: { brand?: string };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = params;

  if (slug.length === 1) return { title: `${slug[0]}` };
  if (slug.length === 2) return { title: `${slug[1]}` };
  if (slug.length === 3) return { title: `Detalle de ${slug[2]}` };

  return { title: "No encontrado" };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = params;
  const brandFilter = searchParams?.brand;

  if (slug.length < 1 || slug.length > 3) return notFound();

  // 🟩 Vista de Categoría: /equipos
  if (slug.length === 1) {
    const [category] = slug;

    const categoryProducts = products.filter((p) => p.category === category);
    if (categoryProducts.length === 0) return notFound();

    // Aplico filtro de marca si existe
    const filteredProducts = brandFilter
      ? categoryProducts.filter((p) => p.brand === brandFilter)
      : categoryProducts;

    const subcategories = [...new Set(categoryProducts.map((p) => p.subcategory))];

    const brands = [
      ...new Set(
        categoryProducts
          .map((p) => p.brand)
          .filter((b): b is Exclude<typeof b, undefined> => b !== undefined)
      ),
    ];

    return (
      <section className="custom-container py-16">
        <h1 className="text-3xl font-semibold capitalize mb-8">
          {category.replaceAll("-", " ")}
          {brandFilter && (
            <span className="ml-4 text-sm text-gray-600">
              (Marca: {brandFilter.replaceAll("-", " ")})
            </span>
          )}
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtros */}
          <FilterSidebar
            category={category}
            subcategories={subcategories}
            brands={brands as string[]}
          />

          {/* Productos */}
          <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 🟦 Vista de Subcategoría: /equipos/notebooks
  if (slug.length === 2) {
    const [category, subcategory] = slug;

    const categoryProducts = products.filter((p) => p.category === category);
    if (categoryProducts.length === 0) return notFound();

    let filtered = categoryProducts.filter((p) => p.subcategory === subcategory);
    if (filtered.length === 0) return notFound();

    // Aplico filtro de marca si existe
    if (brandFilter) {
      filtered = filtered.filter((p) => p.brand === brandFilter);
    }

    const subcategories = [...new Set(categoryProducts.map((p) => p.subcategory))];

    const brands = [
      ...new Set(
        categoryProducts
          .map((p) => p.brand)
          .filter((b): b is Exclude<typeof b, undefined> => b !== undefined)
      ),
    ];

    return (
      <section className="custom-container py-16">
        <h1 className="text-3xl font-semibold capitalize mb-8">
          {subcategory.replaceAll("-", " ")}
          {brandFilter && (
            <span className="ml-4 text-sm text-gray-600">
              (Marca: {brandFilter.replaceAll("-", " ")})
            </span>
          )}
        </h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Filtros */}
          <FilterSidebar
            category={category}
            subcategories={subcategories}
            brands={brands as string[]}
          />

          {/* Productos */}
          <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  // 🟨 Vista de Producto: /equipos/notebooks/producto-xyz
  if (slug.length === 3) {
    const [category, subcategory, productSlug] = slug;
    const product = products.find(
      (p) =>
        p.slug === productSlug &&
        p.category === category &&
        p.subcategory === subcategory
    );

    if (!product) return notFound();

    return (
      <div className="container py-8">
        <ProductDetail product={product} />
      </div>
    );
  }

  return notFound();
}