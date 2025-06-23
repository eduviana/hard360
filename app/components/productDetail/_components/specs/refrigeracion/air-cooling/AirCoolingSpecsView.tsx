import {
  MdDeviceThermostat,
  MdOutlineNoiseAware,
  MdSettings,
  MdPrecisionManufacturing,
  MdPower,
} from "react-icons/md";
import { FaMicrochip } from "react-icons/fa";
import { AirCoolingSpecs } from "./airCoolingSpecs";
import SpecsSection from "../../SpecsSection";

export default function AirCoolingSpecsView({
  specs,
}: {
  specs: AirCoolingSpecs;
}) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Ventilador"
          icon={<MdDeviceThermostat className="w-5 h-5" />}
          items={[
            { label: "Dimensiones", value: specs.ventilador.dimensiones },
            { label: "Velocidad", value: specs.ventilador.velocidad },
            { label: "Flujo de aire", value: specs.ventilador.flujoAire },
            { label: "Presión de aire", value: specs.ventilador.presionAire },
            { label: "Nivel de ruido", value: specs.ventilador.nivelRuido },
            { label: "Rodamiento", value: specs.ventilador.rodamiento },
          ]}
        />

        <SpecsSection
          title="Disipador"
          icon={<MdPrecisionManufacturing className="w-5 h-5" />}
          items={[
            {
              label: "Material disipador",
              value: specs.disipador.materialDisipador,
            },
            {
              label: "Material heatpipes",
              value: specs.disipador.materialHeatpipes,
            },
            {
              label: "Cantidad de heatpipes",
              value: `${specs.disipador.cantidadHeatpipes}`,
            },
            { label: "Dimensiones", value: specs.disipador.dimensiones },
          ]}
        />

        <SpecsSection
          title="Conectividad y Alimentación"
          icon={<MdPower className="w-5 h-5" />}
          items={[
            { label: "Conector", value: specs.alimentacion.conector },
            { label: "Voltaje", value: specs.alimentacion.voltaje },
          ]}
        />

        <SpecsSection
          title="Compatibilidad Intel"
          icon={<FaMicrochip className="w-5 h-5" />}
          items={specs.compatibilidad.intel.map((socket) => ({
            label: "Socket",
            value: socket,
          }))}
        />

        <SpecsSection
          title="Compatibilidad AMD"
          icon={<FaMicrochip className="w-5 h-5" />}
          items={specs.compatibilidad.amd.map((socket) => ({
            label: "Socket",
            value: socket,
          }))}
        />
      </div>
    </div>
  );
}
