import { Options } from 'prettier';
import { PrettierParser } from '../index';

export function CSSDefaultParser(): PrettierParser {
  const options: Options = {
    parser: 'css'
  };
  return new PrettierParser(options);
}

export function SCSSDefaultParser(): PrettierParser {
  const options: Options = {
    parser: 'scss'
  };
  return new PrettierParser(options);
}

export function TypescriptDefaultParser(): PrettierParser {
  const options: Options = {
    parser: 'typescript'
  };
  return new PrettierParser(options);
}

export function HTMLDefaultParser(): PrettierParser {
  const options: Options = {
    parser: undefined
  };
  return new PrettierParser(options);
}
