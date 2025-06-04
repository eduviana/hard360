"use client";

import { useEffect, useRef, useState } from "react";

const sliderData = [
  {
    desktop: "/slider/aorus.jpg",
    mobile: "slider/aorus.jpg",
  },
  {
    desktop: "/slider/nvidia.jpg",
    mobile: "slider/nvidia.jpg",
  },
  {
    desktop: "/slider/xpg.jpg",
    mobile: "slider/xpg.jpg",
  },
];

export const Slider = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = sliderData.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 7000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Iniciar auto-slide al montar
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [totalSlides]);

  const handleManualChange = (i: number) => {
    stopAutoSlide();
    setCurrent(i);
    startAutoSlide();
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {sliderData.map((img, i) => (
          <picture key={i} className="w-full shrink-0">
            <source media="(min-width: 1024px)" srcSet={img.desktop} />
            <img
              src={img.mobile}
              alt={`Slide ${i + 1}`}
              className="w-full h-[300px] object-cover sm:h-[350px] md:h-[400px] lg:h-[514px]"
            />
          </picture>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 m-8">
        {sliderData.map((_, i) => (
          <button
            key={i}
            onClick={() => handleManualChange(i)}
            aria-label={`Ir al slide ${i + 1}`}
            aria-current={current === i}
            className={`
        relative transition-all
        ${current === i ? "w-10 h-1 bg-white" : "w-6 h-0.5 bg-white/50"}
        hover:opacity-80
        before:content-[''] before:absolute before:inset-x-[-8px] before:inset-y-[-8px]
        before:z-[-1] before:pointer-events-auto
        cursor-pointer
      `}
          />
        ))}
      </div>
    </div>
  );
};
