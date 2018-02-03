import { FileInterface, FileParserInterface } from './index';

export interface FileSystemWrapperInterface {
  createDirectory(directory: string): void;
  exists(directory: string): boolean;
  createFile(file: FileInterface, fileParser: FileParserInterface): void;
}
