"use client";

import { createContext } from "react";

// 🟢 Tipo de datos que manejará el contexto
export interface CategoryContextType {
  saludo: string;
}

// 🟢 Contexto creado
export const CategoryContext = createContext<CategoryContextType | undefined>(undefined);

// 🟢 Provider
export const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const saludo = "hola";

  return (
    <CategoryContext.Provider value={{ saludo }}>
      {children}
    </CategoryContext.Provider>
  );
};