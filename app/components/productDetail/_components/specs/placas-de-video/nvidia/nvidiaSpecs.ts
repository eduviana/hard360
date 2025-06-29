export type NvidiaSpecs = {
  // Memoria y Rendimiento
  memoria: string;
  interfaz: string;
  relojBase: string;
  relojBoost: string;
  velocidadMemoria: string;
  anchoBanda: string;
  cudaCores: string;

  // Puertos y Conectividad
  pcie: string;
  hdmi: string;
  displayPort: string;
  dvi?: string;
  resolucionMaxima: string;
  monitoresSoportados: string;

  // Tamaño y Consumo
  dimensiones: string;
  altura: string;
  consumo: string;
  fuenteRecomendada: string;
  conector: string;
};