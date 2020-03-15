import * as path from 'path';
import { Component, ConfigInterface, PrettierParser, TypeInterface } from './../../src';
import { defaultConfig } from './../../src/config';

describe('Component suite', () => {
  let comp: Component;
  const destinationFolder = 'demo';
  const componentFolder = 'article';
  const code = 'var a = 3';
  const fileName = 'article';
  const separator = path.sep;
  const type: TypeInterface = {
    fileExtension: '.js',
    parser: new PrettierParser()
  };

  const getFullPath = (pathObject: {
    destinationFolder: string;
    componentFolder: string;
    fileName: string;
    fileExtension: string;
  }) => {
    return `${pathObject.destinationFolder}${separator}${pathObject.componentFolder}${separator}${pathObject.fileName}${pathObject.fileExtension}`;
  };

  const fullPath = getFullPath({
    destinationFolder: destinationFolder,
    componentFolder: componentFolder,
    fileName: fileName,
    fileExtension: type.fileExtension
  });

  beforeEach(() => {
    comp = new Component(destinationFolder, componentFolder);
  });

  it('should add a type to the component files with fileName', () => {
    comp.add(type, code, fileName);
    const filesComponent = comp.getFiles();

    expect(filesComponent[0].code).toBe(code);
    expect(filesComponent[0].name).toBe(fileName);
    expect(filesComponent[0].type).toEqual(type);
    expect(filesComponent[0].path).toBe(fullPath);
  });

  it('should add a type with the config property componentUppercase to true', () => {
    let componentWithUppercase = new Component(destinationFolder, componentFolder, {
      componentUppercase: true,
      createFolder: true
    });
    componentWithUppercase.add(type, code, fileName);

    const filesComponent = componentWithUppercase.getFiles();

    expect(filesComponent[0].code).toBe(code);
    expect(filesComponent[0].name).toBe(fileName.slice(0, 1).toUpperCase() + fileName.slice(1));
    expect(filesComponent[0].type).toEqual(type);
    expect(filesComponent[0].path).toBe(fullPath);
  });

  it('should add a type to the component files without fileName', () => {
    comp.add(type, code);
    const filesComponent = comp.getFiles();

    expect(filesComponent[0].code).toBe(code);
    expect(filesComponent[0].name).toBe(fileName);
    expect(filesComponent[0].type).toEqual(type);
    expect(filesComponent[0].path).toBe(fullPath);
  });

  it('should get the defaultConfig when calling getConfig', () => {
    const config = comp.getConfig();
    expect(config).toEqual(defaultConfig);
  });

  it('should get the path combining destinationFolder and componentFolder', () => {
    expect(comp.getFolder()).toBe(`${destinationFolder}${separator}${componentFolder}`);
  });

  it('should get the path of destination only if passing config to the component', () => {
    const config: ConfigInterface = {
      createFolder: false
    };
    const componentWithConfig = new Component(destinationFolder, componentFolder, config);

    expect(componentWithConfig.getFolder()).toBe(destinationFolder);
  });

  it('should return the componentFolder', () => {
    expect(comp.getComponentFolder()).toBe(componentFolder);
  });
});
