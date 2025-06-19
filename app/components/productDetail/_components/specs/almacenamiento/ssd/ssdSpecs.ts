export type SsdSpecs = {
  tipo: string;
  capacidad: string;
  formato: string; // Ej: "2.5\"", "M.2 2280"
  interfaz: string; // Ej: "SATA III", "PCIe Gen3 x4"
  velocidadLectura: string;
  velocidadEscritura: string;
  cache: string; // Ej: "No", "512MB DRAM"
  tbw: string; // Ej: "600 TBW"
  mtbf: string; // Ej: "1.5 millones de horas"
  consumo: string; // Ej: "2.5W"
};