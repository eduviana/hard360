import { ReactNode } from "react";

interface SpecsSectionProps {
  title: string;
  icon?: ReactNode;
  items: { label: string; value: string }[];
}

export default function SpecsSection({ title, icon, items }: SpecsSectionProps) {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
        {icon} {title}
      </h3>
      <div className="rounded-md overflow-hidden">
        {items.map((item, index) => (
          <p
            key={index}
            className={`text-gray-700 px-3 py-1 ${
              index % 2 === 0 ? "bg-slate-100" : "bg-slate-50"
            }`}
          >
            {item.label}: {item.value}
          </p>
        ))}
      </div>
    </div>
  );
}