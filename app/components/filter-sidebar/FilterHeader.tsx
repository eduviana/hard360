// "use client";

// import { useRouter, useSearchParams } from "next/navigation";
// import { IoCloseSharp } from "react-icons/io5";
// import { filtersByCategory } from "@/app/data/types";

// interface FilterHeaderProps {
//   category: string;
//   subcategory?: string;
// }

// export function FilterHeader({ category, subcategory }: FilterHeaderProps) {
//   const router = useRouter();
//   const searchParams = useSearchParams();

//   const activeFilters =
//     filtersByCategory[category as keyof typeof filtersByCategory] || [];

//   const handleRemove = (field: string) => (e: React.MouseEvent) => {
//     e.preventDefault();
//     const params = new URLSearchParams(searchParams);
//     params.delete(field);

//     const basePath = subcategory
//       ? `/${category}/${subcategory}`
//       : `/${category}`;

//     router.push(`${basePath}?${params.toString()}`, { scroll: false });
//   };

//   return (
//     <div className="mb-8 inline-block text-left">
//       {
//         <h2 className="text-3xl font-semibold capitalize mb-2">
//           {(subcategory ?? category).replaceAll("-", " ")}
//         </h2>
//       }

//       <div className="flex flex-wrap gap-2">
//         {activeFilters.map(({ field, activeFilter }) => {
//           const value = searchParams.get(field as string);
//           if (!value) return null;

//           const formatted = activeFilter
//             ? activeFilter(value)
//             : value.replaceAll("-", " ");

//           return (
//             <div
//               key={field as string}
//               className="flex items-center text-white bg-accent w-fit gap-2 text-sm font-bold rounded-md py-1.5 px-2 capitalize"
//             >
//               <span>{formatted}</span>
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
import Link from "next/link";
import { filtersByCategory } from "@/app/data/types";
import { IoCloseSharp } from "react-icons/io5";



interface FilterHeaderProps {
  category: string;
  subcategory?: string;
}

export function FilterHeader({ category, subcategory }: FilterHeaderProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // filtros activos (los que tienen valores en URL)
  const activeFilters =
    filtersByCategory[category as keyof typeof filtersByCategory] || [];

  // handler para quitar filtro por campo
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
    <div className="inline-block text-left">
      {/* Breadcrumb título */}
      <h2 className=" text-xl lg:text-3xl font-semibold capitalize mb-2 flex gap-2">
        <Link
          href={`/${category}`}
          className="hover:underline text-primary font-semibold"
        >
          {category.replaceAll("-", " ")}
        </Link>
        {subcategory && (
          <>
            <span>/</span>
            <Link
              href={`/${category}/${subcategory}`}
              className="hover:underline text-primary font-semibold"
            >
              {subcategory.replaceAll("-", " ")}
            </Link>
          </>
        )}
      </h2>

      {/* Filtros activos (excluye subcategoría) */}
      <div className="flex flex-wrap gap-2">
        {activeFilters.map(({ field, activeFilter }) => {
          if (field === "subcategory") return null; // no mostrar subcat como filtro

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