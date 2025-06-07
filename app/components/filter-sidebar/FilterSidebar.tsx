// import Link from "next/link";

// interface FilterSidebarProps {
//   category: string;
//   subcategories: string[];
//   brands: string[];
// }

// export function FilterSidebar({ category, subcategories, brands }: FilterSidebarProps) {
//   return (
//     <aside className="md:w-1/4 bg-white rounded-xl shadow p-4">
//       <h2 className="text-lg font-semibold mb-4">Subcategorías</h2>
//       <ul className="mb-6 space-y-2">
//         {subcategories.map((sub) => (
//           <li key={sub}>
//             <Link
//               href={`/${category}/${sub}`}
//               className="text-blue-600 hover:underline capitalize"
//             >
//               {sub.replaceAll("-", " ")}
//             </Link>
//           </li>
//         ))}
//       </ul>

//       <h2 className="text-lg font-semibold mb-2">Marcas</h2>
//       <ul className="space-y-2">
//         {brands.map((brand) => (
//           <li key={brand} className="capitalize">
//             {brand}
//           </li>
//         ))}
//       </ul>
//     </aside>
//   );
// }

"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface FilterSidebarProps {
  category: string;
  subcategories: string[];
  brands: string[];
}

export function FilterSidebar({ category, subcategories, brands }: FilterSidebarProps) {
  const searchParams = useSearchParams();
  const selectedBrand = searchParams.get("brand") || "";

  return (
    <aside className="md:w-1/4 bg-white rounded-xl shadow p-4">
      <h2 className="text-lg font-semibold mb-4">Subcategorías</h2>
      <ul className="mb-6 space-y-2">
        {subcategories.map((sub) => (
          <li key={sub}>
            <Link
              href={`/${category}/${sub}`}
              className="text-blue-600 hover:underline capitalize"
            >
              {sub.replaceAll("-", " ")}
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="text-lg font-semibold mb-2">Marcas</h2>
      <ul className="space-y-2">
        {brands.map((brand) => {
          // Construir la URL para filtrar por marca usando query param
          // Manteniendo la categoría, sin subcategoría (podrías adaptarlo si quieres)
          const href = `/${category}?brand=${brand}`;

          // Estilo para marca seleccionada
          const isSelected = brand === selectedBrand;

          return (
            <li key={brand} className="capitalize">
              <Link
                href={href}
                className={`cursor-pointer hover:underline ${
                  isSelected ? "font-bold text-blue-700" : "text-blue-600"
                }`}
              >
                {brand.replaceAll("-", " ")}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}