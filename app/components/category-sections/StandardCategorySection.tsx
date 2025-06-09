import { Product } from "@/app/data/types";
import ViewMore from "../view-more/ViewMore";
import { ProductCard } from "../productCard/ProductCard";

interface StandardCategorySectionProps {
  title?: string;
  products: Product[];
  isDark?: boolean;
}

export const StandardCategorySection = ({
  title,
  products,
  isDark,
}: StandardCategorySectionProps) => {
  return (
    <section className="py-12">
      <div className="custom-container">
        {/* TÍTULO FUERA DEL BACKGROUND EN md Y MÁS */}
        <div className="hidden md:flex items-center gap-6 mb-10">
          <h2
            className={`text-lg lg:text-3xl font-normal text-left ${
              isDark ? "text-white" : "text-text-secondary"
            }`}
          >
            {title}
          </h2>
          {!isDark && products[0] && (
            <ViewMore
              category={products[0].category}
              subcategory={products[0].subcategory}
            />
          )}
        </div>

        {/* GRID */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 rounded-2xl ${
            isDark ? "bg-text-secondary" : "bg-slate-200"
          }`}
        >
          {/* TÍTULO DENTRO DEL BACKGROUND EN breakpoints < md */}
          <div className="block md:hidden col-span-full">
            <div className="flex items-center gap-4">
              <h2 className="text-[15px] font-semibold text-left text-[#343A41]">
                {title}
              </h2>
              {!isDark && products[0] && (
                <ViewMore
                  category={products[0].category}
                  subcategory={products[0].subcategory}
                />
              )}
            </div>
          </div>

          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
