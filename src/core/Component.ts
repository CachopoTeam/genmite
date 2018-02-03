import * as nodePath from 'path';
import {
  ComponentInterface,
  FileInterface,
  TypeInterface
} from './../interfaces';

export class Component implements ComponentInterface {
  private files: FileInterface[];
  private componentFolder: string;
  private destinationFolder: string;

  constructor(destinationFolder: string, componentFolder: string) {
    this.destinationFolder = destinationFolder;
    this.componentFolder = componentFolder;
    this.files = [];
  }
  /* tslint:disable */
  init(): void {}
  /* tslint:enable */

  add(type: TypeInterface, code: string, fileName?: string): void {
    const componentName = fileName || this.componentFolder;
    const file: FileInterface = {
      code: code,
      name: componentName,
      type: type,
      path: this.getFullPath({
        folder: this.getFolder(),
        componentName: componentName,
        fileExtension: type.fileExtension
      })
    };

    this.files.push(file);
  }

  getFolder(): string {
    return nodePath.join(this.destinationFolder, this.componentFolder);
  }

  getDestinationFolder(): string {
    return this.destinationFolder;
  }

  getComponentFolder(): string {
    return this.componentFolder;
  }

  getFiles(): FileInterface[] {
    return this.files;
  }

  private getFullPath(path: {
    folder: string;
    componentName: string;
    fileExtension: string;
  }): string {
    return nodePath.join(path.folder, path.componentName + path.fileExtension);
  }
}
