import { TypeInterface } from './fileTypes.interface';

export interface FileInterface {
  code: string;
  name: string;
  type: TypeInterface;
  path: string;
}
