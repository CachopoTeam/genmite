import { FileParserInterface } from './index';

export interface TypeInterface {
  fileExtension: string;
  parser: FileParserInterface;
}
