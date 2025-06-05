"use client";

import { filtersConfig } from "./filters.config";

type FiltersConfigType = typeof filtersConfig;
type CategoryKey = keyof FiltersConfigType;

interface FiltersPanelProps<K extends CategoryKey> {
  categoryKey: K;
  selectedFilters: { [key: string]: string[] };
  onFilterChange: (key: string, value: string) => void;
}

export default function FiltersPanel<K extends CategoryKey>({
  categoryKey,
  selectedFilters,
  onFilterChange,
}: FiltersPanelProps<K>) {
  const filterConfig = filtersConfig[categoryKey];

  if (!filterConfig) return null;

  const handleCheckboxClick = (
    key: string,
    value: string,
    alreadySelected: boolean
  ) => {
    if (alreadySelected) {
      onFilterChange(key, ""); // desmarca
    } else {
      onFilterChange(key, value); // selecciona nuevo
    }
  };

  if (filterConfig.type === "attributes") {
    return (
      <div className="space-y-6">
        {filterConfig.filters.map((filterKey) => (
          <div key={filterKey}>
            <p className="text-black font-semibold mb-1 capitalize">
              {filterKey}
            </p>
            <ul className="text-sm text-primary space-y-1">
              {(filterConfig.options[filterKey] as string[]).map((option) => {
                const selected = selectedFilters[filterKey]?.[0] === option;

                return (
                  <li
                    key={option}
                    className="capitalize flex items-center gap-2 select-none"
                  >
                    <input
                      type="checkbox"
                      checked={selected}
                      onChange={() =>
                        handleCheckboxClick(filterKey, option, selected)
                      }
                      id={`${filterKey}-${option}`}
                      className="cursor-pointer"
                    />
                    <label
                      htmlFor={`${filterKey}-${option}`}
                      className="cursor-pointer"
                    >
                      {option}
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  if (filterConfig.type === "subcategories") {
    return (
      <div className="space-y-4">
        <ul className="text-[15px] font-normal text-text-secondary space-y-1">
          {filterConfig.options.map((slug) => {
            const selected = selectedFilters["subcategory"]?.[0] === slug;

            return (
              <li key={slug} className="capitalize flex items-center gap-2 select-none">
                <input
                  type="checkbox"
                  checked={selected}
                  onChange={() =>
                    handleCheckboxClick("subcategory", slug, selected)
                  }
                  id={`subcategory-${slug}`}
                  className="cursor-pointer"
                />
                <label
                  htmlFor={`subcategory-${slug}`}
                  className="cursor-pointer"
                >
                  {slug.replace(/-/g, " ")}
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return null;
}
