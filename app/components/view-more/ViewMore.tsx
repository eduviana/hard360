import Link from "next/link";

type ViewMoreProps = {
  category: string;
  subcategory?: string;
};

const ViewMore = ({ category, subcategory }: ViewMoreProps) => {
  const path = subcategory ? `/${category}/${subcategory}` : `/${category}`;
  const label = subcategory ?? category;

  return (
    <Link
      href={path}
      className="hidden md:block capitalize text-sm bg-accent text-white font-medium px-2 py-1 rounded-sm hover:bg-accent/70 transition-colors duration-300"
    >
      Ver {label}
    </Link>
  );
};

export default ViewMore;
