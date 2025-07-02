// "use client";

// import { useCallback, useEffect, useRef, useState } from "react";

// const sliderData = [
//   {
//     className:
//       "bg-[url('/slider/aorus-mobile.webp')] lg:bg-[url('/slider/aorus.webp')]",
//   },
//   {
//     className:
//       "bg-[url('/slider/nvidia-mobile.webp')] lg:bg-[url('/slider/nvidia.webp')]",
//   },
//   {
//     className:
//       "bg-[url('/slider/msi-mobile.webp')] lg:bg-[url('/slider/xpg.webp')]",
//   },
// ];

// export const Slider = () => {
//   const [current, setCurrent] = useState(0);
//   const totalSlides = sliderData.length;
//   const intervalRef = useRef<NodeJS.Timeout | null>(null);

//   const startAutoSlide = useCallback(() => {
//     intervalRef.current = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % totalSlides);
//     }, 7000);
//   }, [totalSlides]);

//   const stopAutoSlide = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   useEffect(() => {
//     startAutoSlide();
//     return stopAutoSlide;
//   }, [startAutoSlide]);

//   const handleManualChange = (i: number) => {
//     stopAutoSlide();
//     setCurrent(i);
//     startAutoSlide();
//   };

//   return (
//     <div className="relative overflow-hidden">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{ transform: `translateX(-${current * 100}%)` }}
//       >
//         {sliderData.map((bg, i) => (
//           <div
//             key={i}
//             className={`w-full shrink-0 h-[390px] sm:h-[500px] md:h-[540px] lg:h-[500px]
//     bg-no-repeat bg-center bg-contain bg-black ${bg.className}
//   `}
//           />
//         ))}
//       </div>

//       {/* Indicadores */}
//       <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 flex gap-2 m-8">
//         {sliderData.map((_, i) => (
//           <button
//             key={i}
//             onClick={() => handleManualChange(i)}
//             aria-label={`Ir al slide ${i + 1}`}
//             aria-current={current === i}
//             className={`
//               relative transition-all
//               ${current === i ? "w-10 h-1 bg-white" : "w-6 h-0.5 bg-white/50"}
//               hover:opacity-80
//               before:content-[''] before:absolute before:inset-x-[-8px] before:inset-y-[-8px]
//               before:z-[-1] before:pointer-events-auto
//               cursor-pointer
//             `}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };


"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const sliderData = [
  {
    mobile: '/slider/aorus-mobile.webp',
    desktop: '/slider/aorus.webp',
    alt: "Aorus products"
  },
  {
    mobile: '/slider/nvidia-mobile.webp',
    desktop: '/slider/nvidia.webp',
    alt: "NVIDIA technology"
  },
  {
    mobile: '/slider/msi-mobile.webp',
    desktop: '/slider/xpg.webp',
    alt: "MSI and XPG products"
  },
];

export const Slider = () => {
  const [current, setCurrent] = useState(0);
  const totalSlides = sliderData.length;
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoSlide = useCallback(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalSlides);
    }, 7000);
  }, [totalSlides]);

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, [startAutoSlide]);

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
          <div key={i} className="w-full shrink-0 bg-black relative">
            {/* Imagen para móvil - se muestra por defecto */}
            <img
              src={img.mobile}
              alt={img.alt}
              className="w-full h-full object-fill lg:hidden"
            />
            {/* Imagen para desktop - se muestra en lg: y mayores */}
            <img
              src={img.desktop}
              alt={img.alt}
              className="hidden lg:block w-full h-full object-contain"
            />
          </div>
        ))}
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
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
              before:pointer-events-auto
              cursor-pointer
            `}
          />
        ))}
      </div>
    </div>
  );
  
};