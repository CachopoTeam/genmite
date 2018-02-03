import { FileParserInterface } from '../../interfaces';

export class NullParser implements FileParserInterface {
  parse(code: string): string {
    return code;
  }
}
