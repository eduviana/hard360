import { NotebookSpecs } from "@/app/components/productDetail/_components/specs/equipos/notebooks/notebookSpecs";
import {
  MdMemory,
  MdStorage,
  MdDesktopMac,
  MdWifi,
  MdSdStorage,
  MdUsb,
  MdInfoOutline,
  MdVerified,
} from "react-icons/md";
import { FaWindows } from "react-icons/fa";
import SpecsSection from "../../SpecsSection";


export default function NotebookSpecsView({ specs }: { specs: NotebookSpecs }) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Especificaciones
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Procesador"
          icon={<MdMemory className="w-5 h-5" />}
          items={[
            { label: "Marca", value: specs.procesador.marca },
            { label: "Modelo", value: specs.procesador.modelo },
            { label: "Núcleos", value: specs.procesador.nucleos },
            { label: "Frecuencia", value: specs.procesador.frecuencia },
            { label: "Cache", value: specs.procesador.cache },
          ]}
        />

        <SpecsSection
          title="Memoria RAM"
          icon={<MdStorage className="w-5 h-5" />}
          items={[
            { label: "Capacidad", value: specs.memoriaRam.capacidad },
            { label: "Formato", value: specs.memoriaRam.formato },
            { label: "Expandible", value: specs.memoriaRam.expandible },
          ]}
        />

        <SpecsSection
          title="Pantalla"
          icon={<MdDesktopMac className="w-5 h-5" />}
          items={[
            { label: "Resolución", value: specs.pantalla.resolucion },
            { label: "Tecnología", value: specs.pantalla.tecnologia },
          ]}
        />

        <SpecsSection
          title="Conectividad"
          icon={<MdWifi className="w-5 h-5" />}
          items={[
            { label: "Wi-Fi", value: specs.conectividad.wifi },
            { label: "Bluetooth", value: specs.conectividad.bluetooth },
          ]}
        />

        <SpecsSection
          title="Almacenamiento"
          icon={<MdSdStorage className="w-5 h-5" />}
          items={[
            { label: "Disco", value: specs.almacenamiento.disco },
            { label: "Tipo", value: specs.almacenamiento.tipo },
            { label: "Lectura", value: specs.almacenamiento.lectura },
            { label: "Escritura", value: specs.almacenamiento.escritura },
          ]}
        />

        <SpecsSection
          title="Puertos"
          icon={<MdUsb className="w-5 h-5" />}
          items={[
            { label: "USB 2.0", value: specs.puertos.usb2 },
            { label: "HDMI", value: specs.puertos.hdmi },
            { label: "Audio/Mic", value: specs.puertos.audioMic },
          ]}
        />

        <SpecsSection
          title="Sistema Operativo"
          icon={<FaWindows className="w-5 h-5" />}
          items={[
            {
              label: "Sistema",
              value: `${specs.sistemaOperativo.nombre} ${specs.sistemaOperativo.version}`,
            },
          ]}
        />

        <SpecsSection
          title="Otras Características"
          icon={<MdInfoOutline className="w-5 h-5" />}
          items={[
            { label: "Teclado", value: specs.otrasCaracteristicas.teclado },
            {
              label: "Touchscreen",
              value: specs.otrasCaracteristicas.touchscreen,
            },
            {
              label: "Teclado numérico",
              value: specs.otrasCaracteristicas.tecladoNumerico,
            },
            {
              label: "Sensor dactilar",
              value: specs.otrasCaracteristicas.sensorDactilar,
            },
            {
              label: "Cámara web",
              value: specs.otrasCaracteristicas.camaraWeb,
            },
          ]}
        />

        <SpecsSection
          title="Garantía"
          icon={<MdVerified className="w-5 h-5" />}
          items={[
            {
              label: "Tipo",
              value: `${specs.garantia.tipo} - ${specs.garantia.plazo}`,
            },
          ]}
        />
      </div>
    </div>
  );
}
