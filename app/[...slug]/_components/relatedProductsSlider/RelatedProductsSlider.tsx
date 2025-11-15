"use client";

import { useEffect, useState } from "react";
import { useSwipeable } from "react-swipeable";
import { Product } from "@/app/data/types";
import { products } from "@/app/data/data";
import { ProductCard } from "@/app/components/productCard/ProductCard";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2"; // ← react-icons ✔

interface Props {
  currentProduct: Product;
}

export default function RelatedProductsSlider({ currentProduct }: Props) {
  const related = products.filter(
    (p) =>
      p.id !== currentProduct.id && p.subcategory === currentProduct.subcategory
  );

  if (!related.length) return null;

  const VISIBLE_ITEMS = 4;
  const ITEM_WIDTH = 350;

  const maxIndex =
    related.length > VISIBLE_ITEMS ? related.length - VISIBLE_ITEMS : 0;

  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  // AUTOPLAY
  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [autoplay, maxIndex]);

  // Flechas manuales
  const next = () => {
    setAutoplay(false);
    setIndex((prev) => (prev >= maxIndex ? maxIndex : prev + 1));
  };

  const prev = () => {
    setAutoplay(false);
    setIndex((prev) => (prev <= 0 ? 0 : prev - 1));
  };

  // Swipe
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      setAutoplay(false);
      next();
    },
    onSwipedRight: () => {
      setAutoplay(false);
      prev();
    },
    trackMouse: true,
  });

  return (
    <div className="mt-16">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">
        Productos relacionados
      </h3>

      <div
        className="relative mx-auto"
        style={{ maxWidth: `${VISIBLE_ITEMS * ITEM_WIDTH}px` }}
      >
        {/* Flecha izquierda */}
        {related.length > VISIBLE_ITEMS && (
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10
               bg-white shadow rounded-full p-2 hover:bg-gray-200"
          >
            <HiChevronLeft size={28} />
          </button>
        )}

        {/* Carrusel */}
        <div {...handlers} className="overflow-hidden relative w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${index * ITEM_WIDTH}px)`,
              width: `${related.length * ITEM_WIDTH}px`,
            }}
          >
            {related.map((product) => (
              <div
                key={product.id}
                className="shrink-0 px-2"
                style={{ width: ITEM_WIDTH }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>

        {/* Flecha derecha */}
        {related.length > VISIBLE_ITEMS && (
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10
               bg-white shadow rounded-full p-2 hover:bg-gray-200"
          >
            <HiChevronRight size={28} />
          </button>
        )}
      </div>
    </div>
  );
}
