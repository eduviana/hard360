"use client";

import Link from "next/link";
import BottomBar from "./BottomBar";
import { CategoryWithChildren } from "../interfaces";

interface DesktopDrawerProps {
  categories: CategoryWithChildren[];
}

export const DesktopDrawer = ({ categories }: DesktopDrawerProps) => {
  return (
    <div className="hidden bg-background py-3 lg:block shadow-2xl">
      <div className="custom-container">
        <nav>
          <ul className="flex w-full items-center justify-between">
            <li>
              <BottomBar categories={categories} />
            </li>

            <li>
              <Link
                href="/plantas/interior/begonias"
                className="font-normal text-dark hover:text-dark/70 transition-colors duration-300"
              >
                PCs de Escritorio
              </Link>
            </li>
            <li>
              <Link
                href="/plantas/interior/bromelias"
                className="font-normal text-dark hover:text-dark/70 transition-colors duration-300"
              >
                Notebooks
              </Link>
            </li>
            <li>
              <Link
                href="/plantas/interior/calatheas"
                className="font-normal text-dark hover:text-dark/70 transition-colors duration-300"
              >
                Placas de Video
              </Link>
            </li>
            <li>
              <Link
                href="/plantas/interior/colgantes"
                className="font-normal text-dark hover:text-dark/70 transition-colors duration-300"
              >
                Monitores
              </Link>
            </li>
            <li>
              <Link
                href="/plantas/interior/helechos"
                className="font-normal text-dark hover:text-dark/70 transition-colors duration-300"
              >
                Micros
              </Link>
            </li>
              <li>
              <Link
                href="/plantas/interior/helechos"
                className="font-normal text-dark hover:text-dark/70 transition-colors duration-300"
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
