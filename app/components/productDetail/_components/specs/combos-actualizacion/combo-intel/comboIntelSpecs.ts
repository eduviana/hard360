export type ComboIntelSpecs = {
  procesador: {
    modelo: string;
    nucleos: string;
    hilos: string;
    frecuenciaBase: string;
    frecuenciaMaxima: string;
    cache: string;
    graficosIntegrados: string;
  };
  motherboard: {
    modelo: string;
    chipset: string;
    socket: string;
    factorForma: string;
    soporteRam: string;
    slotsRam: string;
    maxRam: string;
  };
  refrigeracion: {
    tipo: string;
    incluye: string;
  };
};
