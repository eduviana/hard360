import DiscoExternoSpecsView from "./almacenamiento/disco-externo/DiscoExternoSpecsView";
import HddSpecsView from "./almacenamiento/hdd/HddSpecsView";
import SsdM2SpecsView from "./almacenamiento/ssd-m2/SsdM2SpecsView";
import SsdSpecsView from "./almacenamiento/ssd/SsdSpecsView";
import ComboAmdSpecsView from "./combos-actualizacion/combo-amd/ComboAmdSpecsView";
import ComboIntelSpecsView from "./combos-actualizacion/combo-intel/ComboIntelSpecsView";
import GabineteYFuenteSpecsView from "./combos-actualizacion/gabinete-y-fuente/GabineteYFuenteSpecsView";
import NotebookSpecsView from "./equipos/notebooks/NotebookSpecsView";
import PcSpecsView from "./equipos/pcs-de-escritorio/PcSpecsView";
import RamSpecsView from "./memoria-ram/RamSpecsView";
import AirCoolingSpecsView from "./refrigeracion/air-cooling/AirCoolingSpecsView";
import FanCoolerSpecsView from "./refrigeracion/fan-cooler/FanCoolerSpecsView";
import PastaTermicaSpecsView from "./refrigeracion/pasta-termica/PastaTermicaSpecsView";
import WaterCoolingSpecsView from "./refrigeracion/water-cooling/WaterCoolingSpecsView";

export const specsComponentMap: Record<string, any> = {
  notebooks: ({ specs }: any) => <NotebookSpecsView specs={specs} />,
  "pcs-de-escritorio": ({ specs }: any) => <PcSpecsView specs={specs} />,
  "de-escritorio": ({ specs }: any) => <RamSpecsView specs={specs} />,
  "de-notebook": ({ specs }: any) => <RamSpecsView specs={specs} />,
  "air-cooling": ({ specs }: any) => <AirCoolingSpecsView specs={specs} />,
  "water-cooling": ({ specs }: any) => <WaterCoolingSpecsView specs={specs} />,
  "pasta-termica": ({ specs }: any) => <PastaTermicaSpecsView specs={specs} />,
  "fan-cooler": ({ specs }: any) => <FanCoolerSpecsView specs={specs} />,
  "combo-amd": ({ specs }: any) => <ComboAmdSpecsView specs={specs} />,
  "combo-intel": ({ specs }: any) => <ComboIntelSpecsView specs={specs} />,
  "gabinete-y-fuente": ({ specs }: any) => <GabineteYFuenteSpecsView specs={specs} />,
  "hdd": ({ specs }: any) => <HddSpecsView specs={specs} />,
  "ssd": ({ specs }: any) => <SsdSpecsView specs={specs} />,
  "ssd-m2": ({ specs }: any) => <SsdM2SpecsView specs={specs} />,
  "disco-externo": ({ specs }: any) => <DiscoExternoSpecsView specs={specs} />,
};


