import { MdVideocam, MdHighQuality, MdCable } from "react-icons/md";
import SpecsSection from "../../SpecsSection";
import { ProyectoresSpecs } from "./proyectoresSpecs";

export default function ProyectoresSpecsView({
  specs,
}: {
  specs: ProyectoresSpecs;
}) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Resolución y Brillo"
          icon={<MdHighQuality className="w-5 h-5" />}
          items={[
            { label: "Resolución Nativa", value: specs.resolucionNativa },
            { label: "Brillo", value: specs.brillo },
            { label: "Contraste", value: specs.contraste },
          ]}
        />
        <SpecsSection
          title="Características"
          icon={<MdVideocam className="w-5 h-5" />}
          items={[
            { label: "Tipo de Proyector", value: specs.tipoProyector },
            { label: "Vida Útil de Lámpara", value: specs.vidaUtilLampara },
          ]}
        />
        <SpecsSection
          title="Conectividad y Proyección"
          icon={<MdCable className="w-5 h-5" />}
          items={[
            { label: "Conectividad", value: specs.conectividad },
            {
              label: "Distancia de Proyección",
              value: specs.distanciaProyeccion,
            },
            { label: "Tamaño de Proyección", value: specs.tamañoProyeccion },
          ]}
        />
      </div>
    </div>
  );
}
