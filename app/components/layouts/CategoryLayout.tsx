"use client";

import { Product } from "@/app/data/types";
import { useState, useMemo } from "react";
import Link from "next/link";
import { IoChevronForward } from "react-icons/io5";
import FiltersPanel from "../filters/FiltersPanel";
import { FilterKey, filterKeyToProductProp, filtersConfig } from "../filters/filters.config"; // Ajusta la ruta si es necesario

interface CategoryLayoutProps {
  title: string; // Ejemplo: "equipos" o "equipos / pcs-de-escritorio"
  products: Product[];
}

// Tipo de categoría extraído directamente del config
type CategoryKey = keyof typeof filtersConfig;

// Función para validar si un string es un CategoryKey válido
function isCategoryKey(value: string): value is CategoryKey {
  return value in filtersConfig;
}

export default function CategoryLayout({
  title,
  products,
}: CategoryLayoutProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<{
    [filterKey: string]: string[];
  }>({});

  const handleFilterChange = (key: string, value: string) => {
    setSelectedFilters((prev) => {
      const existing = prev[key] || [];
      const updated = existing.includes(value)
        ? existing.filter((v) => v !== value)
        : [...existing, value];
      return { ...prev, [key]: updated };
    });
  };

  // Procesar breadcrumbs
  const segments = title.split(" / ");
  const breadcrumbLinks = segments.map((segment, index) => {
    const href = "/" + segments.slice(0, index + 1).join("/");
    return { label: segment, href };
  });

  // Obtener la categoría principal para filtros: último segmento del título
  const rawCategoryKey = segments[segments.length - 1];

  if (!isCategoryKey(rawCategoryKey)) {
    throw new Error(`Categoría inválida: ${rawCategoryKey}`);
  }
  const categoryKey: CategoryKey = rawCategoryKey;

  // Filtrar productos según los filtros seleccionados
  console.log(JSON.stringify(selectedFilters), "adasd")
const filteredProducts = useMemo(() => {
  return products.filter((product) => {
    return Object.entries(selectedFilters).every(([key, values]) => {
      if (values.length === 0) return true;

      const prop = filterKeyToProductProp[key as FilterKey]; // 👈 traducimos de español a inglés
      if (!prop) return false;

      const productValue = product[prop];
      if (!productValue) return false;

      if (Array.isArray(productValue)) {
        return values.some((val) => productValue.includes(val));
      }

      return values.includes(String(productValue));
    });
  });
}, [products, selectedFilters]);
console.log(filteredProducts)

  return (
    <section className="custom-container py-16">
      {/* Título + Breadcrumbs */}
      <div className="hidden md:flex items-center justify-between mb-14">
        <nav>
          <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-600">
            {breadcrumbLinks.map((crumb, index) => (
              <li key={crumb.href} className="flex items-center gap-1">
                <Link href={crumb.href}>{crumb.label}</Link>
                {index < breadcrumbLinks.length - 1 && (
                  <IoChevronForward size={14} />
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>

      {/* Layout con Filtros y Grid de Productos */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Panel de Filtros */}
        <aside className="md:w-1/4">
          <FiltersPanel
            categoryKey={categoryKey}
            selectedFilters={selectedFilters}
            onFilterChange={handleFilterChange}
          />
        </aside>

        {/* Grid de Productos */}
        <div className="md:w-3/4">
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border rounded-lg p-4 shadow-sm"
                >
                  <p className="font-semibold">{product.title}</p>
                  <p className="text-sm text-gray-500">${product.price}</p>
                  {/* Agregar imagen, botón, etc. según tu UI */}
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No hay productos que coincidan.</p>
          )}
        </div>
      </div>
    </section>
  );
}