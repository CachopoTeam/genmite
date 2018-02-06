import { FileInterface, FileSystemWrapperInterface } from './../interfaces';
import { FileSystem } from './FileSystem';

export class FileSystemWrapper implements FileSystemWrapperInterface {
  fileSystem: FileSystem;

  constructor(fileSystem: FileSystem) {
    this.fileSystem = fileSystem;
  }

  createDirectory(directory: string): void {
    this.fileSystem.createDirectory(directory);
  }

  exists(directory: string): boolean {
    return this.fileSystem.exists(directory);
  }

  createFile(file: FileInterface): void {
    const code = file.type.parser.parse(file.code);
    this.fileSystem.createFile(file.path, code);
  }
}
