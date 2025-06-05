import { NextResponse } from "next/server";
import { products } from "@/app/data/data";


export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const page = Number(searchParams.get("page") || 1);
  const limit = Number(searchParams.get("limit") || 10);
  const search = searchParams.get("search")?.toLowerCase();
  const category = searchParams.get("category");
  const subcategory = searchParams.get("subcategory");
  const brand = searchParams.get("brand");

  // Filtrado
  let filtered = products;

  if (search) {
    filtered = filtered.filter((product) =>
      product.title.toLowerCase().includes(search)
    );
  }

  if (category) {
    filtered = filtered.filter((product) => product.category === category);
  }

  if (subcategory) {
    filtered = filtered.filter((product) => product.subcategory === subcategory);
  }

  if (brand) {
    filtered = filtered.filter((product) => product.brand === brand);
  }

  const total = filtered.length;
  const start = (page - 1) * limit;
  const end = start + limit;

  const paginated = filtered.slice(start, end);

  return NextResponse.json({
    data: paginated,
    pagination: {
      page,
      limit,
      total,
      totalPages: Math.ceil(total / limit),
    },
  });
}