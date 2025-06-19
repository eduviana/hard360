import { FaTv, FaBolt, FaBoxOpen } from "react-icons/fa";
import { MdScreenRotation, MdColorLens, MdGraphicEq } from "react-icons/md";
import { TelevisoresSpecs } from "./televisoresSpecs";
import SpecsSection from "../../SpecsSection";

export default function TelevisoresSpecsView({ specs }: { specs: TelevisoresSpecs }) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">Especificaciones</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Pantalla"
          icon={<FaTv className="w-5 h-5" />}
          items={[
            { label: "Tipo de Panel", value: specs.tipoPanel },
            { label: "Resolución", value: specs.resolucion },
            { label: "Curvo", value: specs.curvo },
          ]}
        />
        <SpecsSection
          title="Rendimiento"
          icon={<MdGraphicEq className="w-5 h-5" />}
          items={[
            { label: "Frecuencia de Actualización", value: specs.frecuenciaActualizacion },
            { label: "Tiempo de Respuesta", value: specs.tiempoRespuesta },
            { label: "Colores", value: specs.colores },
          ]}
        />
        <SpecsSection
          title="Conectividad y Software"
          icon={<MdScreenRotation className="w-5 h-5" />}
          items={[
            { label: "Conectividad", value: specs.conectividad },
            { label: "Software Incluido", value: specs.softwareIncluido },
          ]}
        />
        <SpecsSection
          title="Multimedia"
          icon={<FaBolt className="w-5 h-5" />}
          items={[
            { label: "Parlantes", value: specs.parlantes },
            { label: "HDR", value: specs.hdr },
            { label: "FreeSync", value: specs.freesync },
          ]}
        />
        <SpecsSection
          title="Contenido de la Caja"
          icon={<FaBoxOpen className="w-5 h-5" />}
          items={[
            { label: "Contenido de la Caja", value: specs.contenidoCaja },
            { label: "Tipo de Uso", value: specs.tipoUso },
          ]}
        />
      </div>
    </div>
  );
}