"use client";

import { Product } from "@/app/data/types";
import { specsComponentMap } from "./_components/specs/specsComponentMap";
import Image from "next/image";
import { MdCheckBox } from "react-icons/md";
import { FaTruckArrowRight } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { HiCurrencyDollar } from "react-icons/hi";
import { Carousel } from "./_components/carousel/Carousel";
import { formatCurrency } from "@/app/helpers/formatCurrency";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const SpecsComponent = specsComponentMap[product.subcategory];

  const priceWithoutTax = Math.round(parseInt(product.price) * (1 - 0.0909));

  return (
    <section className="space-y-12">
      {/* Contenedor principal */}
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Columna izquierda: Título + Imagen */}
        <div className="lg:w-8/12 flex flex-col gap-6">
          {/* Título en md+ */}
          <h2 className="hidden md:block text-2xl font-semibold text-primary">
            {product.title}
          </h2>
          <Carousel images={product.images} alt={product.title} />

          {/* Título en sm- */}
          <h2 className="block md:hidden text-2xl sm:text-3xl font-semibold text-primary">
            {product.title}
          </h2>
        </div>

        {/* Columna derecha: Precio + Texto + Botón */}
        <div className="lg:w-5/12 flex flex-col gap-6 justify-start">
          {/* Bloque con borde izquierdo */}
          <div className="border-l-4 border-accent pl-4 space-y-2">
            {/* Layout md+ */}
            <div className="hidden md:flex items-center justify-between gap-6">
              <p className="text-[26px] font-medium text-[#333333]">
                {formatCurrency(product.price)}
              </p>
              <div className="flex items-center gap-1">
                <HiCurrencyDollar className="w-7 h-7 text-accent" />
                <span className="text-[13px] text-[#A48A7B] font-medium">
                  Precio especial HARD360
                </span>
              </div>
            </div>

            {/* Layout mobile: 2 columnas */}
            <div className="flex md:hidden w-full items-center">
              <div className="w-1/2">
                <p className="text-[28px] font-medium text-[#333333]">
                  {formatCurrency(product.price)}
                </p>
              </div>
              <div className="w-1/2 text-left">
                <div className="flex items-center gap-1">
                  <HiCurrencyDollar className="w-7 h-7 text-accent" />
                  <span className="text-[13px] text-[#A48A7B] font-medium">
                    Precio especial hard360
                  </span>
                </div>
              </div>
            </div>

            {/* Texto adicional */}
            <p className="text-sm text-gray-500 mt-8">
              Precio sin impuestos nacionales:{" "}
              {formatCurrency(priceWithoutTax.toString())}
            </p>
          </div>

          <hr className="h-1 text-gray-200 " />

          <div className="flex flex-col border-l-4 border-stone-500 pl-4 space-y-2">
            <div className="flex items-center gap-2">
              <MdCheckBox className="w-6 h-6 text-[#333333]" />
              <p className="text-[#333333] font-semibold">Precio de lista:</p>
            </div>
            <span className="text-[26px] font-medium text-[#333333]">
              {formatCurrency(
                Math.round(parseInt(product.price) * 1.05).toString()
              )}
            </span>
            <p className="mt-4">
              LLevalo en hasta{" "}
              <span className="font-bold">6 cuotas al mejor precio!!!</span>
            </p>
            <Image
              src="/paymentMethods.webp"
              width={230}
              height={54}
              alt="Tarjetas de pago"
            />
            <select
              name="paymentMethods"
              id="paymentMethods"
              className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
            >
              <option value="12">
                12 cuotas de{" "}
                {(Number(product.price) / 12).toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </option>
              <option value="6">
                6 cuotas de{" "}
                {(Number(product.price) / 6).toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </option>
              <option value="3">
                3 cuotas de{" "}
                {(Number(product.price) / 3).toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </option>
              <option value="1">
                1 cuota de{" "}
                {Number(product.price).toLocaleString("es-AR", {
                  style: "currency",
                  currency: "ARS",
                })}
              </option>
            </select>
          </div>

          <hr className="h-1 text-gray-200 " />

          <div className="flex items-center gap-12">
            <FaTruckArrowRight className="h-16 w-16 bg-gray-100 p-3 rounded-full" />
            <div className="flex flex-col">
              <span className="font-medium text-lg">RECIBÍ TU PRODUCTO</span>
              <span>Seleccioná la forma de entrega</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-4 bg-gray-100 rounded">
              <span className="pl-2">1</span>
              <div className="flex flex-col items-center gap-2 p-2">
                <IoIosArrowUp className="cursor-pointer text-blue-600 font-bold w-4 h-4" />
                <IoIosArrowDown className="cursor-pointer text-blue-600 font-bold w-4 h-4" />
              </div>
            </div>
            <button className="text-white text-xl font-medium bg-blue-500 w-full rounded-md p-3">
              Comprar
            </button>
          </div>

          <hr className="h-1 text-gray-200 " />
        </div>
      </div>

      <h2 className="text-3xl font-semibold my-20 text-gray-800">
        Especificaciones
      </h2>

      {/* Specs abajo de todo */}
      {SpecsComponent && product.specs && (
        <div className="mb-24">
          <SpecsComponent specs={product.specs} />
        </div>
      )}
    </section>
  );
}
