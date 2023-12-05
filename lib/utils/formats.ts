export const formatToFloat = (value: string): number =>
  parseFloat(value.replace(',', '.'))
