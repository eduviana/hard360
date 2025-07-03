import { Slider } from "./components/slider/Slider";
import { Brands } from "./components/brands/Brands";
import { getProductsFrom } from "./lib/getProductsFrom";
import { Spacer } from "./components/spacer/Spacer";
import { StandardCategorySection } from "./components/category-sections/StandardCategorySection";
import { BrandCategorySection } from "./components/category-sections/BrandCategorySection";
import { FeatureBannerSection } from "./components/category-sections/FeatureBannerSection";
import { StandardCategorySectionBlack } from "./components/category-sections/StandardCategorySectionBlack";

export default function Home() {
  const notebooks = getProductsFrom("equipos", "notebooks");
  const desktopComputers = getProductsFrom("equipos", "pcs-de-escritorio");
  const storage = getProductsFrom("almacenamiento");
  const graphicCards = getProductsFrom("placas-de-video");
  const displays = getProductsFrom("pantallas");
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
        <StandardCategorySectionBlack
          title="Placas de Video"
          products={graphicCards}
        />
      </div>
      <StandardCategorySection
        title="Elejí tu pantalla ideal"
        products={displays}
      />
      <FeatureBannerSection />
    </>
  );
}
