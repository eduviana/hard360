// // Capacidad de RAM
// export type RamCapacity = "4GB" | "8GB" | "16GB" | "32GB";

// // Versión/estándar de RAM
// export type RamVersion = "DDR3" | "DDR4" | "DDR5";

// // Categorías
// export type Category =
//   | "notebooks"
//   | "pcs-de-escritorio"
//   | "almacenamiento"
//   | "placas-de-video"
//   | "pantallas";

// // Subcategorías
// export type StorageSubcategory = "hdd" | "ssd" | "ssd-m2" | "disco-externo";
// export type GPUSubcategory = "Radeon" | "Nvidia";
// export type DisplaySubcategory = "monitores" | "televisores"; // quitaste "proyectores"
// export type Subcategory =
//   | StorageSubcategory
//   | GPUSubcategory
//   | DisplaySubcategory;

// // Marcas
// export type NotebookBrand = "Lenovo" | "Asus" | "Dell" | "HP";
// export type PCBrand = "Armada" | "GamerTech" | "OfiTech" | "Creativa";
// export type StorageBrand =
//   | "Kingston"
//   | "Seagate"
//   | "Western Digital"
//   | "Crucial";
// export type GPUBrand = "MSI" | "Gigabyte" | "Asus" | "XFX";
// export type DisplayBrand =
//   | "AOC"
//   | "Asus"
//   | "Corsair"
//   | "Dell"
//   | "Gigabyte"
//   | "LG"
//   | "Samsung";
// export type Brand =
//   | NotebookBrand
//   | PCBrand
//   | StorageBrand
//   | GPUBrand
//   | DisplayBrand;

// // Procesadores
// export type Processor =
//   | "Intel i3"
//   | "Intel i5"
//   | "Intel i7"
//   | "Ryzen 3"
//   | "Ryzen 5"
//   | "Ryzen 7";

// // Pantalla y almacenamiento
// export type ScreenSize = "14" | "15.6" | "16";
// export type StorageSize = "240GB" | "480GB" | "1TB" | "2TB";

// // Tipo de panel para pantallas
// export type PanelType = "IPS" | "VA" | "TN" | "OLED" | "LED";

// // Producto
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

export type Category =
  | "almacenamiento"
  | "equipos" // nueva categoría principal
  | "pantallas"
  | "placas-de-video";

export type ComputersSubcategory = "notebooks" | "pcs-de-escritorio";

export type StorageSubcategory = "hdd" | "ssd" | "ssd-m2" | "disco-externo";

export type DisplaySubcategory = "monitores" | "televisores";

export type GPUSubcategory = "radeon" | "nvidia"; // minúsculas

export type Subcategory =
  | ComputersSubcategory // subcategorías de equipos
  | DisplaySubcategory
  | GPUSubcategory
  | StorageSubcategory;

// ==============================
// Marcas
// ==============================

export type DisplayBrand =
  | "aoc"
  | "asus"
  | "corsair"
  | "dell"
  | "gigabyte"
  | "lg"
  | "samsung";

export type GPUBrand = "asus" | "gigabyte" | "msi" | "xfx";

export type NotebookBrand = "asus" | "dell" | "hp" | "lenovo";

export type PCBrand = "armada" | "creativa" | "gamertech" | "ofitech";

export type StorageBrand =
  | "crucial"
  | "kingston"
  | "seagate"
  | "western-digital";

export type Brand =
  | DisplayBrand
  | GPUBrand
  | NotebookBrand
  | PCBrand
  | StorageBrand;

// ==============================
// Especificaciones Técnicas
// ==============================

export type PanelType = "ips" | "led" | "oled" | "tn" | "va";

export type Processor =
  | "intel i3"
  | "intel i5"
  | "intel i7"
  | "ryzen 3"
  | "ryzen 5"
  | "ryzen 7";

export type RamCapacity = "4gb" | "8gb" | "16gb" | "32gb";

export type RamVersion = "ddr3" | "ddr4" | "ddr5";

export type ScreenSize = "14" | "15.6" | "16";

export type StorageSize = "240gb" | "480gb" | "1tb" | "2tb";

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
  subcategory?: Subcategory; // ahora puede ser notebooks o pcs-de-escritorio si category es "equipos"
  brand?: Brand;
  processor?: Processor;
  ramCapacity?: RamCapacity;
  ramVersion?: RamVersion;
  screenSize?: ScreenSize;
  storageSize?: StorageSize;
  panelType?: PanelType;
};
