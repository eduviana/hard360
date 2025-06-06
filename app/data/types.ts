// export type Category =
//   | "almacenamiento"
//   | "equipos"
//   | "pantallas"
//   | "placas-de-video";

// export type ComputersSubcategory = "notebooks" | "pcs-de-escritorio";
// export type StorageSubcategory = "hdd" | "ssd" | "ssd m2" | "disco externo";
// export type DisplaySubcategory = "monitores" | "televisores";
// export type GPUSubcategory = "radeon" | "nvidia";

// export type Subcategory =
//   | ComputersSubcategory
//   | StorageSubcategory
//   | DisplaySubcategory
//   | GPUSubcategory;

// // ==============================
// // Marcas por categoría
// // ==============================

// export const displayBrands = [
//   "aoc",
//   "asus",
//   "corsair",
//   "dell",
//   "gigabyte",
//   "lg",
//   "samsung",
// ] as const;
// export type DisplayBrand = typeof displayBrands[number];

// export const gpuBrands = ["asus", "gigabyte", "msi", "xfx"] as const;
// export type GPUBrand = typeof gpuBrands[number];

// export const notebookBrands = ["asus", "dell", "hp", "lenovo"] as const;
// export type NotebookBrand = typeof notebookBrands[number];

// export const pcBrands = ["dell", "lenovo", "hp"] as const;
// export type PCBrand = typeof pcBrands[number];

// export const storageBrands = [
//   "crucial",
//   "kingston",
//   "seagate",
//   "western digital",
// ] as const;
// export type StorageBrand = typeof storageBrands[number];

// // Marca general
// export type Brand =
//   | DisplayBrand
//   | GPUBrand
//   | NotebookBrand
//   | PCBrand
//   | StorageBrand;

// // ==============================
// // Especificaciones Técnicas
// // ==============================

// export const panelTypes = ["ips", "led", "oled", "tn", "va"] as const;
// export type PanelType = typeof panelTypes[number];

// export const processors = [
//   "intel i3",
//   "intel i5",
//   "intel i7",
//   "ryzen 3",
//   "ryzen 5",
//   "ryzen 7",
// ] as const;
// export type Processor = typeof processors[number];

// export const ramCapacities = ["4gb", "8gb", "16gb", "32gb"] as const;
// export type RamCapacity = typeof ramCapacities[number];

// export const ramVersions = ["ddr3", "ddr4", "ddr5"] as const;
// export type RamVersion = typeof ramVersions[number];

// export const screenSizes = ["14", "15.6", "16"] as const;
// export type ScreenSize = typeof screenSizes[number];

// export const storageSizes = ["240gb", "480gb", "1tb", "2tb"] as const;
// export type StorageSize = typeof storageSizes[number];

// // ==============================
// // Producto
// // ==============================

// export type Product = {
//   id: string;
//   title: string;
//   image: string;
//   price: string;
//   discount?: number;
//   slug: string;
//   category: Category;
//   subcategory?: Subcategory;
//   brand?: Brand;
//   processor?: Processor;
//   ramCapacity?: RamCapacity;
//   ramVersion?: RamVersion;
//   screenSize?: ScreenSize;
//   storageSize?: StorageSize;
//   panelType?: PanelType;
// };






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

export type Category = typeof categories[number];

export const subcategoriesByCategory = {
  equipos: ["notebooks", "pcs-de-escritorio"],
  "combos-de-actualizacion": ["combo-amd", "combo-intel", "gabinete-y-fuente"],
  procesadores: ["intel", "amd"],
  motherboards: ["motherboards-amd", "motherboards-intel"],
  "memoria-ram": ["ddr5", "ddr4", "sodimm-ddr4"],
  almacenamiento: ["hdd", "ssd", "ssd-m2", "disco-externo"],
  "placas-de-video": ["nvidia", "radeon"],
  gabinetes: ["mini-tower", "mid-tower", "full-tower"],
  refrigeracion: ["air-cooling", "water-cooling", "pasta-termica", "fan-cooler"],
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
export type DisplayBrand = typeof displayBrands[number];

export const gpuBrands = ["asus", "gigabyte", "msi", "xfx"] as const;
export type GPUBrand = typeof gpuBrands[number];

export const notebookBrands = ["asus", "dell", "hp", "lenovo"] as const;
export type NotebookBrand = typeof notebookBrands[number];

export const pcBrands = ["dell", "lenovo", "hp"] as const;
export type PCBrand = typeof pcBrands[number];

export const storageBrands = [
  "crucial",
  "kingston",
  "seagate",
  "western digital",
] as const;
export type StorageBrand = typeof storageBrands[number];

export const brands = [
  ...displayBrands,
  ...gpuBrands,
  ...notebookBrands,
  ...pcBrands,
  ...storageBrands,
] as const;
export type Brand = typeof brands[number];


// ==============================
// Especificaciones Técnicas
// ==============================

export const panelTypes = ["ips", "led", "oled", "tn", "va"] as const;
export type PanelType = typeof panelTypes[number];

export const processors = [
  "intel i3",
  "intel i5",
  "intel i7",
  "ryzen 3",
  "ryzen 5",
  "ryzen 7",
] as const;
export type Processor = typeof processors[number];

export const ramCapacities = ["4gb", "8gb", "16gb", "32gb"] as const;
export type RamCapacity = typeof ramCapacities[number];

export const ramVersions = ["ddr3", "ddr4", "ddr5"] as const;
export type RamVersion = typeof ramVersions[number];

export const screenSizes = ["14", "15.6", "16"] as const;
export type ScreenSize = typeof screenSizes[number];

export const storageSizes = ["240gb", "480gb", "1tb", "2tb"] as const;
export type StorageSize = typeof storageSizes[number];


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
};