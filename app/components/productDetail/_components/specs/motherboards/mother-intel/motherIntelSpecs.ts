export type MotherIntelSpecs = {
  procesadorChipset: {
    socket: string;
    compatibilidad: string;
    chipset: string;
  };
  memoria: {
    slots: string;
    capacidadMaxima: string;
    frecuencia: string;
    soporte: string;
  };
  graficosIntegrados: {
    salidas: string;
    resolucionMaxima: string;
  };
  almacenamiento: {
    m2: string;
    sata: string;
  };
  expansionConectividad: {
    pciExpress: string;
    redInalambrica: string;
    lan: string;
  };
  puertosAudio: {
    usb: string;
    audio: string;
    rgb: string;
  };
};