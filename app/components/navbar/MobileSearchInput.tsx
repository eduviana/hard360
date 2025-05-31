"use client";

import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface MobileSearchPanelProps {
  setMobileSearchOpen: (open: boolean) => void;
}

export const MobileSearchInput = ({ setMobileSearchOpen }: MobileSearchPanelProps) => {
  return (
    <div className="custom-container absolute inset-x-0 z-50 animate-fade-down border border-gray-400 lg:hidden">
      <div className="flex h-12 bg-white shadow-lg">
        <button
          onClick={() => {}}
          aria-label="Buscar"
          className="flex h-full items-center justify-center bg-surface px-4"
        >
          <MagnifyingGlassIcon className="h-6 w-6 text-white"/>
        </button>
        <input
          type="search"
          placeholder="Buscar..."
          className="h-full flex-1 px-4 text-textDark placeholder-muted focus:outline-none"
          autoFocus
        />
        <button
          onClick={() => setMobileSearchOpen(false)}
          aria-label="Cerrar búsqueda"
          className="flex h-full items-center justify-center px-4"
        >
          <XMarkIcon className="h-6 w-6 text-textDark" />
        </button>
      </div>
    </div>
  );
};

