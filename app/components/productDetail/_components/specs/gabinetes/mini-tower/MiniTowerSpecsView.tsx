import {
  MdOutlineCategory,
  MdOutlineSettingsInputComponent,
  MdStorage,
  MdStraighten,
} from "react-icons/md";
import SpecsSection from "../../SpecsSection";
import { MiniTowerSpecs } from "./miniTowerSpecs";



export default function MiniTowerSpecsView({ specs }: { specs: MiniTowerSpecs }) {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        <SpecsSection
          title="Diseño y Compatibilidad"
          icon={<MdOutlineCategory className="w-5 h-5" />}
          items={[
            { label: "Tipo", value: specs.diseñoYCompatibilidad.tipo },
            { label: "Material", value: specs.diseñoYCompatibilidad.material },
            { label: "Soporte de placas base", value: specs.diseñoYCompatibilidad.soporteDePlacasBase },
            { label: "Slots de expansión", value: specs.diseñoYCompatibilidad.slotsDeExpansion.toString() },
          ]}
        />

        <SpecsSection
          title="Ventilación y Refrigeración"
          icon={<MdOutlineSettingsInputComponent className="w-5 h-5" />}
          items={[
            { label: "Soporte para radiadores", value: specs.ventilacionRefrigeracion.soporteRadiadores },
            { label: "Ventiladores soportados - Superior", value: specs.ventilacionRefrigeracion.soporteVentiladores.superior },
            { label: "Ventiladores soportados - Frontal", value: specs.ventilacionRefrigeracion.soporteVentiladores.frontal },
            { label: "Ventiladores soportados - Trasero", value: specs.ventilacionRefrigeracion.soporteVentiladores.trasero },
            { label: "Ventiladores preinstalados - Frontal", value: specs.ventilacionRefrigeracion.ventiladoresPreinstalados.frontal },
            { label: "Ventiladores preinstalados - Trasero", value: specs.ventilacionRefrigeracion.ventiladoresPreinstalados.trasero },
          ]}
        />

        <SpecsSection
          title="Almacenamiento y Conectividad"
          icon={<MdStorage className="w-5 h-5" />}
          items={[
            { label: "Bahías de almacenamiento", value: specs.almacenamientoConectividad.bahiasAlmacenamiento },
            { label: "Puertos de conexión", value: specs.almacenamientoConectividad.puertosConexion },
          ]}
        />

        <SpecsSection
          title="Dimensiones y Espacio Interno"
          icon={<MdStraighten className="w-5 h-5" />}
          items={[
            { label: "Dimensiones", value: specs.dimensionesEspacioInterno.dimensiones },
            { label: "Peso", value: specs.dimensionesEspacioInterno.peso },
            { label: "Altura del disipador de CPU", value: specs.dimensionesEspacioInterno.limitaciones.alturaDisipadorCPU },
            { label: "Longitud de la tarjeta gráfica", value: specs.dimensionesEspacioInterno.limitaciones.longitudTarjetaGrafica },
            { label: "Longitud de la fuente de alimentación", value: specs.dimensionesEspacioInterno.limitaciones.longitudFuenteAlimentacion },
          ]}
        />
      </div>
    </div>
  );
}