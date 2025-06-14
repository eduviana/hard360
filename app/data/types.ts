export const categories = [
  "equipos",
  "combos-de-actualizacion",
  "procesadores",
  "motherboards",
  "memoria-ram",
  "almacenamiento",
  "placas-de-video",
  "gabinetes",
  "refrigeracion",
  "pantallas",
] as const;

export type Category = (typeof categories)[number];

//esto se utiliza para mostrar el filtro de subcategorias en [...slug] page.tsx---NO
export const subcategoriesByCategory = {
  equipos: ["notebooks", "pcs-de-escritorio"],
  "combos-de-actualizacion": ["combo-amd", "combo-intel", "gabinete-y-fuente"],
  procesadores: ["intel", "amd"],
  motherboards: ["motherboards-amd", "motherboards-intel"],
  // "memoria-ram": ["ddr5", "ddr4", "sodimm-ddr4"],
  "memoria-ram": ["de-escritorio", "de-notebook"],
  almacenamiento: ["hdd", "ssd", "ssd-m2", "disco-externo"],
  "placas-de-video": ["nvidia", "radeon"],
  gabinetes: ["mini-tower", "mid-tower", "full-tower"],
  refrigeracion: [
    "air-cooling",
    "water-cooling",
    "pasta-termica",
    "fan-cooler",
  ],
  pantallas: ["monitores", "televisores", "proyectores"],
} as const;

export const subcategories = Object.values(subcategoriesByCategory).flat();
export type Subcategory = (typeof subcategories)[number];

// ==============================
// Marcas por categoría
// ==============================

export const displayBrands = [
  "aoc",
  "asus",
  "corsair",
  "dell",
  "gigabyte",
  "lg",
  "samsung",
] as const;
export type DisplayBrand = (typeof displayBrands)[number];

export const gpuBrands = ["asus", "gigabyte", "msi", "xfx"] as const;
export type GPUBrand = (typeof gpuBrands)[number];

export const computerBrands = ["asus", "dell", "hp", "lenovo"] as const;
export type ComputerBrand = (typeof computerBrands)[number];

export const coolingBrands = [
  "cooler master",
  "corsair",
  "thermaltake",
  "nzxt",
] as const;
export type CoolingBrand = (typeof coolingBrands)[number];

export const storageBrands = [
  "crucial",
  "kingston",
  "seagate",
  "western digital",
] as const;
export type StorageBrand = (typeof storageBrands)[number];

export const motherboardBrands = [
  "asus",
  "msi",
  "gigabyte",
  "asrock"
] as const;

export type MotherboardBrand = (typeof motherboardBrands)[number];

export const brands = [
  ...displayBrands,
  ...gpuBrands,
  ...computerBrands,
  ...storageBrands,
  ...coolingBrands,
  ...motherboardBrands,
] as const;
export type Brand = (typeof brands)[number];



// ==============================
// Especificaciones Técnicas
// ==============================

export const panelTypes = ["ips", "led", "oled", "tn", "va"] as const;
export type PanelType = (typeof panelTypes)[number];

export const processors = [
  "intel i3",
  "intel i5",
  "intel i7",
  "ryzen 3",
  "ryzen 5",
  "ryzen 7",
] as const;
export type Processor = (typeof processors)[number];

export const ramCapacities = ["4gb", "8gb", "16gb", "32gb"] as const;
export type RamCapacity = (typeof ramCapacities)[number];

export const ramVersions = ["ddr3", "ddr4", "ddr5"] as const;
export type RamVersion = (typeof ramVersions)[number];

export const screenSizes = ["14", "15.6", "16"] as const;
export type ScreenSize = (typeof screenSizes)[number];

export const storageSizes = ["240gb", "480gb", "1tb", "2tb"] as const;
export type StorageSize = (typeof storageSizes)[number];

export const motherboardSockets = ["AM4", "AM5", "LGA 1200", "LGA 1700"] as const;
export type MotherboardSocket = (typeof motherboardSockets)[number];

// export const coolingTypes = ["aire", "liquida"] as const;
// export type CoolingType = (typeof coolingTypes)[number];

// ==============================
// Producto
// ==============================

export type Product = {
  id: string;
  title: string;
  image: string;
  price: string;
  discount?: number;
  slug: string;
  category: Category;
  subcategory: Subcategory;
  brand?: Brand;
  processor?: Processor;
  ramCapacity?: RamCapacity;
  ramVersion?: RamVersion;
  screenSize?: ScreenSize;
  storageSize?: StorageSize;
  panelType?: PanelType;
  socket?: MotherboardSocket;
};

export const filtersByCategory: {
  [key in Category]?: {
    label: string; // Texto para la UI
    field: keyof Product;
    values: readonly string[];
    activeFilter?: (value: string) => string; // 👈 NUEVO
  }[];
} = {
  equipos: [
    {
      label: "Marca",
      field: "brand",
      values: computerBrands,
      activeFilter: (val) => val, // Se mostrará "lg"
    },
    {
      label: "Procesador",
      field: "processor",
      values: processors,
      activeFilter: (val) => val, // Se mostrará "I5"
    },
  ],
  pantallas: [
    {
      label: "Marca",
      field: "brand",
      values: displayBrands,
      activeFilter: (val) => val,
    },
    {
      label: "Panel",
      field: "panelType",
      values: panelTypes,
      activeFilter: (val) => val, // "IPS"
    },
    {
      label: "Tamaño",
      field: "screenSize",
      values: screenSizes,
      activeFilter: (val) => `${val}″`, // "16″"
    },
  ],
  "memoria-ram": [
    {
      label: "Capacidad RAM",
      field: "ramCapacity",
      values: ramCapacities,
      activeFilter: (val) => `${val} GB`,
    },
    {
      label: "Tipo RAM",
      field: "ramVersion",
      values: ramVersions,
      activeFilter: (val) => val,
    },
  ],
  almacenamiento: [
    {
      label: "Capacidad",
      field: "storageSize",
      values: storageSizes,
      activeFilter: (val) => val,
    },
  ],
  refrigeracion: [
    {
      label: "Marca",
      field: "brand",
      values: coolingBrands,
      activeFilter: (val) => val,
    },
  ],
  procesadores: [
    {
      label: "Serie",
      field: "processor",
      values: processors,
      activeFilter: (val) => val,
    },
  ],
  motherboards: [
  {
    label: "Socket",
    field: "socket",
    values: motherboardSockets,
    activeFilter: (val) => val.toUpperCase(), // AM4, LGA 1200, etc.
  },
  {
    label: "Marca",
    field: "brand",
    values: motherboardBrands,
    activeFilter: (val) => val, // se muestra tal cual: asus, msi, etc.
  },
],
};
