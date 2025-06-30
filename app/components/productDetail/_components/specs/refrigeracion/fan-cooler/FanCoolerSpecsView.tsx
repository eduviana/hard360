import {
  MdPower,
  MdWbIncandescent,
} from "react-icons/md";
import { BsFan } from "react-icons/bs";
import { FanCoolerSpecs } from "./fanCoolerSpecs";
import SpecsSection from "../../SpecsSection";

export default function FanCoolerSpecsView({
  specs,
}: {
  specs: FanCoolerSpecs;
}) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Ventilador"
          icon={<BsFan className="w-5 h-5" />}
          items={[
            { label: "Tamaño", value: specs.tamaño },
            { label: "Velocidad", value: specs.velocidad },
            { label: "Flujo de aire", value: specs.flujoAire },
            { label: "Nivel de ruido", value: specs.nivelRuido },
          ]}
        />
        <SpecsSection
          title="Conectividad y Potencia"
          icon={<MdPower className="w-5 h-5" />}
          items={[
            { label: "Conector", value: specs.conector },
            { label: "Voltaje", value: specs.voltaje },
            { label: "Consumo", value: specs.consumo },
          ]}
        />
        <SpecsSection
          title="Características"
          icon={<MdWbIncandescent className="w-5 h-5" />}
          items={[
            { label: "Rodamiento", value: specs.tipoRodamiento },
            { label: "Vida útil", value: specs.vidaUtil },
            { label: "Iluminación", value: specs.led },
          ]}
        />
      </div>
    </div>
  );
}
