import { Slider } from "./components/slider/Slider";
import { Brands } from "./components/brands/Brands";

import { getProductsByCategory } from "./lib/getProductsByCategory";
import { Spacer } from "./components/spacer/Spacer";
import { StandardCategorySection } from "./components/category-sections/StandardCategorySection";
import { BrandCategorySection } from "./components/category-sections/BrandCategorySection";
import { FeatureBannerSection } from "./components/category-sections/FeatureBannerSection";

export default function Home() {
  const notebooks = getProductsByCategory("equipos", "notebooks");
  const desktopComputers = getProductsByCategory("equipos","pcs-de-escritorio");
  const storage = getProductsByCategory("almacenamiento");
  const graphicCards = getProductsByCategory("placas-de-video");
  const displays = getProductsByCategory("pantallas");
  return (
    <>
      <Slider />
      <Brands />
      <Spacer />
      <StandardCategorySection
        title="Elejí tu notebook ideal para trabajar o jugar"
        products={notebooks}
      />
      <StandardCategorySection
        title="Aprovechá y renová tu Pc completa"
        products={desktopComputers}
      />
      <StandardCategorySection
        title="Potenciá tu PC con el mejor almacenamiento"
        products={storage}
      />
      <div className="bg-[#2D2D33] py-20">
        <BrandCategorySection />
        <StandardCategorySection products={graphicCards} isDark={true} />
      </div>
      <StandardCategorySection
        title="Elejí tu pantalla ideal"
        products={displays}
      />
      <FeatureBannerSection />
    </>
  );
}
