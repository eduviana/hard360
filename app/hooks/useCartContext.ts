import { useContext } from "react";
import CartContext from "@/app/context/CartContext";

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext debe usarse dentro de un CartProvider");
  }
  return context;
};