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
import { useCartContext } from "@/app/hooks/useCartContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { FaCheckCircle } from "react-icons/fa";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const {
    productQuantity,
    increaseProductQuantity,
    decreaseProductQuantity,
    addToCart,
  } = useCartContext();

  const router = useRouter();

  const SpecsComponent = specsComponentMap[product.subcategory];

  const priceWithoutTax = Math.round(parseInt(product.price) * (1 - 0.0909));

  const handleAddToCart = () => {
    addToCart(product, productQuantity);

    const toastId = toast.success(
      <div className="w-full flex flex-col items-center gap-2">
        <div className="flex items-center gap-2">
          <FaCheckCircle className="text-green-500 w-5 h-5" />
          <span>Producto agregado al carrito</span>
        </div>
        <button
          onClick={() => {
            toast.dismiss(toastId); // ✅ Cerrar este toast específico
            router.push("/carrito"); // ✅ Redirigir
          }}
          className="mx-auto bg-orange-700 hover:bg-orange-800 rounded-sm px-4 py-1 text-sm text-white font-semibold cursor-pointer"
        >
          Ir al carrito
        </button>
      </div>,
      { position: "top-right", autoClose: 5000, icon: false }
    );
  };

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
                {formatCurrency(
                  Math.floor(
                    (Number(product.price) / 100 / 12) * 100
                  ).toString()
                )}
              </option>
              <option value="6">
                6 cuotas de{" "}
                {formatCurrency(
                  Math.floor((Number(product.price) / 100 / 6) * 100).toString()
                )}
              </option>
              <option value="3">
                3 cuotas de{" "}
                {formatCurrency(
                  Math.floor((Number(product.price) / 100 / 3) * 100).toString()
                )}
              </option>
              <option value="1">
                1 cuota de {formatCurrency(product.price)}
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
            <div className="flex items-center gap-2 bg-gray-100 rounded px-1">
              <span className="w-6 text-center">{productQuantity}</span>
              <div className="flex flex-col items-center gap-2 p-2">
                <IoIosArrowUp
                  className="cursor-pointer text-blue-600 font-bold w-4 h-4 select-none"
                  onClick={increaseProductQuantity}
                  onMouseDown={(e) => e.preventDefault()}
                />
                <IoIosArrowDown
                  className="cursor-pointer text-blue-600 font-bold w-4 h-4 select-none"
                  onClick={decreaseProductQuantity}
                  onMouseDown={(e) => e.preventDefault()}
                />
              </div>
            </div>
            <button
              className="text-white text-xl font-medium bg-blue-500 hover:bg-blue-700 transition-colors duration-300 w-full rounded-md p-3 cursor-pointer"
              onClick={handleAddToCart}
            >
              Agregar al carrito
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
