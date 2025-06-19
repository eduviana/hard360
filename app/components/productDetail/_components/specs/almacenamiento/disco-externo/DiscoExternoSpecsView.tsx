import { FaHdd, FaBolt, FaShieldAlt } from "react-icons/fa";
import { MdSpeed } from "react-icons/md";
import SpecsSection from "../../SpecsSection";
import { DiscoExternoSpecs } from "./discoExternoSpecs";


export default function DiscoExternoSpecsView({ specs }: { specs: DiscoExternoSpecs }) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Especificaciones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Información general */}
        <SpecsSection
          title="Información General"
          icon={<FaHdd className="w-5 h-5" />}
          items={[
            { label: "Tipo", value: specs.tipo },
            { label: "Capacidad", value: specs.capacidad },
            { label: "Formato", value: specs.formato },
            { label: "Interfaz", value: specs.interfaz },
          ]}
        />

        {/* Rendimiento */}
        <SpecsSection
          title="Rendimiento"
          icon={<MdSpeed className="w-5 h-5" />}
          items={[
            { label: "Velocidad de Lectura", value: specs.velocidadLectura },
            { label: "Velocidad de Escritura", value: specs.velocidadEscritura },
            { label: "Cache", value: specs.cache },
            { label: "TBW", value: specs.tbw },
            { label: "MTBF", value: specs.mtbf },
            { label: "Consumo", value: specs.consumo },
          ]}
        />

        {/* Alimentación y compatibilidad */}
        <SpecsSection
          title="Alimentación y Compatibilidad"
          icon={<FaBolt className="w-5 h-5" />}
          items={[
            { label: "Alimentación", value: specs.alimentacion },
            { label: "Compatibilidad", value: specs.compatibilidad },
          ]}
        />

        {/* Extras */}
        <SpecsSection
          title="Extras"
          icon={<FaShieldAlt className="w-5 h-5" />}
          items={[
            { label: "Resistencia a Golpes", value: specs.resistenciaGolpes },
            { label: "Cifrado", value: specs.cifrado },
          ]}
        />
      </div>
    </div>
  );
}