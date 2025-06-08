"use client";
import { filtersByCategory, Product } from "@/app/data/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

interface FilterSidebarProps {
  category: string;
  subcategories: string[];
  subcategory?: string;
}

export function FilterSidebar({
  category,
  subcategories,
  subcategory,
}: FilterSidebarProps) {
  const searchParams = useSearchParams();
  const basePath = subcategory ? `/${category}/${subcategory}` : `/${category}`;


  const getLinkWithParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(key, value);
    return `${basePath}?${params.toString()}`;
  };

  return (
    <aside className="md:w-1/4 bg-white rounded-xl shadow p-4 space-y-6">
      {/* Subcategorías */}
      <div>
        <h2 className="text-xl font-bold mb-2">Subcategorías</h2>
        <ul className="space-y-2">
          {subcategories.map((sub) => {
            const isActive = sub === subcategory;
            return (
              <li key={sub}>
                <Link
                  href={`/${category}/${sub}`}
                  scroll={false}
                  className={`hover:underline capitalize ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-text-tertiary font-medium"
                  }`}
                >
                  {sub.replaceAll("-", " ")}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Filtros dinámicos por categoría */}
      {(filtersByCategory as any)[category]?.map(
        ({
          label,
          field,
          values,
        }: {
          label: string;
          field: keyof Product;
          values: readonly string[];
        }) => {
          const current = searchParams.get(field as string);

          return (
            <div key={String(field)}>
              <h2 className="text-xl font-bold mb-2">{label}</h2>
              <ul className="space-y-2">
                {values.map((val) => (
                  <li key={val} className="capitalize">
                    {/* <Link
                      href={getLinkWithParam(field as string, val)}
                      className={`hover:underline ${
                        current === val
                          ? "text-accent font-semibold"
                          : "text-text-tertiary font-medium"
                      }`}
                    >
                      {val}
                    </Link> */}
                    <Link
                      href={getLinkWithParam(field as string, val)}
                      scroll={false}
                      className={`hover:underline ${
                        current === val
                          ? "text-accent font-semibold"
                          : "text-text-tertiary font-medium"
                      }`}
                    >
                      {val}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        }
      )}
    </aside>
  );
}
