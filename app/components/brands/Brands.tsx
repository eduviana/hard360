const brandImages = [
  {
    src: "/brands/aerocool.webp",
    alt: "Aerocool logo",
  },
  {
    src: "/brands/amd.webp",
    alt: "AMD logo",
  },
  {
    src: "/brands/intel.webp",
    alt: "Intel logo",
  },
  {
    src: "/brands/palit.webp",
    alt: "Palit logo",
  },
];

export const Brands = () => {
  return (
    <div className="bg-slate-100 py-4 flex justify-center">
      <div className="grid grid-cols-2 gap-x-4 md:grid-cols-4">
        {brandImages.map((brand, i) => (
          <img
            key={i}
            src={brand.src}
            alt={brand.alt}
            className="max-w-full max-h-full object-cover w-[120px] h-[120px]"
          />
        ))}
      </div>
    </div>
  );
};
