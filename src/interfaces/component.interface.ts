import { ConfigInterface, FileInterface, TypeInterface } from './../interfaces';

export interface ComponentInterface {
  getConfig(): ConfigInterface;
  init(): void;
  add(type: TypeInterface, code: string, fileName?: string): void;
  getFolder(): string;
  getDestinationFolder(): string;
  getFiles(): FileInterface[];
}
