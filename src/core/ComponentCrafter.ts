import { ComponentBuilder, FileSystem, FileSystemWrapper } from '.';
import {
  AngularComponent,
  ReactStatefulComponent,
  ReactStatelessComponent
} from './../components';
import { ComponentInterface } from './../interfaces/component.interface';

export class ComponentCrafter {
  createReactStatefulComponent(
    destinationFolder: string,
    componentFolder: string
  ): void {
    const component = new ReactStatefulComponent(
      destinationFolder,
      componentFolder
    );
    component.init();
    this.create(component);
  }

  createReactStatelessComponent(
    destinationFolder: string,
    componentFolder: string
  ): void {
    const component = new ReactStatelessComponent(
      destinationFolder,
      componentFolder
    );
    component.init();
    this.create(component);
  }

  createAngularComponent(
    destinationFolder: string,
    componentFolder: string,
    prefix: string
  ): void {
    const component = new AngularComponent(
      destinationFolder,
      componentFolder,
      prefix
    );
    component.init();
    this.create(component);
  }

  createCustom(component: ComponentInterface): void {
    component.init();
    this.create(component);
  }

  protected create(component: ComponentInterface): void {
    const builder = new ComponentBuilder(new FileSystemWrapper(new FileSystem()));
    builder.build(component);
  }
}
