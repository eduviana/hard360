import {
  MdOutlineMemory,
  MdSettings,
  MdStorage,
  MdOutlineRouter,
  MdSpeaker,
} from "react-icons/md";
import SpecsSection from "../../SpecsSection";
import { MotherIntelSpecs } from "./motherIntelSpecs";

export default function MotherIntelSpecsView({
  specs,
}: {
  specs: MotherIntelSpecs;
}) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <SpecsSection
          title="Procesador y Chipset"
          icon={<MdSettings className="w-5 h-5" />}
          items={[
            { label: "Socket", value: specs.procesadorChipset.socket },
            {
              label: "Compatibilidad",
              value: specs.procesadorChipset.compatibilidad,
            },
            { label: "Chipset", value: specs.procesadorChipset.chipset },
          ]}
        />

        <SpecsSection
          title="Memoria"
          icon={<MdOutlineMemory className="w-5 h-5" />}
          items={[
            { label: "Slots", value: specs.memoria.slots },
            { label: "Capacidad máxima", value: specs.memoria.capacidadMaxima },
            { label: "Frecuencia", value: specs.memoria.frecuencia },
            { label: "Soporte", value: specs.memoria.soporte },
          ]}
        />

        <SpecsSection
          title="Gráficos Integrados"
          icon={<MdSettings className="w-5 h-5" />}
          items={[
            { label: "Salidas", value: specs.graficosIntegrados.salidas },
            {
              label: "Resolución máxima",
              value: specs.graficosIntegrados.resolucionMaxima,
            },
          ]}
        />

        <SpecsSection
          title="Almacenamiento"
          icon={<MdStorage className="w-5 h-5" />}
          items={[
            { label: "M.2", value: specs.almacenamiento.m2 },
            { label: "SATA", value: specs.almacenamiento.sata },
          ]}
        />

        <SpecsSection
          title="Expansión y Conectividad"
          icon={<MdOutlineRouter className="w-5 h-5" />}
          items={[
            {
              label: "PCI Express",
              value: specs.expansionConectividad.pciExpress,
            },
            {
              label: "Red Inalámbrica",
              value: specs.expansionConectividad.redInalambrica,
            },
            { label: "LAN", value: specs.expansionConectividad.lan },
          ]}
        />

        <SpecsSection
          title="Puertos y Audio"
          icon={<MdSpeaker className="w-5 h-5" />}
          items={[
            { label: "USB", value: specs.puertosAudio.usb },
            { label: "Audio", value: specs.puertosAudio.audio },
            { label: "RGB", value: specs.puertosAudio.rgb },
          ]}
        />
      </div>
    </div>
  );
}
