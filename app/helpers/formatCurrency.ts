export function formatCurrency(rawPriceInCents: string): string {
  const amount = Math.floor(parseInt(rawPriceInCents) / 100); // eliminar los centavos
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}