import { Product } from "@/app/data/types";
import ViewMore from "../view-more/ViewMore";
import { ProductCard } from "../productCard/ProductCard";

interface StandardCategorySectionBlackProps {
  title?: string;
  products: Product[];
}

export const StandardCategorySectionBlack = ({
  title,
  products,
}: StandardCategorySectionBlackProps) => {
  const productsSlice = products.slice(0, 8);

  return (
    <section className="py-12">
      <div className="custom-container">
        {/* TÍTULO FUERA DEL BACKGROUND EN md Y MÁS */}
        <div className="hidden md:flex items-center gap-6 mb-10">
          <h2 className="text-lg lg:text-3xl font-normal text-left text-white">
            {title}
          </h2>
          {products[0] && (
            <ViewMore
              category={products[0].category}
              subcategory={products[0].subcategory}
              forceCategoryLabel
            />
          )}
        </div>

        {/* TÍTULO DENTRO DEL BACKGROUND EN breakpoints < md */}
        <div className="relative block md:hidden col-span-full rounded-t-2xl bg-gray-800 px-4 py-3">
          <div className="flex items-center gap-4 min-h-[70px]">
            <h2 className="text-[17px] font-semibold text-left text-white">
              {title}
            </h2>
            {products[0] && (
              <ViewMore
                category={products[0].category}
                subcategory={products[0].subcategory}
                forceCategoryLabel 
              />
            )}
          </div>
        </div>

        {/* GRID DE PRODUCTOS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 
            px-6 pb-6 pt-6 md:pt-6 rounded-b-2xl md:rounded-xl bg-slate-200">
          {productsSlice.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};