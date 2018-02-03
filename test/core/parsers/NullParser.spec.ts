import { NullParser } from './../../../src';

describe('Null parser suite', () => {
  it('should return the code', () => {
    const nullParser = new NullParser();
    const code = 'var a = 3';
    expect(nullParser.parse(code)).toBe(code);
  });
});
