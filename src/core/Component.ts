import * as nodePath from 'path';
import { defaultConfig } from '../config';
import { ComponentInterface, ConfigInterface, FileInterface, TypeInterface } from './../interfaces';

export class Component implements ComponentInterface {
  private config: ConfigInterface;
  private files: FileInterface[];
  private componentFolder: string;
  private destinationFolder: string;

  constructor(destinationFolder: string, componentFolder: string, config?: ConfigInterface) {
    this.destinationFolder = destinationFolder;
    this.componentFolder = componentFolder;
    this.config = config || defaultConfig;
    this.files = [];
  }

  /* tslint:disable */
  init(): void {}
  /* tslint:enable */

  add(type: TypeInterface, code: string, fileName?: string): void {
    const componentName = fileName || this.componentFolder;
    const file: FileInterface = {
      code: code,
      name: this.config.componentUppercase
        ? componentName.slice(0, 1).toUpperCase() + componentName.slice(1)
        : componentName,
      type: type,
      path: this.getFullPath({
        folder: this.getFolder(),
        componentName: componentName,
        fileExtension: type.fileExtension
      })
    };
    this.files.push(file);
  }

  getConfig(): ConfigInterface {
    return this.config;
  }

  getFolder(): string {
    return this.config.createFolder
      ? nodePath.join(this.destinationFolder, this.componentFolder)
      : nodePath.join(this.destinationFolder);
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
