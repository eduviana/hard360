interface ItemsToShowSelectProps {
  value: number;
  onChange: (value: number) => void;
}

export const ItemsToShowSelect = ({ value, onChange }: ItemsToShowSelectProps) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-2">
      <label htmlFor="perPage" className="text-sm text-gray-700 whitespace-nowrap">
        Cantidad
      </label>
      <select
        id="perPage"
        // className="border border-gray-300 rounded px-3 py-2 text-sm"
        className="border border-gray-300 rounded px-3 py-2 text-sm max-w-full"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      >
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
        <option value={50}>50</option>
      </select>
    </div>
  );
};