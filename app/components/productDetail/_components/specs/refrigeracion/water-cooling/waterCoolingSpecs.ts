export type WaterCoolingSpecs = {
  color: string;

  sockets: {
    intel: string[];
    amd: string[];
  };

  radiador: {
    material: string;
    dimensiones: string;
    tamaño: string;
  };

  bomba: {
    dimensiones: string;
    mttf: string;
    nivelRuido: string;
    conector: string;
    voltaje: string;
    consumo: string;
  };

  ventilador: {
    dimensiones: string;
    cantidad: string;
    tipoLed: string;
    velocidad: string;
    flujoAire: string;
    nivelRuido: string;
    presion: string;
    mttf: string;
    conector: string;
    voltaje: string;
    corrienteVentilador: string;
    corrienteTotal: string;
  };

  tipoEnfriador: string;
  serie: string;
};