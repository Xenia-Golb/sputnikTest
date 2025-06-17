export const formatPrice = (
  priceInCents: number,
  currency: "RUB" | "USD" | "EUR" | string
): string => {
  return new Intl.NumberFormat("ru-RU", {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(priceInCents / 100);
};
