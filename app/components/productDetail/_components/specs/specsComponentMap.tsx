
import NotebookSpecsView from "./NotebookSpecsView";

export const specsComponentMap: Record<string, any> = {
  notebooks: ({ specs }: any) => <NotebookSpecsView specs={specs} />,
};