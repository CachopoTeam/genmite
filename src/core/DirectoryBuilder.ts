import {
  ComponentBuilderInterface,
  ComponentInterface,
  DirectoryBuilderInterface
} from './../interfaces';
import { FileSystemWrapper } from './FileSystemWrapper';

export class DirectoryBuilder implements DirectoryBuilderInterface {
  private fileSystemWrapper: FileSystemWrapper;

  constructor(fileSystemWrapper: FileSystemWrapper) {
    this.fileSystemWrapper = fileSystemWrapper;
  }
  build(component: ComponentInterface): void {
    const folder = component.getFolder();
    if (this.fileSystemWrapper.exists(folder)) {
      throw new Error(`The directory ${folder} exists, I cannot create the folder`);
    }
    this.fileSystemWrapper.createDirectory(component.getFolder());
  }
}
