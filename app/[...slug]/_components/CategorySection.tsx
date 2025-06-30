// "use client";

// import { FilterHeader } from "@/app/components/filter-sidebar/FilterHeader";
// import { FilterSidebar } from "@/app/components/filter-sidebar/FilterSidebar";
// import { ProductCard } from "@/app/components/productCard/ProductCard";
// import { IoClose } from "react-icons/io5";
// import { Product } from "@/app/data/types";
// import { useState } from "react";
// import { SortSelect } from "./filters/SortSelect";
// import { ItemsToShowSelect } from "./filters/ItemsToShowSelect";
// import type { FilterOption } from "@/app/data/types";

// interface CategorySectionProps {
//   category: string;
//   subcategory?: string;
//   subcategories: string[];
//   filteredProducts: Product[]; // productos que cumplen los filtros dinámicos
//   allCategoryProducts: Product[]; // todos los productos de la categoría
//   filters?: FilterOption[];
// }

// export const CategorySection = ({
//   category,
//   subcategory,
//   subcategories,
//   filteredProducts,
//   allCategoryProducts,
//   filters,
// }: CategorySectionProps) => {
//   const [isFilterOpen, setIsFilterOpen] = useState(false);
//   const [sort, setSort] = useState("default");
//   const [itemsToShow, setItemsToShow] = useState(20);

//   const productsFilteredByCategoryAndSubcategory = subcategory
//     ? allCategoryProducts.filter((p) => p.subcategory === subcategory)
//     : allCategoryProducts;

//   // 🔍 Productos base para los filtros: respetan subcategoría si está activa
//   const productsForFilters = subcategory
//     ? allCategoryProducts.filter((p) => p.subcategory === subcategory)
//     : allCategoryProducts;

//   return (
//     <section className="custom-container py-16">
//       <div className="flex flex-col gap-2">
//         <FilterHeader category={category} subcategory={subcategory} />

//         {/* Encabezado de filtros y controles */}
//         <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
//           <div className="flex items-center gap-4">
//             <span className="text-text-secondary text-md font-medium">
//               {filteredProducts.length} productos
//             </span>
//             <button
//               className="md:hidden text-md font-semibold bg-orange-600 px-4 py-1 rounded cursor-pointer"
//               onClick={() => setIsFilterOpen(true)}
//             >
//               <span className="text-white">Filtrar</span>
//             </button>
//           </div>

//           <div className="flex gap-16 w-full md:w-auto">
//             <SortSelect value={sort} onChange={setSort} />
//             <ItemsToShowSelect value={itemsToShow} onChange={setItemsToShow} />
//           </div>
//         </div>
//       </div>

//       {/* Panel lateral móvil */}
//       {isFilterOpen && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
//           <div className="absolute inset-y-0 right-0 w-full bg-white p-6 overflow-y-auto animate-slide-in-left">
//             <div className="flex justify-end">
//               <button onClick={() => setIsFilterOpen(false)}>
//                 <IoClose className="w-6 h-6 text-gray-700" />
//               </button>
//             </div>
//             <FilterSidebar
//               category={category}
//               subcategories={subcategories}
//               subcategory={subcategory}
//               filters={filters}
//               products={filteredProducts} // para mostrar grid y filtros activos
//               allProductsFromCategory={allCategoryProducts} // para subcategorías
//               productsFilteredByCategoryAndSubcategory={
//                 productsFilteredByCategoryAndSubcategory
//               } // para conteos filtros dinámicos
//             />
//           </div>
//         </div>
//       )}

//       {/* Layout principal */}
//       <div className="flex flex-col md:flex-row gap-12">
//         <div className="hidden md:block w-1/5">
//           <FilterSidebar
//             category={category}
//             subcategories={subcategories}
//             subcategory={subcategory}
//             filters={filters}
//             products={filteredProducts} // para mostrar grid y filtros activos
//             allProductsFromCategory={allCategoryProducts} // para subcategorías
//             productsFilteredByCategoryAndSubcategory={
//               productsFilteredByCategoryAndSubcategory
//             } // para conteos filtros dinámicos
//           />
//         </div>

//         {/* <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 items-stretch flex-1">
//           {filteredProducts.length > 0 ? (
//             filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))
//           ) : (
//             <div
//               className="col-span-full flex justify-center items-center text-gray-500 font-medium"
//               style={{ minHeight: "300px" }}
//             >
//               No se encontraron productos.
//             </div>
//           )}
//         </div> */}
//         <div className="flex-1">
//           <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProducts.length > 0 ? (
//               filteredProducts.map((product) => (
//                 <ProductCard key={product.id} product={product} />
//               ))
//             ) : (
//               <div
//                 className="col-span-full flex justify-center items-center text-gray-500 font-medium"
//                 style={{ minHeight: "300px" }}
//               >
//                 No se encontraron productos.
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

"use client";

import { FilterHeader } from "@/app/components/filter-sidebar/FilterHeader";
import { FilterSidebar } from "@/app/components/filter-sidebar/FilterSidebar";
import { ProductCard } from "@/app/components/productCard/ProductCard";
import { IoClose } from "react-icons/io5";
import { Product } from "@/app/data/types";
import { useState } from "react";
import { SortSelect } from "./filters/SortSelect";
import { ItemsToShowSelect } from "./filters/ItemsToShowSelect";
import type { FilterOption } from "@/app/data/types";

interface CategorySectionProps {
  category: string;
  subcategory?: string;
  subcategories: string[];
  filteredProducts: Product[]; // productos que cumplen los filtros dinámicos
  allCategoryProducts: Product[]; // todos los productos de la categoría
  filters?: FilterOption[];
}

export const CategorySection = ({
  category,
  subcategory,
  subcategories,
  filteredProducts,
  allCategoryProducts,
  filters,
}: CategorySectionProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sort, setSort] = useState("default");
  const [itemsToShow, setItemsToShow] = useState(10);

  const productsFilteredByCategoryAndSubcategory = subcategory
    ? allCategoryProducts.filter((p) => p.subcategory === subcategory)
    : allCategoryProducts;

  // Función para ordenar productos según estado `sort`
  const sortProducts = (products: Product[]) => {
    switch (sort) {
      case "priceAsc":
        return [...products].sort((a, b) => Number(a.price) - Number(b.price));
      case "priceDesc":
        return [...products].sort((a, b) => Number(b.price) - Number(a.price));
      default:
        return products;
    }
  };
  // Productos ordenados y limitados a itemsToShow
  const sortedProducts = sortProducts(filteredProducts);
  const displayedProducts = sortedProducts.slice(0, itemsToShow);

  return (
    <section className="custom-container py-16">
      <div className="flex flex-col gap-2">
        <FilterHeader category={category} subcategory={subcategory} />

        {/* Encabezado de filtros y controles */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-8">
          <div className="flex items-center gap-4">
            <span className="text-text-secondary text-md font-medium">
              {filteredProducts.length} productos
            </span>
            <button
              className="md:hidden text-md font-semibold bg-orange-600 px-4 py-1 rounded cursor-pointer"
              onClick={() => setIsFilterOpen(true)}
            >
              <span className="text-white">Filtrar</span>
            </button>
          </div>

          <div className="w-full md:w-auto justify-end flex gap-16 ">
            <SortSelect value={sort} onChange={setSort} />
            <ItemsToShowSelect value={itemsToShow} onChange={setItemsToShow} />
          </div>
        </div>
      </div>

      {/* Panel lateral móvil */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="absolute inset-y-0 right-0 w-full bg-white p-6 overflow-y-auto animate-slide-in-left">
            <div className="flex justify-end">
              <button onClick={() => setIsFilterOpen(false)}>
                <IoClose className="w-8 h-8 text-white bg-red-600 rounded-full p-1" />
              </button>
            </div>
            <FilterSidebar
              category={category}
              subcategories={subcategories}
              subcategory={subcategory}
              filters={filters}
              products={filteredProducts} // para mostrar grid y filtros activos
              allProductsFromCategory={allCategoryProducts} // para subcategorías
              productsFilteredByCategoryAndSubcategory={
                productsFilteredByCategoryAndSubcategory
              } // para conteos filtros dinámicos
            />
          </div>
        </div>
      )}
      

      {/* Layout principal */}
      <div className="flex flex-col md:flex-row gap-12">
        <div className="hidden md:block w-[30%] max-w-[260px]">
          <FilterSidebar
            category={category}
            subcategories={subcategories}
            subcategory={subcategory}
            filters={filters}
            products={filteredProducts} // para mostrar grid y filtros activos
            allProductsFromCategory={allCategoryProducts} // para subcategorías
            productsFilteredByCategoryAndSubcategory={
              productsFilteredByCategoryAndSubcategory
            } // para conteos filtros dinámicos
          />
        </div>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProducts.length > 0 ? (
              displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div
                className="col-span-full flex justify-center items-center text-gray-500 font-medium"
                style={{ minHeight: "300px" }}
              >
                No se encontraron productos.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
