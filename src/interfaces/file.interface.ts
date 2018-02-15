import { TypeInterface } from './type.interface';

export interface FileInterface {
  code: string;
  name: string;
  type: TypeInterface;
  path: string;
}
