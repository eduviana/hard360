"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { filtersByCategory } from "@/app/data/types";
import { IoCloseSharp } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa6";
import { useCategoryContext } from "@/app/[...slug]/_hooks/useCategoryContext";

export function FilterHeader() {
  const { category, subcategory } = useCategoryContext();

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
    <div className="inline-block text-left">
      {/* Breadcrumb título */}
      <h2 className="text-sm sm:text-xl md:text-2xl font-semibold capitalize mb-4 flex items-center gap-2">
        <Link
          href={`/${category}`}
          className="hover:underline text-primary font-semibold"
        >
          {category.replaceAll("-", " ")}
        </Link>
        {subcategory && (
          <>
            <FaChevronRight className="w-5 h-5 text-shadow-accent-primary" />
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
          if (field === "subcategory") return null;

          const value = searchParams.get(field as string);
          if (!value) return null;

          const formatted = activeFilter
            ? activeFilter(value)
            : value.replaceAll("-", " ");

          return (
            <div
              key={field as string}
              className="flex items-center text-white bg-accent-primary w-fit gap-2 text-sm font-bold rounded-md py-1.5 px-2 capitalize"
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
