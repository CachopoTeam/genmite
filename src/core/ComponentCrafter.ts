import { defaultConfig } from '../config';
import { AngularComponent, ReactStatefulComponent, ReactStatelessComponent } from './../components';
import { ComponentBuilder, DirectoryBuilder, FileSystem, FileSystemWrapper } from './../core';
import { ComponentInterface, ConfigInterface } from './../interfaces';

export class ComponentCrafter {
  createReactStatefulComponent(destinationFolder: string, componentFolder: string): void {
    const component = new ReactStatefulComponent(destinationFolder, componentFolder);
    component.init();
    this.create(component, defaultConfig);
  }

  createReactStatelessComponent(destinationFolder: string, componentFolder: string): void {
    const component = new ReactStatelessComponent(destinationFolder, componentFolder);
    component.init();
    this.create(component, defaultConfig);
  }

  createAngularComponent(destinationFolder: string, componentFolder: string, prefix: string): void {
    const component = new AngularComponent(destinationFolder, componentFolder, prefix);
    component.init();
    this.create(component, defaultConfig);
  }

  createCustom(component: ComponentInterface): void {
    component.init();
    this.create(component, component.getConfig());
  }

  protected create(component: ComponentInterface, config: ConfigInterface): void {
    const { createFolder } = config;
    const fileSystem = new FileSystemWrapper(new FileSystem());
    if (createFolder) {
      const directoryBuilder = new DirectoryBuilder(fileSystem);
      directoryBuilder.build(component);
    }
    const builder = new ComponentBuilder(fileSystem);
    builder.build(component);
  }
}
