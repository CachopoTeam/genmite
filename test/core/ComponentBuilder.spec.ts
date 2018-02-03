import { Component, ComponentBuilder, FileSystem, FileSystemWrapper, ReactStatefulComponent } from './../../src';

describe('ComponentBuilder suite', () => {
  const destinationFolder = 'demo';
  const componentFolder = 'app';
  let fileSystem: FileSystem;
  let fileSystemWrapper: FileSystemWrapper;
  let componentBuilder: ComponentBuilder;
  let component: Component;
  beforeEach(() => {
    fileSystem = new FileSystem();
    fileSystemWrapper = new FileSystemWrapper(fileSystem);
    componentBuilder = new ComponentBuilder(fileSystemWrapper);
    component = new ReactStatefulComponent(destinationFolder, componentFolder);
    component.init();
    spyOn(fileSystem, 'createDirectory');
    spyOn(fileSystemWrapper, 'createFile');
  });

  it('should build the component', () => {
    spyOn(fileSystem, 'exists')
      .and.returnValue(true);
    componentBuilder.build(component);
    expect(fileSystem.exists).toHaveBeenCalledWith(destinationFolder);
    expect(fileSystem.createDirectory).toHaveBeenCalledWith(component.getFolder());
    expect(fileSystemWrapper.createFile).toHaveBeenCalledTimes(4);
  });

  it('should build the component but should throw an error', () => {
    spyOn(fileSystem, 'exists')
      .and.returnValue(false);
    expect(() => componentBuilder.build(component)).toThrowError();
  });
});
