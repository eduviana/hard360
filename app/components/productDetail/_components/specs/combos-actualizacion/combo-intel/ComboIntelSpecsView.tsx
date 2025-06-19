import React from "react";
import { MdMemory, MdDesktopMac, MdAcUnit } from "react-icons/md";
import SpecsSection from "../../SpecsSection";
import { ComboIntelSpecs } from "./comboIntelSpecs";


interface ComboIntelSpecsViewProps {
  specs: ComboIntelSpecs;
}

export default function ComboIntelSpecsView({ specs }: ComboIntelSpecsViewProps) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Especificaciones Combo Intel
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Procesador"
          icon={<MdMemory className="w-5 h-5" />}
          items={[
            { label: "Modelo", value: specs.procesador.modelo },
            { label: "Núcleos", value: specs.procesador.nucleos },
            { label: "Hilos", value: specs.procesador.hilos },
            { label: "Frecuencia Base", value: specs.procesador.frecuenciaBase },
            { label: "Frecuencia Máxima", value: specs.procesador.frecuenciaMaxima },
            { label: "Caché", value: specs.procesador.cache },
            { label: "Gráficos Integrados", value: specs.procesador.graficosIntegrados },
          ]}
        />
        <SpecsSection
          title="Motherboard"
          icon={<MdDesktopMac className="w-5 h-5" />}
          items={[
            { label: "Modelo", value: specs.motherboard.modelo },
            { label: "Chipset", value: specs.motherboard.chipset },
            { label: "Socket", value: specs.motherboard.socket },
            { label: "Factor Forma", value: specs.motherboard.factorForma },
            { label: "Soporte RAM", value: specs.motherboard.soporteRam },
            { label: "Slots RAM", value: specs.motherboard.slotsRam },
            { label: "Máx RAM", value: specs.motherboard.maxRam },
          ]}
        />
        <SpecsSection
          title="Refrigeración"
          icon={<MdAcUnit  className="w-5 h-5" />}
          items={[
            { label: "Tipo", value: specs.refrigeracion.tipo },
            { label: "Incluye", value: specs.refrigeracion.incluye },
          ]}
        />
      </div>
    </div>
  );
}