import {
  CSSDefaultParser,
  HTMLDefaultParser,
  SCSSDefaultParser,
  TypescriptDefaultParser
} from './../../../src';

describe('PrettierParserOptions Suite', () => {
  it('should return a PrettierParser with parser css', () => {
    const cssDefaultParser = CSSDefaultParser();
    expect(cssDefaultParser.options.parser).toBe('css');
  });

  it('should return a PrettierParser with parser scss', () => {
    const scssDefaultParser = SCSSDefaultParser();
    expect(scssDefaultParser.options.parser).toBe('scss');
  });

  it('should return a PrettierParser with parser typescript', () => {
    const typescriptDefaultParser = TypescriptDefaultParser();
    expect(typescriptDefaultParser.options.parser).toBe('typescript');
  });

  it('should return a PrettierParser with parser undefined', () => {
    // TODO: When prettier has the HTML it must be html parser
    const htmlDefaultParser = HTMLDefaultParser();
    expect(htmlDefaultParser.options.parser).toBe(undefined);
  });
});
