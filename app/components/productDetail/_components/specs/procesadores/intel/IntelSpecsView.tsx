import {
  MdMemory,
  MdSpeed,
  MdSettings,
} from "react-icons/md";
import SpecsSection from "../../SpecsSection";
import { IntelSpecs } from "./intelSpecs"; // asumo que está en esa ruta

export default function IntelSpecsView({ specs }: { specs: IntelSpecs }) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* 🧠 Procesador */}
        <SpecsSection
          title="Procesador"
          icon={<MdMemory className="w-5 h-5" />}
          items={[
            { label: "Socket", value: specs.socket },
            { label: "Fundición", value: specs.fundicion },
            { label: "Litografía", value: specs.litografia },
            { label: "Transistores", value: specs.transistores },
            { label: "Tamaño del die", value: specs.die },
            { label: "Fecha de lanzamiento", value: specs.fechaLanzamiento },
            { label: "Memoria soportada", value: specs.memoriaSoportada },
            { label: "PCI Express", value: specs.pciExpress },
            { label: "Video integrado", value: specs.videoIntegrado },
            {
              label: "Incluye cooler stock",
              value: specs.incluyeCoolerStock ? "Sí" : "No",
            },
          ]}
        />

        {/* 🚀 Rendimiento */}
        <SpecsSection
          title="Rendimiento"
          icon={<MdSpeed className="w-5 h-5" />}
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
            {
              label: "Multiplicador desbloqueado",
              value: specs.multiplicadorDesbloqueado ? "Sí" : "No",
            },
            { label: "TDP", value: specs.tdp },
          ]}
        />

        {/* 🧠 Caché */}
        <SpecsSection
          title="Caché"
          icon={<MdSettings className="w-5 h-5" />}
          items={[
            { label: "Cache L1", value: specs.cacheL1 },
            { label: "Cache L2", value: specs.cacheL2 },
            { label: "Cache L3", value: specs.cacheL3 },
          ]}
        />
      </div>
    </div>
  );
}
