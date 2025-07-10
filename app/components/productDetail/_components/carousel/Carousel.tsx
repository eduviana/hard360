"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useSwipeable } from "react-swipeable";

interface CarouselProps {
  images: string[];
  alt: string;
}

export const Carousel = ({ images, alt }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const prevImage = () => {
    setDirection("left");
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setDirection("right");
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const setImage = (index: number) => setCurrentIndex(index);

  const handlers = useSwipeable({
    onSwipedLeft: nextImage,
    onSwipedRight: prevImage,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Miniaturas */}
        <div className="hidden lg:flex flex-col gap-2">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative w-20 h-20 rounded overflow-hidden cursor-pointer border ${
                currentIndex === i
                  ? "border-accent-primary"
                  : "border-gray-300"
              }`}
              onClick={() => setImage(i)}
            >
              <Image
                src={img}
                alt={`${alt} thumbnail ${i + 1}`}
                fill
                sizes="80px"
                className="object-contain transition duration-200"
              />
            </div>
          ))}
        </div>

        {/* Imagen principal */}
        <div
          {...handlers}
          className="relative w-full h-[300px] sm:h-[400px] cursor-zoom-in overflow-hidden"
          onClick={() => setShowModal(true)}
        >
          <div
            key={images[currentIndex]}
            className="absolute inset-0 transition-opacity duration-500 opacity-0 animate-fadeIn"
          >
            <Image
              src={images[currentIndex]}
              alt={`${alt} ${currentIndex + 1}`}
              fill
              className="object-contain rounded-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Flecha izquierda */}
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-0 lg:left-0 xl:left-4 top-1/2 -translate-y-1/2 p-1 bg-white/80 hover:bg-white rounded-full z-10 cursor-pointer"
          >
            <FaChevronLeft className="w-6 h-6 text-accent-primary" />
          </button>

          {/* Flecha derecha */}
          <button
            onMouseDown={(e) => e.stopPropagation()}
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-0 lg:right-0 xl:right-4 top-1/2 -translate-y-1/2 p-1 bg-white/80 hover:bg-white rounded-full z-10 cursor-pointer"
          >
            <FaChevronRight className="w-6 h-6 text-accent-primary" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-[#000000db] z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          <div
            {...handlers}
            className="relative w-full max-w-5xl h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowModal(false);
              }}
              className="absolute top-4 right-4 p-1 bg-red-600 hover:bg-red-800 transition-colors duration-300 rounded-full cursor-pointer z-50"
            >
              <IoClose className="text-white w-10 h-10" />
            </button>

            {/* Flecha izquierda */}
            <button
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-black/70 rounded-full z-50 cursor-pointer"
            >
              <FaChevronLeft className="w-6 h-6 lg:w-8 lg:h-8 text-accent-primary" />
            </button>

            <div
              key={images[currentIndex]}
              className={`absolute inset-0 ${
                direction === "right"
                  ? "animate-slide-in-left"
                  : "animate-slide-in-right"
              }`}
            >
              <Image
                src={images[currentIndex]}
                alt={`${alt} full ${currentIndex + 1}`}
                fill
                className="object-contain rounded-lg"
              />
            </div>

            {/* Flecha derecha */}
            <button
              onMouseDown={(e) => e.stopPropagation()}
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-black/70 rounded-full z-50 cursor-pointer"
            >
              <FaChevronRight className="w-6 h-6 lg:w-8 lg:h-8 text-accent-primary" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
