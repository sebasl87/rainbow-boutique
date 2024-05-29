export const formatCurrency = (value) => {
  const formattedValue = value.toFixed(2);
  const parts = formattedValue.toString().split(".");
  parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `$${parts.join(".")}`;
};
