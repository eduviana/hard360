import Link from "next/link";

type ViewMoreProps = {
  category: string;
  subcategory?: string;
  forceCategoryLabel?: boolean; // nuevo prop opcional
};

const ViewMore = ({
  category,
  subcategory,
  forceCategoryLabel = false,
}: ViewMoreProps) => {
  const path = subcategory ? `/${category}/${subcategory}` : `/${category}`;
  const label = forceCategoryLabel ? category : subcategory ?? category;

  return (
    <Link
      href={path}
      className="absolute bottom-1 right-1 md:static text-sm font-medium px-2 py-1 rounded-l-xs rounded-r-lg transition-colors duration-300
      bg-white text-gray-800
      md:bg-accent-primary md:text-white md:hover:bg-accent-primary/70"
    >
      Ver {label}
    </Link>
  );
};

export default ViewMore;
