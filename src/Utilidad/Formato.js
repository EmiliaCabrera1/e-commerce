export const formatoMoneda = (numero) =>
  new Intl.NumberFormat("es-ar", { style: "currency", currency: "ARS" }).format(
    numero
  );
