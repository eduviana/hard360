export type AirCoolingSpecs = {
  ventilador: {
    dimensiones: string; // Ej: "92 x 92 x 25 mm"
    velocidad: string; // Ej: "2200 RPM ±10%"
    flujoAire: string; // Ej: "34.6 CFM"
    presionAire: string; // Ej: "1.91 mmH2O"
    nivelRuido: string; // Ej: "31 dBA"
    rodamiento: string; // Ej: "Hidráulico"
  };
  disipador: {
    materialDisipador: string; // Ej: "Aluminio"
    materialHeatpipes: string; // Ej: "Cobre"
    cantidadHeatpipes: number; // Ej: 2
    dimensiones: string; // Ej: "92 x 44 x 127 mm"
  };
  alimentacion: {
    conector: string; // Ej: "3-Pin PWM"
    voltaje: string; // Ej: "12V (Ventilador)"
  };
  compatibilidad: {
    intel: string[]; // Ej: ["LGA 1700", "1151", ...]
    amd: string[]; // Ej: ["AM5", "AM4", "AM3"]
  };
};