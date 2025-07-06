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

  const totalAmount = cartItems.reduce(
    (total, item) => total + parseInt(item.price) * item.quantity,
    0
  );

  return (
    <div className="custom-container py-6 min-h-[60vh] flex flex-col 2xl:flex-row gap-8">
      <div className="flex-grow space-y-4">
        <h2 className="text-lg font-semibold mb-6 text-left">
          Descripción de tu pedido:
        </h2>

        {cartItems.length === 0 ? (
          <div className="flex-grow flex items-center justify-center">
            <p className="text-gray-500 text-lg">Tu carrito está vacío.</p>
          </div>
        ) : (
          <>
            <div className="hidden md:grid grid-cols-12 gap-4 text-sm font-semibold text-gray-600 uppercase">
              <div className="col-span-5">Producto</div>
              <div className="col-span-2 text-center">Precio</div>
              <div className="col-span-2 text-center">Cantidad</div>
              <div className="col-span-2 text-center">Subtotal</div>
              <div className="col-span-1 text-center"></div>
            </div>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white py-1 rounded-2xl shadow grid grid-cols-1 md:grid-cols-12 gap-4 items-center"
              >
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
                        <FiChevronUp size={18} className="cursor-pointer" />
                      </button>
                      <button
                        onClick={() => decreaseProductQuantity(item.id)}
                        className="text-gray-500 hover:text-gray-700 p-0 leading-none"
                        aria-label="Disminuir cantidad"
                      >
                        <FiChevronDown size={18} className="cursor-pointer" />
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
                    <FiTrash2 className="text-red-700 cursor-pointer" />
                  </button>
                </div>

                <div className="md:hidden space-y-2">
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

                  <div className="flex justify-between items-start text-sm text-gray-700 mt-2">
                    <div className="flex flex-col items-center justify-start min-w-[80px]">
                      <p className="text-xs text-gray-500 mb-1">Precio</p>
                      <div className="h-6 flex items-center">
                        <p className="font-medium">
                          {formatCurrency(item.price)}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-start min-w-[100px]">
                      <p className="text-xs text-gray-500 mb-1">Cantidad</p>
                      <div className="flex items-center justify-center h-6">
                        <p className="font-medium text-center">
                          {item.quantity}
                        </p>
                        <div className="flex flex-col items-center justify-center ml-2">
                          <button
                            onClick={() => increaseProductQuantity(item.id)}
                            className="text-gray-500 hover:text-gray-700 p-0 leading-none"
                            aria-label="Aumentar cantidad"
                          >
                            <FiChevronUp size={14} className="cursor-pointer" />
                          </button>
                          <button
                            onClick={() => decreaseProductQuantity(item.id)}
                            className="text-gray-500 hover:text-gray-700 p-0 leading-none"
                            aria-label="Disminuir cantidad"
                          >
                            <FiChevronDown
                              size={14}
                              className="cursor-pointer"
                            />
                          </button>
                        </div>
                      </div>
                    </div>

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

                  <div className="flex justify-end mt-4 mr-4">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-500 hover:text-red-600 text-xl transition"
                      aria-label="Quitar producto"
                    >
                      <FiTrash2 className="text-red-700 cursor-pointer" />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            <div className="flex justify-center mt-8">
              <button
                onClick={clearCart}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-xl text-base font-semibold transition"
              >
                Vaciar Carrito
              </button>
            </div>
          </>
        )}
      </div>

      {/* Resumen de compra 2xl+ */}
      {/* Resumen de compra - Visible en todos los breakpoints, ubicación diferente según tamaño */}
      <aside className="w-full 2xl:w-96 p-6 bg-white rounded-2xl shadow h-fit mt-8 2xl:mt-0">
        <h3 className="text-lg font-semibold text-center mb-6">Tu compra</h3>

        <p className="text-sm text-text-secondary font-bold mb-2">
          ¿Tenés un cupón de descuento?
        </p>
        <input
          type="text"
          placeholder="Código del cupón"
          className="w-full border text-sm border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none"
        />

        <div className="flex justify-between gap-2 mb-6">
          <button className="bg-accent text-white px-8 py-2 rounded-sm text-sm font-bold hover:bg-green-600 transition-colors duration-300 cursor-pointer">
            Aplicar
          </button>
          <button className="bg-accent text-white px-8 py-2 rounded-sm text-sm font-bold hover:bg-green-600 transition-colors duration-300 cursor-pointer">
            Quitar
          </button>
        </div>

        <div className="flex justify-between text-sm font-medium text-gray-700 mb-10">
          <span>Productos</span>
          <span>{formatCurrency(totalAmount.toString())}</span>
        </div>

        <hr className="border-gray-300 mb-5" />

        <div className="flex justify-between text-lg font-bold text-gray-900 mb-5">
          <span>Total</span>
          <span>{formatCurrency(totalAmount.toString())}</span>
        </div>

        <button className="w-full bg-accent text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors duration-300 cursor-pointer">
          Finalizar compra
        </button>
      </aside>
    </div>
  );
};

export default Page;
