import {
  MdSdStorage,
  MdSpeed,
  MdMemory,
  MdDeviceHub,
  MdBatteryChargingFull,
  MdAccessTime,
} from "react-icons/md";
import { SsdSpecs } from "./ssdSpecs";
import SpecsSection from "../../SpecsSection";

export default function SsdSpecsView({ specs }: { specs: SsdSpecs }) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Especificaciones
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Información General"
          icon={<MdSdStorage className="w-5 h-5" />}
          items={[
            { label: "Tipo", value: specs.tipo },
            { label: "Capacidad", value: specs.capacidad },
            { label: "Formato", value: specs.formato },
            { label: "Interfaz", value: specs.interfaz },
          ]}
        />
        <SpecsSection
          title="Rendimiento"
          icon={<MdSpeed className="w-5 h-5" />}
          items={[
            { label: "Lectura", value: specs.velocidadLectura },
            { label: "Escritura", value: specs.velocidadEscritura },
            { label: "Caché", value: specs.cache },
          ]}
        />
        <SpecsSection
          title="Durabilidad y Consumo"
          icon={<MdBatteryChargingFull className="w-5 h-5" />}
          items={[
            { label: "TBW", value: specs.tbw },
            { label: "MTBF", value: specs.mtbf },
            { label: "Consumo", value: specs.consumo },
          ]}
        />
      </div>
    </div>
  );
}