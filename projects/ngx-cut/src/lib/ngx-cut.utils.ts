const isIntValue = (value: any): boolean => {
  return !isNaN(parseFloat(value as any)) && !isNaN(Number(value)) && Number.isInteger(value);
};

/**
 *
 * @param value can be anything
 * @param fallbackValue integer value or 0
 * @description ispired by https://github.com/angular/components/blob/master/src/cdk/coercion/number-property.ts
 */
export const coerceIntProperty = (value: any, fallbackValue = 0): number => {
  return isIntValue(value) ? Number(value) : fallbackValue;
};
