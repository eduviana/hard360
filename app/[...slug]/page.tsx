// import { notFound } from "next/navigation";
// import { Metadata } from "next";
// import { products } from "../data/data";
// import ProductDetail from "../components/productDetail/ProductDetail";
// import { Category, filtersByCategory } from "../data/types";
// import { CategorySection } from "./_components/CategorySection";
// import type { FilterOption, SubcategoryFilter } from "../data/types";

// interface PageProps {
//   params: Promise<{ slug: string[] }>;
//   searchParams?: Promise<Record<string, string>>;
// }

// export async function generateMetadata({
//   params,
// }: PageProps): Promise<Metadata> {
//   const { slug } = await params;

//   if (slug.length === 1) return { title: `${slug[0]}` };
//   if (slug.length === 2) return { title: `${slug[1]}` };
//   if (slug.length === 3) return { title: `${slug[2]}` };

//   return { title: "No encontrado" };
// }

// export default async function Page({ params, searchParams }: PageProps) {
//   const { slug } = await params;
//   const resolvedSearchParams = await searchParams;

//   if (slug.length < 1 || slug.length > 3) return notFound();

//   const [category] = slug;
//   let subcategory: string | undefined = undefined;

//   if (slug.length === 2) {
//     subcategory = slug[1];
//   }

//   // Vista de categoría o subcategoría
//   if (slug.length === 1 || slug.length === 2) {
//     const categoryProducts = products.filter((p) => p.category === category);

//     if (categoryProducts.length === 0) return notFound();

//     let filteredProducts = categoryProducts;

//     // Filtro por subcategoría
//     if (subcategory) {
//       filteredProducts = filteredProducts.filter(
//         (p) => p.subcategory === subcategory
//       );
//     }

//     // Filtros dinámicos con soporte por subcategoría
//     const baseCategoryFilters = filtersByCategory[category as Category] as
//       | FilterOption[]
//       | undefined;

//     const isSubcategoryFilter = (obj: unknown): obj is SubcategoryFilter => {
//       return (
//         typeof obj === "object" &&
//         obj !== null &&
//         ("hidden" in obj || "values" in obj || "activeFilter" in obj)
//       );
//     };

//     const categoryFilters: FilterOption[] | undefined = baseCategoryFilters
//       ?.map((filter) => {
//         const subFilterCandidate =
//           subcategory && filter.subcategories?.[subcategory];

//         if (!isSubcategoryFilter(subFilterCandidate)) return filter;

//         const subFilter = subFilterCandidate;

//         if (subFilter.hidden) return null;

//         if (subFilter.values) {
//           return {
//             ...filter,
//             values: subFilter.values,
//             activeFilter: subFilter.activeFilter ?? filter.activeFilter,
//           };
//         }

//         return filter;
//       })
//       .filter((f): f is FilterOption => f !== null);

//     const filtersToPass = categoryFilters?.map((filter) => {
//       // eslint-disable-next-line @typescript-eslint/no-unused-vars
//       const { activeFilter, ...rest } = filter;
//       return rest;
//     });

//     if (categoryFilters && resolvedSearchParams) {
//       for (const filter of categoryFilters) {
//         const value = resolvedSearchParams[filter.field as string];
//         if (value) {
//           filteredProducts = filteredProducts.filter(
//             (p) => p[filter.field] === value
//           );
//         }
//       }
//     }

//     // Subcategorías únicas
//     const subcategories = [
//       ...new Set(categoryProducts.map((p) => p.subcategory)),
//     ];

//     return (
//       <CategorySection
//         category={category}
//         subcategory={subcategory}
//         subcategories={subcategories}
//         filteredProducts={filteredProducts}
//         allCategoryProducts={categoryProducts} // 🟡 nuevo
//         filters={filtersToPass} // <--- PASAMOS FILTROS SIN FUNCIONES
//       />
//     );
//   }

//   // Vista de producto individual
//   if (slug.length === 3) {
//     const [category, subcategory, productSlug] = slug;
//     const product = products.find(
//       (p) =>
//         p.slug === productSlug &&
//         p.category === category &&
//         p.subcategory === subcategory
//     );

//     if (!product) return notFound();

//     return (
//       <div className="custom-container py-8">
//         <ProductDetail product={product} />
//       </div>
//     );
//   }

//   return notFound();
// }

import { notFound } from "next/navigation";
import { Metadata } from "next";

import { resolveProductView } from "./_services/resolveProductView";
import { resolveCategoryView } from "./_services/resolveCategoryView";


interface PageProps {
  params: Promise<{ slug: string[] }>;
  searchParams?: Promise<Record<string, string>>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (slug.length === 1) return { title: `${slug[0]}` };
  if (slug.length === 2) return { title: `${slug[1]}` };
  if (slug.length === 3) return { title: `${slug[2]}` };

  return { title: "No encontrado" };
}

export default async function Page({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const resolvedSearchParams = await searchParams;

  if (slug.length < 1 || slug.length > 3) return notFound();

  if (slug.length === 1 || slug.length === 2) {
    return await resolveCategoryView(slug, resolvedSearchParams);
  }

  if (slug.length === 3) {
    return resolveProductView(slug);
  }

  return notFound();
}
