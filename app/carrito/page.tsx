"use client";

import { formatCurrency } from "../helpers/formatCurrency";
import { useCartContext } from "../hooks/useCartContext";
import { FiTrash2, FiChevronUp, FiChevronDown } from "react-icons/fi";

const Page = () => {
  const {
    cartItems,
    removeFromCart,
    clearCart,
    increaseProductQuantity,
    decreaseProductQuantity,
  } = useCartContext();

  return (
    <div className="custom-container py-6 min-h-[60vh] flex flex-col">
      <h2 className="text-lg font-semibold mb-6 text-left">
        Descripción de tu pedido:
      </h2>

      {cartItems.length === 0 ? (
        <div className="flex-grow flex items-center justify-center">
          <p className="text-gray-500 text-lg">Tu carrito está vacío.</p>
        </div>
      ) : (
        <div className="flex-grow space-y-4">
          {/* Encabezados desktop */}
          <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-semibold text-gray-600 uppercase">
            <div className="col-span-5">Producto</div>
            <div className="col-span-2 text-center">Precio</div>
            <div className="col-span-2 text-center">Cantidad</div>
            <div className="col-span-2 text-center">Subtotal</div>
            <div className="col-span-1 text-center"></div>
          </div>

          {/* Productos */}
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="bg-white py-1 rounded-2xl shadow grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
            >
              {/* Desktop */}
              <div className="hidden md:flex items-center gap-4 col-span-5">
                {item.thumbnail && (
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-20 h-20 object-contain rounded-xl"
                  />
                )}
                <div>
                  <h3 className="text-base font-semibold text-gray-800">
                    {item.title}
                  </h3>
                </div>
              </div>

              <div className="hidden md:block col-span-2 text-center font-medium text-gray-700">
                {formatCurrency(item.price)}
              </div>

              <div className="hidden md:block col-span-2 text-center font-medium text-gray-700">
                <div className="flex items-center justify-center gap-4">
                  <span>{item.quantity}</span>
                <div className="flex flex-col">
                  <button
                  onClick={() => increaseProductQuantity(item.id)}
                  className="text-gray-500 hover:text-gray-700 p-0 leading-none"
                  aria-label="Aumentar cantidad"
                >
                  <FiChevronUp size={18} />
                </button>
                <button
                  onClick={() => decreaseProductQuantity(item.id)}
                  className="text-gray-500 hover:text-gray-700 p-0 leading-none"
                  aria-label="Disminuir cantidad"
                >
                  <FiChevronDown size={18} />
                </button>
                </div>
                </div>
              </div>

              <div className="hidden md:block col-span-2 text-center font-bold text-gray-900">
                {formatCurrency(
                  (parseInt(item.price) * item.quantity).toString()
                )}
              </div>

              <div className="hidden md:block col-span-1 text-center">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-500 hover:text-red-600 text-xl transition"
                  aria-label="Quitar producto"
                >
                  <FiTrash2 className="text-red-700"/>
                </button>
              </div>

              {/* Mobile */}
              <div className="md:hidden space-y-2">
                {/* Imagen + Título */}
                <div className="flex items-center gap-4">
                  {item.thumbnail && (
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-20 h-20 object-contain rounded-xl"
                    />
                  )}
                  <div>
                    <h3 className="text-[15px] font-semibold text-gray-800">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Precio + Cantidad + Subtotal */}
                <div className="flex justify-between items-start text-sm text-gray-700 mt-2">
                  {/* Precio */}
                  <div className="flex flex-col items-center justify-start min-w-[80px]">
                    <p className="text-xs text-gray-500 mb-1">Precio</p>
                    <div className="h-6 flex items-center">
                      <p className="font-medium">
                        {formatCurrency(item.price)}
                      </p>
                    </div>
                  </div>

                  {/* Cantidad con controles */}
                  <div className="flex flex-col items-center justify-start min-w-[100px]">
                    <p className="text-xs text-gray-500 mb-1">Cantidad</p>

                    <div className="flex items-center justify-center h-6">
                      <p className="font-medium text-center">{item.quantity}</p>

                      <div className="flex flex-col items-center justify-center ml-2">
                        <button
                          onClick={() => increaseProductQuantity(item.id)}
                          className="text-gray-500 hover:text-gray-700 p-0 leading-none"
                          aria-label="Aumentar cantidad"
                        >
                          <FiChevronUp size={14} />
                        </button>
                        <button
                          onClick={() => decreaseProductQuantity(item.id)}
                          className="text-gray-500 hover:text-gray-700 p-0 leading-none"
                          aria-label="Disminuir cantidad"
                        >
                          <FiChevronDown size={14} />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Subtotal */}
                  <div className="flex flex-col items-center justify-start min-w-[100px]">
                    <p className="text-xs text-gray-500 mb-1">Subtotal</p>
                    <div className="h-6 flex items-center">
                      <p className="font-bold text-gray-900">
                        {formatCurrency(
                          (parseInt(item.price) * item.quantity).toString()
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                {/*Icono */}
                <div className="flex justify-end mt-4 mr-4">
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-gray-500 hover:text-red-600 text-xl transition"
                    aria-label="Quitar producto"
                  >
                    <FiTrash2 className="text-red-700" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Botón Vaciar */}
          <div className="flex justify-center mt-8">
            <button
              onClick={clearCart}
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-base font-semibold transition"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
