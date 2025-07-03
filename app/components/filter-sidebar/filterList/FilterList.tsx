import Link from "next/link";

interface FilterListProps {
  items: {
    label: string;       // texto para mostrar
    count: number;       // cantidad a mostrar
    isActive: boolean;
    link: string;
  }[];
}

export const FilterList = ({ items }: FilterListProps) => (
  <ul className="space-y-1">
    {items.map(({ label, count, isActive, link }) => (
      <li key={label}>
        <Link
          href={link}
          // scroll={false}
          className={`text-sm capitalize flex justify-between items-center py-2 px-4 rounded-sm transition-colors
            ${
              isActive
                ? "text-green-600 font-bold"
                : "text-neutral-800 font-medium"
            }
            bg-gray-50 hover:bg-slate-200`}
        >
          <span>{label.replaceAll("-", " ")}</span>
          <span>({count})</span>
        </Link>
      </li>
    ))}
  </ul>
);