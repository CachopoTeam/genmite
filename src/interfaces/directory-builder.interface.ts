import { ComponentInterface } from './component.interface';
export interface DirectoryBuilderInterface {
  build(component: ComponentInterface): void;
}
