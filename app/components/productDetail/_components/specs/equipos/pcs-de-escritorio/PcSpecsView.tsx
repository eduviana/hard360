import { PcSpecs } from "@/app/components/productDetail/_components/specs/equipos/pcs-de-escritorio/pcSpecs";

import { MdSdStorage, MdWifi, MdMemory, MdUsb } from "react-icons/md";
import { FaWindows } from "react-icons/fa";
import SpecsSection from "../../SpecsSection";

export default function PcSpecsView({ specs }: { specs: PcSpecs }) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Procesador"
          icon={<MdMemory className="w-6 h-8" />}
          items={[
            { label: "Marca", value: specs.procesador.marca },
            { label: "Modelo", value: specs.procesador.modelo },
            { label: "Núcleos", value: specs.procesador.nucleos },
            { label: "Frecuencia", value: specs.procesador.frecuencia },
            { label: "Caché", value: specs.procesador.cache },
          ]}
        />
        <SpecsSection
          title="Memoria RAM"
          icon={<MdMemory className="w-6 h-8" />}
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
          icon={<MdSdStorage className="w-6 h-8" />}
          items={[
            { label: "Disco", value: specs.almacenamiento.disco },
            { label: "Tipo", value: specs.almacenamiento.tipo },
            { label: "Lectura", value: specs.almacenamiento.lectura },
            { label: "Escritura", value: specs.almacenamiento.escritura },
          ]}
        />

        <SpecsSection
          title="Puertos"
          icon={<MdUsb className="w-6 h-8" />}
          items={[
            { label: "USB 2.0", value: specs.puertos.usb2 },
            { label: "HDMI", value: specs.puertos.hdmi },
            { label: "Audio/Mic", value: specs.puertos.audioMic },
          ]}
        />
        <SpecsSection
          title="Conectividad"
          icon={<MdWifi className="w-6 h-8" />}
          items={[
            { label: "Wi-Fi", value: specs.conectividad.wifi },
            { label: "Bluetooth", value: specs.conectividad.bluetooth },
          ]}
        />

        <SpecsSection
          title="Sistema Operativo"
          icon={<FaWindows className="w-6 h-8" />}
          items={[
            { label: "Nombre", value: specs.sistemaOperativo.nombre },
            { label: "Versión", value: specs.sistemaOperativo.version },
          ]}
        />
      </div>
    </div>
  );
}
