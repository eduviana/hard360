export type PastaTermicaSpecs = {
  peso: string; // Ej: "1.5g", "4g"
  conductividadTermica: string; // Ej: "8.5 W/m·K"
  resistenciaTermica: string; // Ej: "0.0129 °C·in²/W"
  temperaturaOperativa: string; // Ej: "-50 °C a 250 °C"
  viscosidad: string; // Ej: "870 poise"
  color: string; // Ej: "Gris"
  sinConductividadElectrica: boolean; // true / false
};