// const brandImages = [
//   {
//     src: "/brands/aerocool.webp",
//     alt: "Aerocool logo",
//   },
//   {
//     src: "/brands/amd.webp",
//     alt: "AMD logo",
//   },
//   {
//     src: "/brands/intel.webp",
//     alt: "Intel logo",
//   },
//   {
//     src: "/brands/palit.webp",
//     alt: "Palit logo",
//   },
// ];

// export const Brands = () => {
//   return (
//     <div className="bg-slate-100 flex justify-center">
//       <div className="grid grid-cols-2 gap-x-4 md:grid-cols-4">
//         {brandImages.map((brand, i) => (
//           <img
//             key={i}
//             src={brand.src}
//             alt={brand.alt}
//             className="max-w-full max-h-full object-cover w-[100px] h-[100px]"
//           />
//         ))}
//       </div>
//     </div>
//   );
// };








"use client";

import Image from "next/image";

const brandImages = [
  {
    name: "Aerocool",
    src: "/brands/aerocool.webp",
  },
  {
    name: "AMD",
    src: "/brands/amd.webp",
  },
  {
    name: "Intel",
    src: "/brands/intel.webp",
  },
  {
    name: "Palit",
    src: "/brands/palit.webp",
  },
];

export const Brands = () => {
  return (
    <div className="bg-slate-100 py-4 flex justify-center">
      <div className="grid grid-cols-4 gap-0 place-items-center">
        {brandImages.map((brand) => (
          <Image
            key={brand.src}
            src={brand.src}
            alt={`${brand.name} logo`}
            title={brand.name}
            width={110}
            height={110}
            className="object-cover"
          />
        ))}
      </div>
    </div>
  );
};