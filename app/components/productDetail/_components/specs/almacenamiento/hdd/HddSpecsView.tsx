import { MdStorage, MdBolt } from "react-icons/md";
import { HddSpecs } from "./hddSpecs";
import SpecsSection from "../../SpecsSection";

export default function HddSpecsView({ specs }: { specs: HddSpecs }) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Almacenamiento"
          icon={<MdStorage className="w-5 h-5" />}
          items={[
            { label: "Capacidad", value: specs.capacidad },
            { label: "Formato", value: specs.formato },
            { label: "Interfaz", value: specs.interfaz },
            { label: "Caché", value: specs.cache },
            { label: "Dimensiones", value: specs.dimensiones },
            { label: "Peso", value: specs.peso },
            { label: "Nivel de ruido", value: specs.ruido },
          ]}
        />

        <SpecsSection
          title="Rendimiento"
          icon={<MdBolt className="w-5 h-5" />}
          items={[
            { label: "Velocidad de rotación", value: specs.velocidadRotacion },
            { label: "Consumo de energía", value: specs.consumoEnergia },
          ]}
        />
      </div>
    </div>
  );
}
