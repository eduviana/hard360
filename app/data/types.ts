import { DiscoExternoSpecs } from "../components/productDetail/_components/specs/almacenamiento/disco-externo/discoExternoSpecs";
import { HddSpecs } from "../components/productDetail/_components/specs/almacenamiento/hdd/hddSpecs";
import { SsdM2Specs } from "../components/productDetail/_components/specs/almacenamiento/ssd-m2/ssdM2Specs";
import { SsdSpecs } from "../components/productDetail/_components/specs/almacenamiento/ssd/ssdSpecs";
import { ComboAmdSpecs } from "../components/productDetail/_components/specs/combos-actualizacion/combo-amd/comboAmdSpecs";
import { ComboIntelSpecs } from "../components/productDetail/_components/specs/combos-actualizacion/combo-intel/comboIntelSpecs";
import { GabineteYFuenteSpecs } from "../components/productDetail/_components/specs/combos-actualizacion/gabinete-y-fuente/gabineteYfuenteSpecs";
import { NotebookSpecs } from "../components/productDetail/_components/specs/equipos/notebooks/notebookSpecs";
import { PcSpecs } from "../components/productDetail/_components/specs/equipos/pcs-de-escritorio/pcSpecs";
import { FullTowerSpecs } from "../components/productDetail/_components/specs/gabinetes/full-tower/fullTowerSpecs";
import { MidTowerSpecs } from "../components/productDetail/_components/specs/gabinetes/mid-tower/midTowerSpecs";
import { MiniTowerSpecs } from "../components/productDetail/_components/specs/gabinetes/mini-tower/miniTowerSpecs";
import { RamSpecs } from "../components/productDetail/_components/specs/memoria-ram/ramSpecs";
import { MotherAmdSpecs } from "../components/productDetail/_components/specs/motherboards/mother-amd/motherAmdSpecs";
import { MotherIntelSpecs } from "../components/productDetail/_components/specs/motherboards/mother-intel/motherIntelSpecs";
import { MonitoresSpecs } from "../components/productDetail/_components/specs/pantallas/monitores/monitoresSpecs";
import { ProyectoresSpecs } from "../components/productDetail/_components/specs/pantallas/proyectores/proyectoresSpecs";
import { TelevisoresSpecs } from "../components/productDetail/_components/specs/pantallas/televisores/televisoresSpecs";
import { NvidiaSpecs } from "../components/productDetail/_components/specs/placas-de-video/nvidia/nvidiaSpecs";
import { RadeonSpecs } from "../components/productDetail/_components/specs/placas-de-video/radeon/radeonSpecs";
import { AmdSpecs } from "../components/productDetail/_components/specs/procesadores/amd/amdSpecs";
import { IntelSpecs } from "../components/productDetail/_components/specs/procesadores/intel/intelSpecs";
import { AirCoolingSpecs } from "../components/productDetail/_components/specs/refrigeracion/air-cooling/airCoolingSpecs";
import { FanCoolerSpecs } from "../components/productDetail/_components/specs/refrigeracion/fan-cooler/fanCoolerSpecs";
import { PastaTermicaSpecs } from "../components/productDetail/_components/specs/refrigeracion/pasta-termica/pastaTermicaSpecs";
import { WaterCoolingSpecs } from "../components/productDetail/_components/specs/refrigeracion/water-cooling/waterCoolingSpecs";

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
  "epson",
  "benq",
] as const;
export type DisplayBrand = (typeof displayBrands)[number];

export const gpuBrands = ["asus", "gigabyte", "msi", "xfx"] as const;
export type GPUBrand = (typeof gpuBrands)[number];

export const notebookBrands = ["asus", "dell", "hp", "lenovo"] as const;
export type ComputerBrand = (typeof notebookBrands)[number];

export const coolingBrands = [
  "msi",
  "gigabyte",
  "coolermaster",
  "gamdias",
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
  "hitachi",
  "toshiba",
  "adata",
  "sandisk",
] as const;
export type StorageBrand = (typeof storageBrands)[number];

export const motherboardBrands = ["asus", "msi", "gigabyte", "asrock"] as const;
export type MotherboardBrand = (typeof motherboardBrands)[number];

export const caseBrands = [
  "cooler master",
  "corsair",
  "nzxt",
  "thermaltake",
  "phanteks",
];
export type CaseBrand = (typeof caseBrands)[number];

export const brands = [
  ...displayBrands,
  ...gpuBrands,
  ...notebookBrands,
  ...storageBrands,
  ...coolingBrands,
  ...motherboardBrands,
  ...caseBrands,
] as const;
export type Brand = (typeof brands)[number];

// ==============================
// Especificaciones Técnicas
// ==============================

export const panelTypes = ["ips", "led", "oled", "tn", "va", "qled"] as const;
export type PanelType = (typeof panelTypes)[number];

export const processors = [
  "intel celeron",
  "intel pentium",
  "intel i3",
  "intel i5",
  "intel i7",
  "intel i9",
  "amd athlon",
  "amd ryzen 3",
  "amd ryzen 5",
  "amd ryzen 7",
  "amd ryzen 9",
] as const;
export type Processor = (typeof processors)[number];

export const amdProcessors = [
  "amd athlon",
  "amd ryzen 3",
  "amd ryzen 5",
  "amd ryzen 7",
  "amd ryzen 9",
] as const;
export type AmdProcessors = (typeof amdProcessors)[number];

export const intelProcessors = [
  "intel celeron",
  "intel pentium",
  "intel i3",
  "intel i5",
  "intel i7",
  "intel i9",
] as const;
export type IntelProcessors = (typeof intelProcessors)[number];

export const processorSockets = ["LGA1200", "LGA1700", "AM4", "AM5"] as const;
export type ProcessorSockets = (typeof processorSockets)[number];

export const amdSockets = ["AM4", "AM5"] as const;

export const intelSockets = ["LGA1200", "LGA1700"] as const;

export const ramCapacities = ["4gb", "8gb", "16gb", "32gb"] as const;
export type RamCapacity = (typeof ramCapacities)[number];

export const ramVersions = ["ddr3", "ddr4", "ddr5"] as const;
export type RamVersion = (typeof ramVersions)[number];

export const screenSizes = [
  "14",
  "15",
  "16",
  "20",
  "24",
  "27",
  "32",
  "43",
  "55",
] as const;
export type ScreenSize = (typeof screenSizes)[number];

export const storageSizes = [
  "120gb",
  "256gb",
  "480gb",
  "512gb",
  "1tb",
  "2tb",
  "4tb",
] as const;
export type StorageSize = (typeof storageSizes)[number];

export const motherboardSockets = [
  "AM4",
  "AM5",
  "LGA 1200",
  "LGA 1700",
] as const;
export type MotherboardSocket = (typeof motherboardSockets)[number];

// ==============================
// Producto
// ==============================

export type Product = {
  id: string;
  title: string;
  thumbnail?: string;
  images: string[];
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
  socket?: ProcessorSockets;

  // 👇 Nueva propiedad
  specs?:
    | NotebookSpecs
    | PcSpecs
    | RamSpecs
    | AirCoolingSpecs
    | WaterCoolingSpecs
    | PastaTermicaSpecs
    | FanCoolerSpecs
    | ComboAmdSpecs
    | ComboIntelSpecs
    | GabineteYFuenteSpecs
    | HddSpecs
    | SsdSpecs
    | SsdM2Specs
    | DiscoExternoSpecs
    | MonitoresSpecs
    | TelevisoresSpecs
    | ProyectoresSpecs
    | IntelSpecs
    | AmdSpecs
    | NvidiaSpecs
    | RadeonSpecs
    | MotherAmdSpecs
    | MotherIntelSpecs
    | FullTowerSpecs
    | MidTowerSpecs
    | MiniTowerSpecs;
};

export interface SubcategoryFilter {
  values?: readonly string[];
  activeFilter?: (value: string) => string;
  hidden?: boolean;
}

export interface FilterOption {
  label: string;
  field: keyof Product;
  values: readonly string[];
  activeFilter?: (value: string) => string;
  subcategories?: Record<string, SubcategoryFilter>;
}

export const filtersByCategory: {
  [key in Category]?: FilterOption[];
} = {
  equipos: [
    {
      label: "Marca",
      field: "brand",
      values: notebookBrands,
      activeFilter: (val) => val,
      subcategories: {
        "pcs-de-escritorio": {
          values: ["intel", "amd"],
        },
      },
    },
    {
      label: "Procesador",
      field: "processor",
      values: processors,
      activeFilter: (val) => val,
    },
    {
      label: "Memoria Ram",
      field: "ramCapacity",
      values: ramCapacities,
      activeFilter: (val) => val,
    },
  ],
  pantallas: [
    {
      label: "Marca",
      field: "brand",
      values: displayBrands,
      activeFilter: (val) => val,
      subcategories: {
        proyectores: {
          values: ["epson"],
        },
      },
    },
    {
      label: "Panel",
      field: "panelType",
      values: panelTypes,
      activeFilter: (val) => val,
      subcategories: {
        proyectores: {
          hidden: true,
        },
      },
    },
    {
      label: "Tamaño",
      field: "screenSize",
      values: screenSizes,
      activeFilter: (val) => `${val}″`,
      subcategories: {
        proyectores: {
          hidden: true,
        },
      },
    },
  ],
  procesadores: [
    {
      label: "Serie",
      field: "processor",
      values: processors,
      activeFilter: (val) => val,
      subcategories: {
        amd: {
          values: amdProcessors,
        },
        intel: {
          values: intelProcessors,
        },
      },
    },
    {
      label: "Socket",
      field: "socket",
      values: processorSockets,
      activeFilter: (val) => val.toUpperCase(),
      subcategories: {
        amd: {
          values: amdSockets,
        },
        intel: {
          values: intelSockets,
        },
      },
    },
  ],
  "memoria-ram": [
    {
      label: "Capacidad",
      field: "ramCapacity",
      values: ramCapacities,
      activeFilter: (val) => val,
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
  motherboards: [
    {
      label: "Marca",
      field: "brand",
      values: motherboardBrands,
      activeFilter: (val) => val,
    },
    {
      label: "Socket",
      field: "socket",
      values: motherboardSockets,
      activeFilter: (val) => val.toUpperCase(),
    },
  ],
  gabinetes: [
    {
      label: "Marca",
      field: "brand",
      values: caseBrands,
      activeFilter: (val) => val,
    },
  ],
};
