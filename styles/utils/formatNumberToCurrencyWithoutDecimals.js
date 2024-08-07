export function formatNumberToCurrencyWithoutDecimals(number) {
  // Eliminar los decimales
  const roundedNumber = Math.floor(number);

  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0, // Sin decimales
    maximumFractionDigits: 0, // Sin decimales
  }).format(roundedNumber);
}
