export type FullTowerSpecs = {
  diseñoYCompatibilidad: {
    tipo: string;
    material: string;
    soporteDePlacasBase: string;
    slotsDeExpansion: number;
  };
  ventilacionRefrigeracion: {
    soporteRadiadores: string;
    soporteVentiladores: {
      superior: string;
      frontal: string;
      trasero: string;
    };
    ventiladoresPreinstalados: {
      frontal: string;
      trasero: string;
    };
  };
  almacenamientoConectividad: {
    bahiasAlmacenamiento: string;
    puertosConexion: string;
  };
  dimensionesEspacioInterno: {
    dimensiones: string;
    peso: string;
    limitaciones: {
      alturaDisipadorCPU: string;
      longitudTarjetaGrafica: string;
      longitudFuenteAlimentacion: string;
    };
  };
};