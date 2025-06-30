import { FaMemory, FaPlug } from "react-icons/fa";
import { MdVideoSettings } from "react-icons/md";
import { NvidiaSpecs } from "./nvidiaSpecs";
import SpecsSection from "../../SpecsSection";

export default function NvidiaSpecsView({ specs }: { specs: NvidiaSpecs }) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Memoria y Rendimiento"
          icon={<FaMemory className="w-5 h-5" />}
          items={[
            { label: "Memoria", value: specs.memoria },
            { label: "Interfaz", value: specs.interfaz },
            { label: "Reloj base", value: specs.relojBase },
            { label: "Reloj boost", value: specs.relojBoost },
            { label: "Velocidad memoria", value: specs.velocidadMemoria },
            { label: "Ancho de banda", value: specs.anchoBanda },
            { label: "CUDA Cores", value: specs.cudaCores },
          ]}
        />

        <SpecsSection
          title="Puertos y Conectividad"
          icon={<MdVideoSettings className="w-5 h-5" />}
          items={[
            { label: "PCIe", value: specs.pcie },
            { label: "HDMI", value: specs.hdmi },
            { label: "DisplayPort", value: specs.displayPort },
            ...(specs.dvi ? [{ label: "DVI", value: specs.dvi }] : []), // 👈 esta línea evita el error
            { label: "Resolución máx.", value: specs.resolucionMaxima },
            { label: "Monitores soportados", value: specs.monitoresSoportados },
          ]}
        />

        <SpecsSection
          title="Tamaño y Consumo"
          icon={<FaPlug className="w-5 h-5" />}
          items={[
            { label: "Dimensiones", value: specs.dimensiones },
            { label: "Altura", value: specs.altura },
            { label: "Consumo", value: specs.consumo },
            { label: "Fuente recomendada", value: specs.fuenteRecomendada },
            { label: "Conector", value: specs.conector },
          ]}
        />
      </div>
    </div>
  );
}
