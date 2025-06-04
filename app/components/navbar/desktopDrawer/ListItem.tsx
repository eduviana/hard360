// "use client";
// import Link from "next/link";
// import { BiChevronRight } from "react-icons/bi";



// interface Props {
//   text: string;
//   subcategory?: boolean;
//   path?: string; // Agrega una nueva prop para la ruta acumulada
// }

// export const CategoryItem = ({ text, subcategory = false, path = "" }: Props) => {
//   const listItemClassName =
//     "h-10 w-[200px] flex justify-between items-center px-4 cursor-pointer hover:bg-slate-400 group transition-colors";

//   const fullPath = `${path}/${text.toLocaleLowerCase()}`; // Construye la ruta completa

//   return (
//     <Link
//       href={fullPath}
//       className="group-hover:text-secondary block text-sm font-medium leading-tight text-textDark transition-colors duration-300 group-hover:font-semibold"
//     >
//       <div className={listItemClassName}>
//         <span className="truncate">{text}</span>
//         {subcategory && <BiChevronRight />}
//       </div>
//     </Link>
//   );
// };

import Link from "next/link";

interface CategoryItemProps {
  text: string;
  path: string;
  className?: string;
  onClick?: () => void;
}

export const CategoryItem = ({ text, path, className, onClick }: CategoryItemProps) => (
  <Link href={path} onClick={onClick} className={className}>
    {text}
  </Link>
);
