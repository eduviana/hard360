import { MdMemory } from "react-icons/md";
import SpecsSection from "../SpecsSection";
import { RamSpecs } from "@/app/components/productDetail/_components/specs/memoria-ram/ramSpecs";


export default function RamSpecsView({ specs }: { specs: RamSpecs }) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Memoria RAM"
          icon={<MdMemory className="w-5 h-5" />}
          items={[
            { label: "Capacidad", value: specs.capacidad },
            { label: "Interfaz", value: specs.interfaz },
            { label: "Frecuencia", value: specs.frecuencia },
            { label: "Tipo", value: specs.tipo },
          ]}
        />
        
      </div>
    </div>
  );
}