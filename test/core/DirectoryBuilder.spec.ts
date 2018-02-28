import { Component, ReactStatefulComponent } from './../../src';
import { DirectoryBuilder, FileSystem, FileSystemWrapper } from './../../src/core';

describe('DirectoryBuilder suite', () => {
  const destinationFolder = 'demo';
  const componentFolder = 'app';
  let fileSystem: FileSystem;
  let fileSystemWrapper: FileSystemWrapper;
  let directoryBuilder: DirectoryBuilder;
  let component: Component;
  beforeEach(() => {
    fileSystem = new FileSystem();
    fileSystemWrapper = new FileSystemWrapper(fileSystem);
    directoryBuilder = new DirectoryBuilder(fileSystemWrapper);
    component = new ReactStatefulComponent(destinationFolder, componentFolder);
    component.init();
    spyOn(fileSystem, 'createDirectory');
  });

  it('should create a directory', () => {
    spyOn(fileSystem, 'exists').and.returnValue(false);
    directoryBuilder.build(component);
    expect(fileSystem.createDirectory).toHaveBeenCalledWith(component.getFolder());
    expect(fileSystem.exists).toHaveBeenCalled();
  });
});
