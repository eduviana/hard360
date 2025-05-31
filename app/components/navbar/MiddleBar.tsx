"use client";

import Link from "next/link";
import {
  Bars3Icon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { MobileSearchInput } from "./MobileSearchInput";

interface MiddleBarProps {
  mobileSearchOpen: boolean;
  setMobileSearchOpen: (open: boolean) => void;
  setDrawerOpen: (open: boolean) => void;
}

const MiddleBar = ({
  mobileSearchOpen,
  setMobileSearchOpen,
  setDrawerOpen,
}: MiddleBarProps) => {
  return (
    <div className="bg-[#2c2c31]">
      <div className="custom-container relative flex items-center justify-between gap-6 py-6">
        {/* --- Hamburguesa + Logo --- */}
        <div className="flex items-center justify-start gap-4">
          <button
            className="p-0 text-accent focus:outline-none lg:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menú"
          >
            <Bars3Icon className="h-8 w-8" />
          </button>
          <Link href="/">
            <h1 className="flex flex-col items-start">
              <span className="text-2xl md:text-3xl lg:text-4xl font-bold uppercase text-white">
                HARD 360
              </span>
            </h1>
          </Link>
        </div>

        {/* --- Search Desktop --- */}
        <div className="hidden lg:block w-[350px] xl:w-[450px]">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-dark" />
            <input
              type="search"
              placeholder="Buscar..."
              className="text-md w-full rounded-md bg-white py-2 pl-12 pr-4 placeholder-dark shadow-inner focus:outline-none"
            />
          </div>
        </div>

        {/* --- Icons Right (Mobile y Desktop) --- */}
        <div className="flex items-center space-x-2 text-white">
          {/* Lupa Mobile */}
          <button
            className="p-1 transition-colors duration-200 hover:accent-accent focus:outline-none lg:hidden"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            aria-label="Abrir/cerrar búsqueda"
          >
            <MagnifyingGlassIcon className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Favoritos */}
          <button className="p-1 transition-colors duration-200 hover:accent focus:outline-none">
            <HeartIcon className="h-6 w-6 md:h-8 md:w-8" />
          </button>

          {/* Carrito */}
          <button className="p-1 transition-colors duration-200 hover:accent focus:outline-none">
            <ShoppingCartIcon className="h-6 w-6 md:h-8 md:w-8" />
          </button>
        </div>
      </div>

      {/* --- Mobile Search Input debajo de toda la barra --- */}
      {mobileSearchOpen && (
        <div className="lg:hidden">
          <MobileSearchInput setMobileSearchOpen={setMobileSearchOpen} />
        </div>
      )}
    </div>
  );
};

export default MiddleBar;
