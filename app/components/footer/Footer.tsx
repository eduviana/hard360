import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";

export const Footer = () => {
  return (
    <div className="bg-text-muted pt-20 pb-6">
      <div className="custom-container">
        {/* Wrapper de las dos columnas */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-12">
          {/* Columna izquierda */}
          <div className="flex flex-col">
            <h4 className="text-green-600 text-[15px] font-medium mb-5">
              ATENCIÓN AL CLIENTE
            </h4>
            <span className="text-[14px] text-white/70">0810-444-8745</span>
            <span className="text-[14px] text-white/70 mb-5">
              consultas@hard360.com.ar
            </span>
            <span className="text-[14px] text-white/70">
              Whastapp +54 11 3567-1087
            </span>
            <span className="text-[14px] text-white/70 mb-5">
              Lunes a Viernes de 9 a 18hs.
            </span>

            <h4 className="text-green-600 text-[15px] font-medium mb-5">
              HARD360 PICKUP POINT
            </h4>
            <div className="flex items-center mb-5 gap-1">
              <span className="text-[14px] font-semibold text-[#EEEEEE]">
                Buenos Aires:
              </span>
              <span className="text-white/70 text-[14px]">
                Lunes a Viernes de 10 a 18hs.
              </span>
            </div>
            <div className="flex items-center gap-1">
              <span className="text-[14px] font-semibold text-[#EEEEEE]">
                Córdoba:
              </span>
              <span className="text-white/70 text-[14px]">
                Lunes a Viernes de 10 a 18hs.
              </span>
            </div>
          </div>

          {/* Columna derecha */}
          <div className="mt-4 md:mt-0 flex flex-col">
            <span className="text-white text-base font-medium uppercase mb-5">
              SÉ EL PRIMERO EN ENTERARTE
            </span>
            <span className="text-[15px] text-white/90 mb-5">
              Suscribite y recibí las mejores promos!
            </span>
            <div className="relative w-full mb-5">
              <input
                type="text"
                placeholder="dirección de email..."
                className="bg-white p-2.5 pr-10 rounded-sm w-full md:w-[400px]"
              />
              <div className="absolute right-0 top-0 h-full w-12 bg-emeraldtext-green-600 flex items-center justify-center cursor-pointer rounded-sm">
                <BiSolidRightArrow className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-emeraldtext-green-600 rounded-full flex items-center justify-center">
                <FaFacebookF className="text-white text-3xl" />
              </div>
              <div className="w-12 h-12 bg-emeraldtext-green-600 rounded-full flex items-center justify-center">
                <FaInstagram className="text-white text-3xl" />
              </div>
              <div className="w-12 h-12 bg-emeraldtext-green-600 rounded-full flex items-center justify-center">
                <FaYoutube className="text-white text-3xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center mt-16">
          <p className="text-[14px] text-white/90">
            Copyright © 2025 - Hard360. Córdoba, Argentina.
          </p>
        </div>
      </div>
    </div>
  );
};
