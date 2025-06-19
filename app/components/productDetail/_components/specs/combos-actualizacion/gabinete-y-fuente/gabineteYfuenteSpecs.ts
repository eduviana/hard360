export type GabineteYFuenteSpecs = {
  gabinete: {
    formato: string; // Ej: ATX, Micro ATX, Mini ITX
    bahias35: string; // Ej: "2"
    bahias25: string; // Ej: "1"
    slotsExpansión: string; // Ej: "7"
    ventiladoresIncluidos: string; // Ej: "1 frontal de 120mm"
    puertosFrontales: string; // Ej: "2x USB 2.0, 1x USB 3.0, Audio/Mic"
    dimensiones: string; // Ej: "410 x 180 x 420 mm"
    color: string; // Ej: "Negro"
    ventanaLateral: string; // Ej: "Sí, acrílica"
  };

  fuente: {
    potencia: string; // Ej: "500W"
    certificacion: string; // Ej: "80 PLUS White"
    tipo: string; // Ej: "ATX"
    conectores: {
      atx24: string; // Ej: "1x 24-pin"
      cpu8: string; // Ej: "1x 8-pin"
      pcie6_8: string; // Ej: "1x 6+2 pin"
      sata: string; // Ej: "3x SATA"
      molex: string; // Ej: "2x Molex"
    };
  };
};