import * as prettier from 'prettier';
import { FileParserInterface } from '../../interfaces';

export class PrettierParser implements FileParserInterface {
  private _options: prettier.Options;

  constructor(options?: prettier.Options) {
    this._options = {
      printWidth: 140,
      tabWidth: 2,
      semi: true,
      singleQuote: true,
      trailingComma: 'none',
      parser: 'babylon',
      ...options
    };
  }

  get options(): prettier.Options {
    return this._options;
  }

  parse(code: string): string {
    try {
      return prettier.format(code, this.options);
    } catch (error) {
      throw new Error("There's been a error formatting code with prettier");
    }
  }
}
