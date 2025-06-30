import { WaterCoolingSpecs } from "./waterCoolingSpecs";
import SpecsSection from "../../SpecsSection";
import {
  MdWaterDrop,
  MdDeviceThermostat,
  MdSettings,
} from "react-icons/md";
import { FaFan, FaMicrochip } from "react-icons/fa";

export default function WaterCoolingSpecsView({
  specs,
}: {
  specs: WaterCoolingSpecs;
}) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="General"
          icon={<MdDeviceThermostat className="w-5 h-5" />}
          items={[
            { label: "Color Exterior", value: specs.color },
            { label: "Tipo de Enfriador", value: specs.tipoEnfriador },
            { label: "Serie", value: specs.serie },
          ]}
        />

        <SpecsSection
          title="Compatibilidad"
          icon={<FaMicrochip className="w-5 h-5" />}
          items={[
            { label: "Sockets Intel", value: specs.sockets.intel.join(", ") },
            { label: "Sockets AMD", value: specs.sockets.amd.join(", ") },
          ]}
        />

        <SpecsSection
          title="Radiador"
          icon={<MdSettings className="w-5 h-5" />}
          items={[
            { label: "Material", value: specs.radiador.material },
            { label: "Dimensiones", value: specs.radiador.dimensiones },
            { label: "Tamaño", value: specs.radiador.tamaño },
          ]}
        />

        <SpecsSection
          title="Bomba"
          icon={<MdWaterDrop className="w-5 h-5" />}
          items={[
            { label: "Dimensiones", value: specs.bomba.dimensiones },
            { label: "MTTF", value: specs.bomba.mttf },
            { label: "Nivel de Ruido", value: specs.bomba.nivelRuido },
            { label: "Conector", value: specs.bomba.conector },
            { label: "Voltaje", value: specs.bomba.voltaje },
            { label: "Consumo", value: specs.bomba.consumo },
          ]}
        />

        <SpecsSection
          title="Ventilador"
          icon={<FaFan className="w-5 h-5" />}
          items={[
            { label: "Dimensiones", value: specs.ventilador.dimensiones },
            { label: "Cantidad", value: specs.ventilador.cantidad },
            { label: "Tipo de LED", value: specs.ventilador.tipoLed },
            { label: "Velocidad", value: specs.ventilador.velocidad },
            { label: "Flujo de Aire", value: specs.ventilador.flujoAire },
            { label: "Nivel de Ruido", value: specs.ventilador.nivelRuido },
            { label: "Presión", value: specs.ventilador.presion },
            { label: "MTTF", value: specs.ventilador.mttf },
            { label: "Conector", value: specs.ventilador.conector },
            { label: "Voltaje", value: specs.ventilador.voltaje },
            {
              label: "Corriente Ventilador",
              value: specs.ventilador.corrienteVentilador,
            },
            {
              label: "Corriente Total",
              value: specs.ventilador.corrienteTotal,
            },
          ]}
        />
      </div>
    </div>
  );
}
