export type SsdM2Specs = {
  tipo: string; // Ej: "NVMe"
  capacidad: string; // Ej: "1 TB"
  formato: string; // Ej: "M.2 2280"
  interfaz: string; // Ej: "PCIe Gen3 x4", "PCIe Gen4 x4"
  velocidadLectura: string; // Ej: "3500 MB/s"
  velocidadEscritura: string; // Ej: "3000 MB/s"
  cache: string; // Ej: "512MB DRAM", "No DRAM", "HMB"
  tbw: string; // Ej: "600 TBW"
  mtbf: string; // Ej: "1.5 millones de horas"
  consumo: string; // Ej: "5.0W"
};