import Link from "next/link";
import { useRef, useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { CategoryWithChildren } from "../interfaces";

interface CategoryItemProps {
  category: CategoryWithChildren;
  parentPath?: string;
  closeDrawer: () => void;
  level?: number;
}

const CategoryItem = ({
  category,
  parentPath = "",
  closeDrawer,
  level = 1,
}: CategoryItemProps) => {
  const [open, setOpen] = useState(false);
  const hasChildren = category.children && category.children.length > 0;
  const contentRef = useRef<HTMLUListElement>(null);

  // Construye la ruta completa usando slug, no nombre
  const fullPath = parentPath
    ? `${parentPath}/${category.slug}`
    : `/${category.slug}`;

  const textClass = open ? "text-accent-primary font-semibold" : "text-primary";

  return (
    <li className="relative">
      <div
        className={`flex cursor-pointer items-center justify-between rounded-md py-1.5 pr-2 transition-colors`}
        onClick={() => {
          if (hasChildren) setOpen((prev) => !prev);
          else closeDrawer();
        }}
      >
        <Link
          href={fullPath}
          className={`pl-${level * 4} ${
            level === 1 ? "text-base font-medium" : "text-sm font-normal"
          } transition-colors duration-200 ${textClass}`}
          onClick={(e) => {
            if (hasChildren) e.preventDefault();
          }}
        >
          {category.name}
        </Link>

        {hasChildren &&
          (open ? (
            <ChevronUpIcon className="h-6 w-6 text-accent-primary" />
          ) : (
            <ChevronDownIcon className="h-6 w-6 text-accent-primary" />
          ))}
      </div>

      <ul
        ref={contentRef}
        className={`overflow-hidden transition-all duration-300 ease-out ${
          open ? "mt-1 space-y-1" : "max-h-0"
        }`}
      >
        {hasChildren &&
          category.children?.map((child) => (
            <CategoryItem
              key={child.id}
              category={child}
              parentPath={fullPath}
              closeDrawer={closeDrawer}
              level={level + 1}
            />
          ))}
      </ul>
    </li>
  );
};

export default CategoryItem;
