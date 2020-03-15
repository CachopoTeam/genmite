import * as nodePath from 'path';
import { defaultConfig } from '../config';
import { ComponentInterface, ConfigInterface, FileInterface, TypeInterface } from './../interfaces';

const capitalize = (str: string) => str.slice(0, 1).toUpperCase() + str.slice(1);

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
    let componentName = fileName || this.componentFolder;
    const cssExtensions = ['.scss', '.css'];
    componentName =
      this.config.componentUppercase &&
      componentName !== 'index' &&
      !cssExtensions.includes(type.fileExtension)
        ? capitalize(componentName)
        : componentName;
    const file: FileInterface = {
      code: code,
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
