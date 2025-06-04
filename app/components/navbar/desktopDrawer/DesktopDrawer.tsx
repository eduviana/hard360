"use client";

import Link from "next/link";
import BottomBar from "./BottomBar";
import { CategoryWithChildren } from "../interfaces";

interface DesktopDrawerProps {
  categories: CategoryWithChildren[];
}

export const DesktopDrawer = ({ categories }: DesktopDrawerProps) => {
  return (
    <div className="hidden bg-slate-100 py-3 lg:block shadow-2xl">
      <div className="custom-container">
        <nav>
          <ul className="flex w-full items-center justify-between">
            <li>
              <BottomBar categories={categories} />
            </li>

            <li>
              <Link
                href="/equipos/pcs-de-escritorio"
                className="font-normal text-text-muted hover:text-text-muted/50 transition-colors duration-300"
              >
                PCs de Escritorio
              </Link>
            </li>
            <li>
              <Link
                href="/equipos/notebooks"
                className="font-normal text-text-muted hover:text-text-muted/50 transition-colors duration-300"
              >
                Notebooks
              </Link>
            </li>
            <li>
              <Link
                href="/placas-de-video"
                className="font-normal text-text-muted hover:text-text-muted/50 transition-colors duration-300"
              >
                Placas de Video
              </Link>
            </li>
            <li>
              <Link
                href="/pantallas"
                className="font-normal text-text-muted hover:text-text-muted/50 transition-colors duration-300"
              >
                Pantallas
              </Link>
            </li>
            <li>
              <Link
                href="/procesadores"
                className="font-normal text-text-muted hover:text-text-muted/50 transition-colors duration-300"
              >
                Micros
              </Link>
            </li>
              <li>
              <Link
                href="/ofertas"
                className="font-normal text-text-muted hover:text-text-muted/50 transition-colors duration-300"
              >
                Ofertas
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
