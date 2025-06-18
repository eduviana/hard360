
import NotebookSpecsView from "./equipos/NotebookSpecsView";
import PcSpecsView from "./equipos/PcSpecsView";
import RamSpecsView from "./memoria-ram/RamSpecsView";

export const specsComponentMap: Record<string, any> = {
  notebooks: ({ specs }: any) => <NotebookSpecsView specs={specs} />,
  "pcs-de-escritorio": ({ specs }: any) => <PcSpecsView specs={specs} />,
  "de-escritorio": ({ specs }: any) => <RamSpecsView specs={specs} />,
  "de-notebook": ({ specs }: any) => <RamSpecsView specs={specs} />,
};