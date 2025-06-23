"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

interface CarouselProps {
  images: string[];
  alt: string;
}

export const Carousel = ({ images, alt }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const setImage = (index: number) => setCurrentIndex(index);

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Miniaturas */}
        <div className="hidden lg:flex flex-col gap-2">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative w-20 h-20 rounded overflow-hidden cursor-pointer border ${
                currentIndex === i ? "border-accent" : "border-gray-300"
              }`}
              onClick={() => setImage(i)}
            >
              <Image
                src={img}
                alt={`${alt} thumbnail ${i + 1}`}
                fill
                className="object-contain transition duration-200"
              />
            </div>
          ))}
        </div>

        {/* Imagen principal con transición de opacidad */}
        <div
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
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Flechas */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 z-10 cursor-pointer"
          >
            <FaChevronLeft className="w-6 h-6 text-accent" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 z-10 cursor-pointer"
          >
            <FaChevronRight className="w-6 h-6 text-accent" />
          </button>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 bg-[#000000db] z-50 flex items-center justify-center"
          onClick={() => setShowModal(false)}
        >
          {/* Botón cerrar */}
          <button
            onClick={() => setShowModal(false)}
            className="absolute top-6 right-6 p-1 bg-red-600 text-3xl rounded-full cursor-pointer"
          >
            <IoClose className="text-white" />
          </button>

          {/* Chevron izquierda con fondo visible */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 top-1/2 -translate-y-1/2 p-2 bg-accent rounded-full z-50"
          >
            <FaChevronLeft className="w-8 h-8 text-white" />
          </button>

          {/* Imagen grande */}
          <div className="relative w-[90vw] max-w-5xl h-[90vh]">
            <Image
              key={images[currentIndex]}
              src={images[currentIndex]}
              alt={`${alt} full ${currentIndex + 1}`}
              fill
              className="object-contain rounded-lg transition-opacity duration-500 opacity-0 animate-fadeIn"
            />
          </div>

          {/* Chevron derecha con fondo visible */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 top-1/2 -translate-y-1/2 p-2 bg-accent rounded-full z-50"
          >
            <FaChevronRight className="w-8 h-8 text-white" />
          </button>
        </div>
      )}
    </>
  );
};
