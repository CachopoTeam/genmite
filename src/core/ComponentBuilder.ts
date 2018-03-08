import { ComponentBuilderInterface, ComponentInterface } from './../interfaces';
import { FileSystemWrapper } from './FileSystemWrapper';

export class ComponentBuilder implements ComponentBuilderInterface {
  private fileSystemWrapper: FileSystemWrapper;

  constructor(fileSystemWrapper: FileSystemWrapper) {
    this.fileSystemWrapper = fileSystemWrapper;
  }

  build(component: ComponentInterface): void {
    const destinationFolder = component.getDestinationFolder();
    if (!this.fileSystemWrapper.exists(destinationFolder)) {
      throw new Error(`The destination folder ${destinationFolder} not exists`);
    }
    const files = component.getFiles();
    files.map(file => {
      this.fileSystemWrapper.createFile(file);
    });
  }
}
