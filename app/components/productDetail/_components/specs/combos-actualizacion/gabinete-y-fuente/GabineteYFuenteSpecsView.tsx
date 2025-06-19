
import { MdPower, MdComputer, MdStorage, MdUsb } from "react-icons/md";
import { GabineteYFuenteSpecs } from "./gabineteYfuenteSpecs";
import SpecsSection from "../../SpecsSection";


export default function GabineteYFuenteSpecsView({
  specs,
}: {
  specs: GabineteYFuenteSpecs;
}) {
  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Especificaciones
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Gabinete"
          icon={<MdComputer className="w-5 h-5" />}
          items={[
            { label: "Formato", value: specs.gabinete.formato },
            { label: "Bahías 3.5\"", value: specs.gabinete.bahias35 },
            { label: "Bahías 2.5\"", value: specs.gabinete.bahias25 },
            { label: "Slots de expansión", value: specs.gabinete.slotsExpansión },
            { label: "Ventiladores incluidos", value: specs.gabinete.ventiladoresIncluidos },
            { label: "Ventana lateral", value: specs.gabinete.ventanaLateral },
            { label: "Color", value: specs.gabinete.color },
            { label: "Dimensiones", value: specs.gabinete.dimensiones },
            { label: "Puertos", value: specs.gabinete.puertosFrontales },
          ]}
        />
       
        <SpecsSection
          title="Fuente de alimentación"
          icon={<MdPower className="w-5 h-5" />}
          items={[
            { label: "Potencia", value: specs.fuente.potencia },
            { label: "Certificación", value: specs.fuente.certificacion },
            { label: "Tipo", value: specs.fuente.tipo },
            { label: "ATX 24-pin", value: specs.fuente.conectores.atx24 },
            { label: "CPU 8-pin", value: specs.fuente.conectores.cpu8 },
            { label: "PCI-E 6+2-pin", value: specs.fuente.conectores.pcie6_8 },
            { label: "SATA", value: specs.fuente.conectores.sata },
            { label: "Molex", value: specs.fuente.conectores.molex },
          ]}
        />
      </div>
    </div>
  );
}