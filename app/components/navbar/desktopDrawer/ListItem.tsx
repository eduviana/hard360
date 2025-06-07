import Link from "next/link";

interface CategoryItemProps {
  text: string;
  path: string;
  className?: string;
  onClick?: () => void;
}

export const CategoryItem = ({
  text,
  path,
  className,
  onClick,
}: CategoryItemProps) => (
  <Link href={path} onClick={onClick} className={className}>
    {text}
  </Link>
);
