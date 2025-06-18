export type NotebookSpecs = {
  almacenamiento: {
    disco: string;
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
    capacidad: string;
    formato: string;
    expandible: string;
  };
  otrasCaracteristicas: {
    sensorDactilar: string;
    tecladoNumerico: string;
    camaraWeb: string;
    teclado: string;
    touchscreen: string;
  };
  pantalla: {
    resolucion: string;
    tecnologia: string;
  };
  procesador: {
    marca: string;
    modelo: string;
    nucleos: string;
    frecuencia: string;
    cache: string;
  };
  puertos: {
    usb2: string;
    hdmi: string;
    audioMic: string;
  };
  sistemaOperativo: {
    nombre: string;
    version: string;
  };
};