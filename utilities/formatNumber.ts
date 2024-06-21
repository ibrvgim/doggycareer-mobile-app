export function formatNumber(number: string) {
  const convertNumber = number.replaceAll('.', '');
  return new Intl.NumberFormat('de-DE').format(Number(convertNumber));
}
