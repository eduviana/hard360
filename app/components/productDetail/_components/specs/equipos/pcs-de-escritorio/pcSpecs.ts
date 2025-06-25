export type PcSpecs = {
  almacenamiento: {
    disco: string; // Ej: "512 GB"
    tipo:
      | "HDD"
      | "SSD SATA"
      | "SSD M.2"
      | "SSD NVMe Gen 3"
      | "SSD NVMe Gen 4"
      | "SSD NVMe Gen 5";
    lectura: string; // Ej: "3500 MB/s"
    escritura: string; // Ej: "3000 MB/s"
  };
  conectividad: {
    wifi: string;
    bluetooth: string;
  };
  garantia: {
    tipo: string;
    plazo: string;
  };
  memoriaRam: {
    formato: string;
    tipo: string;
    capacidad: string;
    frecuencia: string;
    expandible: string;
  };


  procesador: {
    marca: string;
    modelo: string;
    nucleos: string;
    frecuencia: string;
    cacheL1: string;
    cacheL2: string;
    cacheL3: string;
    graficos: string;
    tdp: string;
  };
  puertos: {
    usb2: string;
    usb3: string;
    usbC?: string;
    hdmi: string;
    audioMic: string;
    ehternet: string;
  };
  sistemaOperativo: {
    nombre: string;
    version: string;
  };
};
