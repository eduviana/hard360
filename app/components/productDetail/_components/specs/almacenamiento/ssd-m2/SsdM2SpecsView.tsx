import { SsdM2Specs } from "./ssdM2Specs";
import SpecsSection from "../../SpecsSection";
import {
  MdSdStorage,
  MdSpeed,
  MdSettings,
  MdBatteryChargingFull,
} from "react-icons/md";

export default function SsdM2SpecsView({ specs }: { specs: SsdM2Specs }) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="General"
          icon={<MdSdStorage className="w-5 h-5" />}
          items={[
            { label: "Tipo", value: specs.tipo },
            { label: "Capacidad", value: specs.capacidad },
            { label: "Formato", value: specs.formato },
            { label: "Interfaz", value: specs.interfaz },
            { label: "Tipo de caché", value: specs.cache },
          ]}
        />

        <SpecsSection
          title="Rendimiento"
          icon={<MdSpeed className="w-5 h-5" />}
          items={[
            { label: "Lectura", value: specs.velocidadLectura },
            { label: "Escritura", value: specs.velocidadEscritura },
          ]}
        />

        <SpecsSection
          title="Confiabilidad y Consumo"
          icon={<MdBatteryChargingFull className="w-5 h-5" />}
          items={[
            { label: "Consumo", value: specs.consumo },
            { label: "TBW", value: specs.tbw },
            { label: "MTBF", value: specs.mtbf },
          ]}
        />
      </div>
    </div>
  );
}
