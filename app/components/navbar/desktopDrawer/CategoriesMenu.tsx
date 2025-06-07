// import { CategoryItem } from "./ListItem";
// import { CategoryWithChildren } from "../interfaces";

// interface CategoriesMenuProps {
//   categories: CategoryWithChildren[];
// }

// const CategoriesMenu = ({ categories }: CategoriesMenuProps) => {
//   return (
//     <div className=" py-8 px-8 lg:w-[824px] xl:w-[980px] rounded-lg bg-white shadow-lg animate-fade-down">
//       <div className="grid grid-cols-4 gap-8">
//         {categories.map((cat) => (
//           <div key={cat.id}>
//             <h3 className="mb-3 text-[15px] font-bold text-accent">
//               {cat.name}
//             </h3>

//             <ul className="flex flex-col gap-1">
//               {(cat.children || []).map((subCat) => (
//                 <li key={subCat.id}>
//                   <CategoryItem
//                     text={subCat.name}
//                     path={`/${cat.slug}/${subCat.slug}`}
//                     className="text-sm text-primary transition-colors hover:text-primary/70"
//                   />
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default CategoriesMenu;
import { CategoryItem } from "./ListItem";
import { CategoryWithChildren } from "../interfaces";
import Link from "next/link";

interface CategoriesMenuProps {
  categories: CategoryWithChildren[];
  onLinkClick: () => void;
}

const CategoriesMenu = ({ categories, onLinkClick }: CategoriesMenuProps) => {
  console.log(categories, "SDSADASD")
  return (
    <div className="py-8 px-8 lg:w-[824px] xl:w-[980px] rounded-lg bg-white shadow-lg animate-fade-down">
      <div className="grid grid-cols-4 gap-8">
        {categories.map((cat) => (
          <div key={cat.id}>
            {/* ✅ Categoría primaria como título no clickeable */}
            <Link href={cat.slug} className="mb-3 text-[15px] font-bold text-accent" onClick={onLinkClick}>
              {cat.name}
            </Link>

            <ul className="flex flex-col gap-1">
              {(cat.children || []).map((subCat) => (
                <li key={subCat.id}>
                  <CategoryItem
                    text={subCat.name}
                    path={`/${cat.slug}/${subCat.slug}`}
                    className="text-sm text-primary transition-colors hover:text-primary/70"
                    onClick={onLinkClick}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoriesMenu;