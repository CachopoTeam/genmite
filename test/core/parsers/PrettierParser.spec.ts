// TODO: How to do mocks with jest and prettier
import * as prettier from 'prettier';
import { PrettierParser } from './../../../src';

jest.mock('prettier');
describe('Prettier parser suite', () => {
  it('should return the code', () => {
    const options: prettier.Options = {
      parser: 'typescript',
    };

    const prettierParser = new PrettierParser(options);
    const code = 'var a = 3';
    prettierParser.parse(code);
    expect(prettier.format).toHaveBeenCalled();
  });
});
