import { NotebookSpecs } from "@/app/components/productDetail/_components/specs/equipos/notebooks/notebookSpecs";
import {
  MdMemory,
  MdStorage,
  MdDesktopMac,
  MdWifi,
  MdSdStorage,
  MdUsb,
  MdInfoOutline,
} from "react-icons/md";
import { FaWindows } from "react-icons/fa";
import SpecsSection from "../../SpecsSection";

export default function NotebookSpecsView({ specs }: { specs: NotebookSpecs }) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Procesador"
          icon={<MdMemory className="w-5 h-5" />}
          items={[
            { label: "Marca", value: specs.procesador.marca },
            { label: "Modelo", value: specs.procesador.modelo },
            { label: "Núcleos", value: specs.procesador.nucleos },
            { label: "Frecuencia", value: specs.procesador.frecuencia },
            { label: "Caché L1", value: specs.procesador.cacheL1 },
            { label: "Caché L2", value: specs.procesador.cacheL2 },
            { label: "Caché L3", value: specs.procesador.cacheL3 },
            { label: "Gráficos", value: specs.procesador.graficos },
            { label: "TDP", value: specs.procesador.tdp },
          ]}
        />

        <SpecsSection
          title="Memoria RAM"
          icon={<MdStorage className="w-5 h-5" />}
          items={[
            { label: "Formato", value: specs.memoriaRam.formato },
            { label: "Tipo", value: specs.memoriaRam.tipo },
            { label: "Capacidad", value: specs.memoriaRam.capacidad },
            { label: "Frecuencia", value: specs.memoriaRam.frecuencia },
            { label: "Expandible", value: specs.memoriaRam.expandible },
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

        {/* <SpecsSection
          title="Puertos"
          icon={<MdUsb className="w-5 h-5" />}
          items={[
            { label: "USB 2.0", value: specs.puertos.usb2 },
            { label: "USB 3.0", value: specs.puertos.usb3 },
            { label: "USB C", value: specs.puertos.usbC },
            { label: "HDMI", value: specs.puertos.hdmi },
            { label: "Audio/Mic", value: specs.puertos.audioMic },
            { label: "Ethernet", value: specs.puertos.ehternet },
          ]}
        /> */}
        <SpecsSection
          title="Puertos"
          icon={<MdUsb className="w-5 h-5" />}
          items={[
            { label: "USB 2.0", value: specs.puertos.usb2 },
            { label: "USB 3.0", value: specs.puertos.usb3 },
            ...(specs.puertos.usbC
              ? [{ label: "USB C", value: specs.puertos.usbC }]
              : []),
            { label: "HDMI", value: specs.puertos.hdmi },
            { label: "Audio/Mic", value: specs.puertos.audioMic },
            { label: "Ethernet", value: specs.puertos.ehternet },
          ]}
        />

        <SpecsSection
          title="Pantalla"
          icon={<MdDesktopMac className="w-5 h-5" />}
          items={[
            { label: "Panel", value: specs.pantalla.panel },
            { label: "Frecuencia", value: specs.pantalla.frecuencia },
            { label: "Resolución", value: specs.pantalla.resolucion },
            { label: "Tecnología", value: specs.pantalla.tecnologia },
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
          title="Conectividad"
          icon={<MdWifi className="w-5 h-5" />}
          items={[
            { label: "Wi-Fi", value: specs.conectividad.wifi },
            { label: "Bluetooth", value: specs.conectividad.bluetooth },
          ]}
        />

        <SpecsSection
          title="Sistema y Garantía"
          icon={<FaWindows className="w-5 h-5" />}
          items={[
            {
              label: "Sistema",
              value: `${specs.sistemaOperativo.nombre} ${specs.sistemaOperativo.version}`,
            },
            {
              label: "Garantía",
              value: `${specs.garantia.tipo} - ${specs.garantia.plazo}`,
            },
          ]}
        />

   
      </div>
    </div>
  );
}
