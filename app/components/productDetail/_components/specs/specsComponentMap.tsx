import DiscoExternoSpecsView from "./almacenamiento/disco-externo/DiscoExternoSpecsView";
import HddSpecsView from "./almacenamiento/hdd/HddSpecsView";
import SsdM2SpecsView from "./almacenamiento/ssd-m2/SsdM2SpecsView";
import SsdSpecsView from "./almacenamiento/ssd/SsdSpecsView";
import ComboAmdSpecsView from "./combos-actualizacion/combo-amd/ComboAmdSpecsView";
import ComboIntelSpecsView from "./combos-actualizacion/combo-intel/ComboIntelSpecsView";
import GabineteYFuenteSpecsView from "./combos-actualizacion/gabinete-y-fuente/GabineteYFuenteSpecsView";
import NotebookSpecsView from "./equipos/notebooks/NotebookSpecsView";
import PcSpecsView from "./equipos/pcs-de-escritorio/PcSpecsView";
import FullTowerSpecsView from "./gabinetes/full-tower/FullTowerSpecsView";
import MidTowerSpecsView from "./gabinetes/mid-tower/MidTowerSpecsView";
import MiniTowerSpecsView from "./gabinetes/mini-tower/MiniTowerSpecsView";
import RamSpecsView from "./memoria-ram/RamSpecsView";
import MotherAmdSpecsView from "./motherboards/mother-amd/MotherAmdSpecsView";
import MotherIntelSpecsView from "./motherboards/mother-intel/MotherIntelSpecsView";
import MonitoresSpecsView from "./pantallas/monitores/MonitoresSpecsView";
import ProyectoresSpecsView from "./pantallas/proyectores/ProyectoresSpecsView";
import TelevisoresSpecsView from "./pantallas/televisores/TelevisoresSpecsView";
import NvidiaSpecsView from "./placas-de-video/nvidia/NvidiaSpecsView";
import RadeonSpecsView from "./placas-de-video/radeon/RadeonSpecsView";
import AmdSpecsView from "./procesadores/amd/AmdSpecsView";
import IntelSpecsView from "./procesadores/intel/IntelSpecsView";
import AirCoolingSpecsView from "./refrigeracion/air-cooling/AirCoolingSpecsView";
import FanCoolerSpecsView from "./refrigeracion/fan-cooler/FanCoolerSpecsView";
import PastaTermicaSpecsView from "./refrigeracion/pasta-termica/PastaTermicaSpecsView";
import WaterCoolingSpecsView from "./refrigeracion/water-cooling/WaterCoolingSpecsView";

/* eslint-disable @typescript-eslint/no-explicit-any */
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
  "monitores": ({ specs }: any) => <MonitoresSpecsView specs={specs} />,
  "televisores": ({ specs }: any) => <TelevisoresSpecsView specs={specs} />,
  "proyectores": ({ specs }: any) => <ProyectoresSpecsView specs={specs} />,
  "intel": ({ specs }: any) => <IntelSpecsView specs={specs} />,
  "amd": ({ specs }: any) => <AmdSpecsView specs={specs} />,
  "nvidia": ({ specs }: any) => <NvidiaSpecsView specs={specs} />,
  "radeon": ({ specs }: any) => <RadeonSpecsView specs={specs} />,
  "motherboards-amd": ({ specs }: any) => <MotherAmdSpecsView specs={specs} />,
  "motherboards-intel": ({ specs }: any) => <MotherIntelSpecsView specs={specs} />,
  "full-tower": ({ specs }: any) => <FullTowerSpecsView specs={specs} />,
  "mid-tower": ({ specs }: any) => <MidTowerSpecsView specs={specs} />,
  "mini-tower": ({ specs }: any) => <MiniTowerSpecsView specs={specs} />,
};



