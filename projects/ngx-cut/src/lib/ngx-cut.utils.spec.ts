import { coerceIntProperty } from './ngx-cut.utils';

describe('coerceIntProperty', () => {

  it('should coerce undefined to 0 or default', () => {
    expect(coerceIntProperty(undefined)).toBe(0);
    expect(coerceIntProperty(undefined, 111)).toBe(111);
  });

  it('should coerce null to 0 or default', () => {
    expect(coerceIntProperty(null)).toBe(0);
    expect(coerceIntProperty(null, 111)).toBe(111);
  });

  it('should coerce true to 0 or default', () => {
    expect(coerceIntProperty(true)).toBe(0);
    expect(coerceIntProperty(true, 111)).toBe(111);
  });

  it('should coerce false to 0 or default', () => {
    expect(coerceIntProperty(false)).toBe(0);
    expect(coerceIntProperty(false, 111)).toBe(111);

  });

  it('should coerce the empty string to 0 or default', () => {
    expect(coerceIntProperty('')).toBe(0);
    expect(coerceIntProperty('', 111)).toBe(111);

  });

  it('should coerce the string "1" to 1', () => {
    expect(coerceIntProperty('1')).toBe(1);
    expect(coerceIntProperty('1', 111)).toBe(1);
  });

  it('should coerce the string "123.456" to 123.456', () => {
    expect(coerceIntProperty('123.456')).toBe(123.456);
    expect(coerceIntProperty('123.456', 111)).toBe(123.456);
  });

  it('should coerce the string "-123.456" to -123.456', () => {
    expect(coerceIntProperty('-123.456')).toBe(-123.456);
    expect(coerceIntProperty('-123.456', 111)).toBe(-123.456);
  });

  it('should coerce an arbitrary string to 0 or default', () => {
    expect(coerceIntProperty('pink')).toBe(0);
    expect(coerceIntProperty('pink', 111)).toBe(111);
  });

  it('should coerce an arbitrary string prefixed with a number to 0 or default', () => {
    expect(coerceIntProperty('123pink')).toBe(0);
    expect(coerceIntProperty('123pink', 111)).toBe(111);
  });

  it('should coerce the number 1 to 1', () => {
    expect(coerceIntProperty(1)).toBe(1);
    expect(coerceIntProperty(1, 111)).toBe(1);
  });

  it('should coerce the number 123.456 to 123.456', () => {
    expect(coerceIntProperty(123.456)).toBe(123.456);
    expect(coerceIntProperty(123.456, 111)).toBe(123.456);
  });

  it('should coerce the number -123.456 to -123.456', () => {
    expect(coerceIntProperty(-123.456)).toBe(-123.456);
    expect(coerceIntProperty(-123.456, 111)).toBe(-123.456);
  });

  it('should coerce an object to 0 or default', () => {
    expect(coerceIntProperty({})).toBe(0);
    expect(coerceIntProperty({}, 111)).toBe(111);
  });

  it('should coerce an array to 0 or default', () => {
    expect(coerceIntProperty([])).toBe(0);
    expect(coerceIntProperty([], 111)).toBe(111);
  });
});
