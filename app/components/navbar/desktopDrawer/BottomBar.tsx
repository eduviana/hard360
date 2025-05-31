// "use client";
// import { useState } from "react";
// import { FiChevronDown } from "react-icons/fi";
// import CategoriesMenu from "./CategoriesMenu";
// import { CategoryWithChildren } from "../interfaces";

// interface BottomBarProps {
//   categories: CategoryWithChildren[];
// }

// const BottomBar = ({ categories }: BottomBarProps) => {
//   const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);

//   const handleCategoriesMenuEnter = () => {
//     setIsCategoriesMenuOpen(true);
//   };

//   const handleCategoriesMenuLeave = () => {
//     setIsCategoriesMenuOpen(false);
//   };

//   return (
//     <div className="relative">
//       <div
//         className="flex cursor-pointer items-center gap-2"
//         onMouseEnter={handleCategoriesMenuEnter}
//         onMouseLeave={handleCategoriesMenuLeave}
//       >
//         <button className="text-[15px] font-semibold text-[#424143]">
//           CATEGORÍAS
//         </button>
//         <FiChevronDown className="h-7 w-7 text-green-400" />
//       </div>

//       {isCategoriesMenuOpen && (
//         <CategoriesMenu categories={categories} />
//       )}

//     </div>
//   );
// };

// export default BottomBar;

"use client";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import CategoriesMenu from "./CategoriesMenu";
import { CategoryWithChildren } from "../interfaces";

interface BottomBarProps {
  categories: CategoryWithChildren[];
}

const BottomBar = ({ categories }: BottomBarProps) => {
  const [isCategoriesMenuOpen, setIsCategoriesMenuOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsCategoriesMenuOpen(true)}
      onMouseLeave={() => setIsCategoriesMenuOpen(false)}
    >
      <div className="flex items-center cursor-pointer gap-2">
        <button className="text-[15px] font-semibold text-dark">
          CATEGORÍAS
        </button>
        <FiChevronDown className="h-7 w-7 text-accent" />
      </div>

      {isCategoriesMenuOpen && (
        <div className="absolute top-full left-0 z-50 py-4">
          <CategoriesMenu categories={categories} />
        </div>
      )}
    </div>
  );
};

export default BottomBar;
