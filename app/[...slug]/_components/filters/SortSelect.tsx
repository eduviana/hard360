interface SortSelectProps {
  value: string;
  onChange: (value: string) => void;
}

export const SortSelect = ({ value, onChange }: SortSelectProps) => {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort" className="text-sm text-gray-700 whitespace-nowrap">
        Ordenar por
      </label>
      <select
        id="sort"
        className="border border-gray-300 rounded px-3 py-2 text-sm"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="default">Por defecto</option>
        <option value="priceAsc">Precio: menor a mayor</option>
        <option value="priceDesc">Precio: mayor a menor</option>
      </select>
    </div>
  );
};