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
    <div className="bg-primary">
      <div className="custom-container relative flex items-center justify-between gap-6 py-6">
        {/* --- Hamburguesa + Logo --- */}
        <div className="flex items-center justify-start gap-4">
          <button
            className="p-0 text-white focus:outline-none lg:hidden"
            onClick={() => setDrawerOpen(true)}
            aria-label="Abrir menú"
          >
            <Bars3Icon className="w-8 h-8 md:w-10 md:h-10" />
          </button>
          <Link href="/">
            <h1 className="relative flex flex-col items-start leading-none">
              <span className="text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase text-white tracking-wide">
                HARD <span className="text-orange-500">360</span>
              </span>
              <span className="block h-1 w-full max-w-full bg-gradient-to-r from-orange-500 via-orange-400/80 to-transparent rounded-sm mt-1"></span>
            </h1>
          </Link>
        </div>

        {/* --- Search Desktop --- */}
        <div className="hidden lg:block w-[350px] xl:w-[450px]">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-6 w-6 -translate-y-1/2 text-secondary" />
            <input
              type="search"
              placeholder="Buscar..."
              className="text-md w-full rounded-md bg-white py-2 pl-12 pr-4 placeholder-primary shadow-inner focus:outline-none"
            />
          </div>
        </div>

        {/* --- Icons Right (Mobile y Desktop) --- */}
        <div className="flex items-center space-x-2 text-white">
          {/* Lupa Mobile */}
          <button
            className="p-1 transition-colors duration-200 hover:text-accent focus:outline-none lg:hidden"
            onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
            aria-label="Abrir/cerrar búsqueda"
          >
            <MagnifyingGlassIcon className="h-7 w-7 md:h-8 md:w-8" />
          </button>

          {/* Favoritos */}
          <button className="p-1 transition-colors duration-200 hover:text-accent focus:outline-none">
            <HeartIcon className="h-7 w-7 md:h-8 md:w-8 cursor-pointer" />
          </button>

          {/* Carrito */}
          <Link href="/carrito" passHref>
            <button className="p-1 transition-colors duration-200 hover:text-accent focus:outline-none">
              <ShoppingCartIcon className="h-7 w-7 md:h-8 md:w-8 cursor-pointer" />
            </button>
          </Link>
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
