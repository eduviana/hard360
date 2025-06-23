import {
  MdMemory,
  MdSpeed,
  MdPower,
  MdDesktopWindows,
  MdSettings,
} from "react-icons/md";
import SpecsSection from "../../SpecsSection";
import { IntelSpecs } from "./intelSpecs"; // asumo que está en esa ruta

export default function IntelSpecsView({ specs }: { specs: IntelSpecs }) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Procesador"
          icon={<MdMemory className="w-5 h-5" />}
          items={[
            { label: "Cantidad de núcleos", value: specs.cantidadNucleos },
            {
              label: "Cantidad de subprocesos",
              value: specs.cantidadSubprocesos,
            },
            { label: "Frecuencia base", value: specs.frecuenciaBase },
            {
              label: "Frecuencia turbo máxima",
              value: specs.frecuenciaTurboMaxima,
            },
            { label: "Caché", value: specs.cache },
          ]}
        />

        <SpecsSection
          title="Bus y Consumo"
          icon={<MdSpeed className="w-5 h-5" />}
          items={[
            { label: "Velocidad del bus", value: specs.velocidadBus },
            { label: "TDP", value: specs.tdp },
            {
              label: "Frecuencia Intel Turbo Boost 2.0",
              value: specs.frecuenciaTurboMaxima,
            },
          ]}
        />

        <SpecsSection
          title="Otras especificaciones"
          icon={<MdDesktopWindows className="w-5 h-5" />}
          items={[
            {
              label: "Opciones de video integradas",
              value: specs.videoIntegrado,
            },
            {
              label: "Incluye cooler stock",
              value: specs.incluyeCoolerStock ? "Sí" : "No",
            },
            { label: "Socket", value: specs.socket },
          ]}
        />
      </div>
    </div>
  );
}
