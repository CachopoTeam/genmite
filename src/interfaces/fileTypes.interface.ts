import { FileParserInterface } from './index';

export interface TypeInterface {
  fileExtension: string;
  parser: FileParserInterface;
}

export interface FileTypesInterface {
  add(fileExtension: string, parser: FileParserInterface): TypeInterface;
}
