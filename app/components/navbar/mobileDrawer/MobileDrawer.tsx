"use client";

import { XMarkIcon } from "@heroicons/react/24/outline";
import CategoryItem from "./CategoryItem";
import { CategoryWithChildren } from "../interfaces";


interface MobileDrawerProps {
  drawerOpen: boolean;
  setDrawerOpen: (open: boolean) => void;
  categories: CategoryWithChildren[];
}

export const MobileDrawer = ({
  drawerOpen,
  setDrawerOpen,
  categories,
}: MobileDrawerProps) => {
  return (
    <div
      className={`fixed left-0 top-0 z-50 h-full w-4/5 max-w-xs transform bg-slate-100 transition-transform duration-300 ease-in-out lg:hidden ${
        drawerOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Botón de cierre */}
      <button
        onClick={() => setDrawerOpen(false)}
        className="absolute right-0 top-0 p-3 text-secondary focus:outline-none"
        aria-label="Cerrar menú"
      >
        <XMarkIcon className="h-6 w-6" />
      </button>

      <nav className="h-full space-y-4 overflow-y-auto p-6 pt-10">
        {/* Título estático */}
        <h2 className="mb-8 text-lg font-bold text-primary">CATEGORÍAS</h2>

        <ul className="space-y-6">
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              parentPath=""
              closeDrawer={() => setDrawerOpen(false)}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};
