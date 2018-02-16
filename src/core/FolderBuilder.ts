import {
  ComponentBuilderInterface,
  ComponentInterface,
  FolderBuilderInterface
} from './../interfaces';
import { FileSystemWrapper } from './FileSystemWrapper';

export class FolderBuilder implements FolderBuilderInterface {
  private fileSystemWrapper: FileSystemWrapper;

  constructor(fileSystemWrapper: FileSystemWrapper) {
    this.fileSystemWrapper = fileSystemWrapper;
  }
  build(component: ComponentInterface): void {
    this.fileSystemWrapper.createDirectory(component.getFolder());
  }
}
