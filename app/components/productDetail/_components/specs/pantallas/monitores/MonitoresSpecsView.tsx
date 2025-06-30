import { MdDisplaySettings } from "react-icons/md";
import { FaPlug, FaGamepad } from "react-icons/fa";
import { MonitoresSpecs } from "./monitoresSpecs";
import SpecsSection from "../../SpecsSection";

export default function MonitoresSpecsView({
  specs,
}: {
  specs: MonitoresSpecs;
}) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Pantalla"
          icon={<MdDisplaySettings className="w-5 h-5" />}
          items={[
            { label: "Tipo de Panel", value: specs.tipoPanel },
            { label: "Resolución", value: specs.resolucion },
            {
              label: "Frecuencia de Actualización",
              value: specs.frecuenciaActualizacion,
            },
            { label: "Tiempo de Respuesta", value: specs.tiempoRespuesta },
            { label: "Colores", value: specs.colores },
          ]}
        />
        <SpecsSection
          title="Uso y Funciones"
          icon={<FaGamepad className="w-5 h-5" />}
          items={[
            { label: "Tipo de Uso", value: specs.tipoUso },
            { label: "Software Incluido", value: specs.softwareIncluido },
            { label: "Curvo", value: specs.curvo },
            { label: "Parlantes", value: specs.parlantes },
          ]}
        />
        <SpecsSection
          title="Conectividad y Extras"
          icon={<FaPlug className="w-5 h-5" />}
          items={[
            { label: "Conectividad", value: specs.conectividad },
            { label: "Contenido de la Caja", value: specs.contenidoCaja },
            { label: "HDR", value: specs.hdr },
            { label: "FreeSync", value: specs.freesync },
          ]}
        />
      </div>
    </div>
  );
}
