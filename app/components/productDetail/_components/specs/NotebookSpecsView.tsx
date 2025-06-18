import { NotebookSpecs } from "@/app/data/notebookSpecs";
import { MdMemory, MdStorage, MdDesktopMac, MdWifi, MdSdStorage, MdUsb, MdInfoOutline, MdVerified } from "react-icons/md";
import { FaWindows } from "react-icons/fa";

export default function NotebookSpecsView({ specs }: { specs: NotebookSpecs }) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Especificaciones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <MdMemory className="w-5 h-5" /> Procesador
          </h3>
          <div className="rounded-md overflow-hidden">
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              {specs.procesador.marca} {specs.procesador.modelo}
            </p>
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Núcleos: {specs.procesador.nucleos}
            </p>
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Frecuencia: {specs.procesador.frecuencia}
            </p>
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Cache: {specs.procesador.cache}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <MdStorage className="w-5 h-5" /> Memoria RAM
          </h3>
          <div className="rounded-md overflow-hidden">
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Capacidad: {specs.memoriaRam.capacidad}
            </p>
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Formato: {specs.memoriaRam.formato}
            </p>
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Expandible: {specs.memoriaRam.expandible}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <MdDesktopMac className="w-5 h-5" /> Pantalla
          </h3>
          <div className="rounded-md overflow-hidden">
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Resolución: {specs.pantalla.resolucion}
            </p>
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Tecnología: {specs.pantalla.tecnologia}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <MdWifi className="w-5 h-5" /> Conectividad
          </h3>
          <div className="rounded-md overflow-hidden">
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Wi-Fi: {specs.conectividad.wifi}
            </p>
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Bluetooth: {specs.conectividad.bluetooth}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <MdSdStorage className="w-5 h-5" /> Almacenamiento
          </h3>
          <div className="rounded-md overflow-hidden">
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Disco: {specs.almacenamiento.disco}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <MdUsb className="w-5 h-5" /> Puertos
          </h3>
          <div className="rounded-md overflow-hidden">
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              USB 2.0: {specs.puertos.usb2}
            </p>
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              HDMI: {specs.puertos.hdmi}
            </p>
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Audio/Mic: {specs.puertos.audioMic}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <FaWindows className="w-5 h-5" /> Sistema Operativo
          </h3>
          <div className="rounded-md overflow-hidden">
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              {specs.sistemaOperativo.nombre} {specs.sistemaOperativo.version}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <MdInfoOutline className="w-5 h-5" /> Otras Características
          </h3>
          <div className="rounded-md overflow-hidden">
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Teclado: {specs.otrasCaracteristicas.teclado}
            </p>
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Touchscreen: {specs.otrasCaracteristicas.touchscreen}
            </p>
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Teclado numérico: {specs.otrasCaracteristicas.tecladoNumerico}
            </p>
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Sensor dactilar: {specs.otrasCaracteristicas.sensorDactilar}
            </p>
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              Cámara web: {specs.otrasCaracteristicas.camaraWeb}
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
            <MdVerified className="w-5 h-5" /> Garantía
          </h3>
          <div className="rounded-md overflow-hidden">
            <p className="text-gray-700 odd:bg-gray-100 even:bg-gray-50 px-3 py-1">
              {specs.garantia.tipo} - {specs.garantia.plazo}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}