import { useContext } from "react";
import { CategoryContext } from "../_context/CategoryContext";

// 🟢 Hook seguro para acceder al contexto
export const useCategoryContext = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategoryContext debe usarse dentro de CategoryProvider");
  }
  return context;
};