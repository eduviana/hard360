
// // Define las claves válidas para los filtros
// export type FilterKey = "marca" | "procesador" | "memoria ram" | "almacenamiento" | "subcategory";

// import { Product } from "@/app/data/types";

// // Config para panel con atributos, genérico en las claves que usa
// export type FilterPanelConfigWithAttributes<
//   K extends FilterKey = FilterKey
// > = {
//   type: "attributes";
//   filters: K[];
//   options: Record<K, string[]>;
// };

// // Config para panel con subcategorías
// export type FilterPanelConfigWithSubcategories = {
//   type: "subcategories";
//   options: string[];
// };

// // Ahora definimos filtersConfig con tipos específicos por clave
// export const filtersConfig: {
//   equipos: FilterPanelConfigWithSubcategories;
//   "pcs-de-escritorio": FilterPanelConfigWithAttributes<"marca" | "procesador" | "memoria ram">;
//   notebooks: FilterPanelConfigWithAttributes<"marca" | "procesador" | "memoria ram">;
// } = {
//   equipos: {
//     type: "subcategories",
//     options: ["notebooks", "pcs-de-escritorio"],
//   },
//   "pcs-de-escritorio": {
//     type: "attributes",
//     filters: ["marca", "procesador", "memoria ram"],
//     options: {
//       marca: ["dell", "hp", "lenovo"],
//       procesador: ["intel i3", "intel i5", "intel i7", "ryzen 3", "ryzen 5", "ryzen 7"],
//       "memoria ram": ["8gb", "16gb", "32gb"],
//     },
//   },
//   notebooks: {
//     type: "attributes",
//     filters: ["marca", "procesador", "memoria ram"],
//     options: {
//       marca: ["acer",  "asus", "lenovo", "hp"],
//       procesador: ["intel i3", "intel i5", "intel i7", "ryzen 3", "ryzen 5", "ryzen 7"],
//       "memoria ram": ["4gb", "8gb", "16gb", "32gb"],
//     },
//   },
// };



// export const filterKeyToProductProp: Record<FilterKey, keyof Product> = {
//   marca: "brand",
//   procesador: "processor",
//   "memoria ram": "ramCapacity",
//   almacenamiento: "storageSize", // si lo usás en el futuro
//   subcategory: "subcategory",
// };




import {
  notebookBrands,
  pcBrands,
  processors,
  ramCapacities,
} from "@/app/data/types";

export type FilterKey = "marca" | "procesador" | "memoria ram";

type FilterConfigAttributes = {
  type: "attributes";
  filters: FilterKey[];
  options: {
    [key in FilterKey]: readonly string[];
  };
};

type FilterConfigSubcategories = {
  type: "subcategories";
  options: string[];
};

export const filtersConfig: {
  equipos: FilterConfigSubcategories;
  "pcs-de-escritorio": FilterConfigAttributes;
  notebooks: FilterConfigAttributes;
  almacenamiento: FilterConfigSubcategories;
} = {
  equipos: {
    type: "subcategories",
    options: ["notebooks", "pcs-de-escritorio"],
  },
   almacenamiento: {
    type: "subcategories",
    options: ["hdd", "ssd", "ssd m2", "disco externo"],
  },
  "pcs-de-escritorio": {
    type: "attributes",
    filters: ["marca", "procesador", "memoria ram"],
    options: {
      marca: pcBrands,
      procesador: processors,
      "memoria ram": ramCapacities,
    },
  },
  notebooks: {
    type: "attributes",
    filters: ["marca", "procesador", "memoria ram"],
    options: {
      marca: notebookBrands,
      procesador: processors,
      "memoria ram": ramCapacities,
    },
  },
 
};


import { Product } from "@/app/data/types";

export const filterKeyToProductProp: Record<FilterKey, keyof Product> = {
  marca: "brand",
  procesador: "processor",
  "memoria ram": "ramCapacity",
};