


// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { IoCloseSharp } from "react-icons/io5";
// import { filtersByCategory } from "@/app/data/types"; // Asegurate de importar correctamente

// interface FilterHeaderProps {
//   category: string;
//   subcategory?: string;
// }

// export function FilterHeader({ category, subcategory }: FilterHeaderProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const activeFilters =
//     filtersByCategory[category as keyof typeof filtersByCategory] ?? [];

//   const handleRemove = (key: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();

//     const params = new URLSearchParams(searchParams);
//     params.delete(key);

//     const basePath = subcategory
//       ? `/${category}/${subcategory}`
//       : `/${category}`;

//     router.replace(`${basePath}?${params.toString()}`);
//   };

//   return (
//     <div className="mb-8 inline-block text-left">
//       <h2 className="text-3xl font-semibold capitalize mb-2">
//         {(subcategory ?? category).replaceAll("-", " ")}
//       </h2>

//       {/* Filtros activos */}
//       <div className="flex flex-wrap gap-2">
//         {activeFilters.map(({ field }) => {
//           const value = searchParams.get(field as string);
//           if (!value) return null;

//           return (
//             <div
//               key={field as string}
//               className="flex items-center text-white bg-accent w-fit gap-2 text-sm font-bold rounded-md py-1.5 px-2 capitalize"
//             >
//               <span>{value.replaceAll("-", " ")}</span>
//               <button
//                 type="button"
//                 onClick={handleRemove(field as string)}
//                 aria-label={`Quitar filtro ${field}`}
//               >
//                 <IoCloseSharp className="w-5 h-5 cursor-pointer text-white hover:text-orange-400 transition-colors" />
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }



"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import { filtersByCategory } from "@/app/data/types";

interface FilterHeaderProps {
  category: string;
  subcategory?: string;
}

// export function FilterHeader({ category, subcategory }: FilterHeaderProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const activeFilters =
//     filtersByCategory[category as keyof typeof filtersByCategory] ?? [];

//   const handleRemove = (key: string) => (event: React.MouseEvent<HTMLButtonElement>) => {
//     event.preventDefault();

//     const params = new URLSearchParams(searchParams);
//     params.delete(key);

//     const basePath = subcategory
//       ? `/${category}/${subcategory}`
//       : `/${category}`;

//     router.replace(`${basePath}?${params.toString()}`);
//   };

//   return (
//     <div className="mb-8 inline-block text-left">
//       <h2 className="text-3xl font-semibold capitalize mb-2">
//         {(subcategory ?? category).replaceAll("-", " ")}
//       </h2>

//       {/* Filtros activos */}
//       <div className="flex flex-wrap gap-2">
//         {activeFilters.map(({ field, label }) => {
//           const value = searchParams.get(field as string);
//           if (!value) return null;

//           // Agrega "pulgadas" si es screenSize, si querés podés agregar más casos
//           const displayValue =
//             field === "screenSize"
//               ? `${value.replaceAll("-", " ")} pulgadas`
//               : value.replaceAll("-", " ");

//           return (
//             <div
//               key={field as string}
//               className="flex items-center text-white bg-accent w-fit gap-2 text-sm font-bold rounded-md py-1.5 px-2 capitalize"
//             >
//               <span>{`${label}: ${displayValue}`}</span>
//               <button
//                 type="button"
//                 onClick={handleRemove(field as string)}
//                 aria-label={`Quitar filtro ${label}`}
//               >
//                 <IoCloseSharp className="w-5 h-5 cursor-pointer text-white hover:text-orange-400 transition-colors" />
//               </button>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }





export function FilterHeader({ category, subcategory }: FilterHeaderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const activeFilters =
    filtersByCategory[category as keyof typeof filtersByCategory] || [];

  const handleRemove = (field: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    params.delete(field);

    const basePath = subcategory
      ? `/${category}/${subcategory}`
      : `/${category}`;

    router.push(`${basePath}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="mb-8 inline-block text-left">
      <h2 className="text-3xl font-semibold capitalize mb-2">
        {(subcategory ?? category).replaceAll("-", " ")}
      </h2>

      <div className="flex flex-wrap gap-2">
        {activeFilters.map(({ field, activeFilter }) => {
          const value = searchParams.get(field as string);
          if (!value) return null;

          const formatted = activeFilter
            ? activeFilter(value)
            : value.replaceAll("-", " ");

          return (
            <div
              key={field as string}
              className="flex items-center text-white bg-accent w-fit gap-2 text-sm font-bold rounded-md py-1.5 px-2 capitalize"
            >
              <span>{formatted}</span>
              <button
                type="button"
                onClick={handleRemove(field as string)}
                aria-label={`Quitar filtro ${field}`}
              >
                <IoCloseSharp className="w-5 h-5 cursor-pointer text-white hover:text-orange-400 transition-colors" />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}