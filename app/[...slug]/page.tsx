import { notFound } from "next/navigation";
import { Metadata } from "next";
import { products } from "../data/data";
import { ProductCard } from "../components/productCard/ProductCard";
import ProductDetail from "../components/productDetail/ProductDetail";
import { FilterSidebar } from "../components/filter-sidebar/FilterSidebar";
import { FilterHeader } from "../components/filter-sidebar/FilterHeader";
import { Category, filtersByCategory } from "../data/types";

interface PageProps {
  params: { slug: string[] };
  searchParams?: Record<string, string>;
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

  if (slug.length < 1 || slug.length > 3) return notFound();

  const [category] = slug;
  let subcategory: string | undefined = undefined;

  if (slug.length === 2) {
    subcategory = slug[1];
  }

  // Vista de categoría o subcategoría
  if (slug.length === 1 || slug.length === 2) {
    const categoryProducts = products.filter((p) => p.category === category);

    if (categoryProducts.length === 0) return notFound();

    let filteredProducts = categoryProducts;

    // Filtro por subcategoría
    if (subcategory) {
      filteredProducts = filteredProducts.filter(
        (p) => p.subcategory === subcategory
      );
    }

    // Filtros dinámicos
    const categoryFilters = filtersByCategory[category as Category];
    if (categoryFilters && searchParams) {
      for (const filter of categoryFilters) {
        const value = searchParams[filter.field as string];
        if (value) {
          filteredProducts = filteredProducts.filter(
            (p) => p[filter.field] === value
          );
        }
      }
    }

    // Subcategorías únicas
    const subcategories = [
      ...new Set(categoryProducts.map((p) => p.subcategory)),
    ];

    return (
      <section className="custom-container py-16">
        <FilterHeader category={category} subcategory={subcategory} />

        <div className="flex flex-col md:flex-row gap-8">
          <FilterSidebar
            category={category}
            subcategories={subcategories}
            subcategory={subcategory}
          />

          {/* Productos */}
          <div className="md:w-3/4 grid grid-cols-2 sm:grid-cols-3 gap-6">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-500 font-medium">
                No se encontraron productos.
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }

  // Vista de producto individual
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
      <div className="custom-container py-8">
        <ProductDetail product={product} />
      </div>
    );
  }

  return notFound();
}
