import Link from "next/link";

export const BrandCategorySection = () => {
  return (
    <section>
      <div className="custom-container">
        <div className="flex items-center gap-6 mb-10">
          <h2 className="text-3xl font-normal text-left text-white">
            LLevá tus juegos al siguiente nivel
          </h2>
        </div>

        <div className="flex flex-col flex-wrap md:flex-row md:justify-center gap-8">
          <Link href="/placas-de-video/nvidia" aria-label="Nvidia">
            <div className="w-full h-[300px] md:w-[320px] md:h-[240px] lg:w-[390px] lg:h-[290px] xl:w-[480px] xl:h-[320px] rounded-sm bg-[url('/graphicCards/nvidia.png')] bg-cover bg-no-repeat bg-center transition-all duration-300 hover:ring-2 hover:ring-green-600" />
          </Link>

          <Link href="/placas-de-video/radeon" aria-label="Radeon">
            <div className="w-full h-[300px] md:w-[320px] md:h-[240px] lg:w-[390px] lg:h-[290px] xl:w-[480px] xl:h-[320px] rounded-sm bg-[url('/graphicCards/radeon.png')] bg-cover bg-no-repeat bg-center transition-all duration-300 hover:ring-2 hover:ring-orange-600" />
          </Link>
        </div>
      </div>
    </section>
  );
};