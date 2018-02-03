import { ComponentInterface } from './component.interface';

export interface ComponentBuilderInterface {
  build(component: ComponentInterface): void;
}
