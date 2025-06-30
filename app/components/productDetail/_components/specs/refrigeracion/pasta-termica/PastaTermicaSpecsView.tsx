import { TbThermometer, TbTemperatureCelsius } from "react-icons/tb";
import { BsFillDropletFill } from "react-icons/bs";
import { PastaTermicaSpecs } from "./pastaTermicaSpecs";
import SpecsSection from "../../SpecsSection";

export default function PastaTermicaSpecsView({
  specs,
}: {
  specs: PastaTermicaSpecs;
}) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Composición"
          icon={<BsFillDropletFill className="w-5 h-5" />}
          items={[
            { label: "Peso", value: specs.peso },
            { label: "Color", value: specs.color },
            { label: "Viscosidad", value: specs.viscosidad },
            {
              label: "Conductividad Eléctrica",
              value: specs.sinConductividadElectrica ? "No" : "Sí",
            },
          ]}
        />
        <SpecsSection
          title="Rendimiento Térmico"
          icon={<TbThermometer className="w-5 h-5" />}
          items={[
            {
              label: "Conductividad Térmica",
              value: specs.conductividadTermica,
            },
            { label: "Resistencia Térmica", value: specs.resistenciaTermica },
          ]}
        />
        <SpecsSection
          title="Temperatura de Operación"
          icon={<TbTemperatureCelsius className="w-5 h-5" />}
          items={[{ label: "Rango", value: specs.temperaturaOperativa }]}
        />
      </div>
    </div>
  );
}
