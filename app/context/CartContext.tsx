"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { Product } from "@/app/data/types"; // Asegurate de que este sea el tipo correcto

interface CartItem extends Product {
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;

  productQuantity: number;
  setProductQuantity: React.Dispatch<React.SetStateAction<number>>;
  increaseProductQuantity: () => void;
  decreaseProductQuantity: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [productQuantity, setProductQuantity] = useState(1);

  const increaseProductQuantity = () => {
    setProductQuantity((prev) => Math.min(prev + 1, 10));
  };

  const decreaseProductQuantity = () => {
    setProductQuantity((prev) => Math.max(prev - 1, 1));
  };

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);

      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: Math.min(item.quantity + quantity, 10) } // Límite de 10 unidades
            : item
        );
      } else {
        return [...prev, { ...product, quantity }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        productQuantity,
        setProductQuantity,
        increaseProductQuantity,
        decreaseProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCartContext must be used within a CartProvider");
  }
  return context;
}

export default CartContext;