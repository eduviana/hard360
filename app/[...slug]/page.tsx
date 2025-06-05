import { notFound } from "next/navigation";
import CategoryLayout from "@/app/components/layouts/CategoryLayout";
import ProductDetail from "@/app/components/productDetail/ProductDetail";
import { products } from "../data/data";

import {
  Category,
  Subcategory,
  Product,
  Brand,
  Processor,
  ScreenSize,
} from "@/app/data/types";

interface PageProps {
  params: {
    slug: string[];
  };
}

// =======================
// Dummy DB simulada
// =======================



// =======================
// Helpers válidos
// =======================

const validCategories: Category[] = [
  "almacenamiento",
  "equipos",
  "pantallas",
  "placas-de-video",
];

const validSubcategories: Subcategory[] = [
  "notebooks",
  "pcs-de-escritorio",
  "hdd",
  "ssd",
  "ssd m2",
  "disco externo",
  "monitores",
  "televisores",
  "radeon",
  "nvidia",
];

// =======================
// Funciones utilitarias
// =======================

async function getProductsByCategory(
  category: Category,
  subcategory?: Subcategory
): Promise<Product[]> {
  return products.filter(
    (p) =>
      p.category === category &&
      (subcategory ? p.subcategory === subcategory : true)
  );
}

async function getProductBySlug(
  category: Category,
  subcategory: Subcategory,
  slug: string
): Promise<Product | undefined> {
  return products.find(
    (p) =>
      p.category === category &&
      p.subcategory === subcategory &&
      p.slug === slug
  );
}

type Filter = {
  name: string;
  options: string[];
};

async function getFiltersByCategory(category: Category): Promise<Filter[]> {
  // Filtros simulados
  const filtersByCategory: Record<Category, Filter[]> = {
    equipos: [
      {
        name: "brand",
        options: ["asus", "dell", "hp", "lenovo"],
      },
      {
        name: "processor",
        options: ["intel i3", "intel i5", "intel i7", "ryzen 3", "ryzen 5", "ryzen 7"],
      },
      {
        name: "screenSize",
        options: ["14", "15.6", "16"],
      },
    ],
    almacenamiento: [
      {
        name: "brand",
        options: ["crucial", "kingston", "seagate", "western digital"],
      },
      {
        name: "storageSize",
        options: ["240gb", "480gb", "1tb", "2tb"],
      },
    ],
    pantallas: [
      {
        name: "brand",
        options: ["aoc", "asus", "dell", "gigabyte", "lg", "samsung"],
      },
      {
        name: "panelType",
        options: ["ips", "led", "oled", "tn", "va"],
      },
    ],
    "placas-de-video": [
      {
        name: "brand",
        options: ["asus", "gigabyte", "msi", "xfx"],
      },
    ],
  };

  return filtersByCategory[category] || [];
}

// =======================
// Componente principal
// =======================

export default async function Page({ params }: PageProps) {
  const slugArray = params.slug;

  if (slugArray.length === 1) {
    const category = slugArray[0] as Category;

    if (!validCategories.includes(category)) return notFound();

    const products = await getProductsByCategory(category);
    if (!products || products.length === 0) return notFound();

    const filters = await getFiltersByCategory(category);

    return (
      <CategoryLayout
        title={category}
        products={products}
        category={category}
        filters={filters}
      />
    );
  }

  if (slugArray.length === 2) {
    const [category, subcategory] = slugArray as [Category, Subcategory];

    if (
      !validCategories.includes(category) ||
      !validSubcategories.includes(subcategory)
    )
      return notFound();

    const products = await getProductsByCategory(category, subcategory);
    if (!products || products.length === 0) return notFound();

    const filters = await getFiltersByCategory(category);

    return (
      <CategoryLayout
        title={`${category} / ${subcategory}`}
        products={products}
        category={category}
        subcategory={subcategory}
        filters={filters}
      />
    );
  }

  if (slugArray.length === 3) {
    const [category, subcategory, productSlug] = slugArray as [
      Category,
      Subcategory,
      string
    ];

    if (
      !validCategories.includes(category) ||
      !validSubcategories.includes(subcategory)
    )
      return notFound();

    const product = await getProductBySlug(category, subcategory, productSlug);
    if (!product) return notFound();

    return <ProductDetail product={product} />;
  }

  return notFound();
}