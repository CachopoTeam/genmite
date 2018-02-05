import * as path from 'path';
import { Component, PrettierParser, TypeInterface } from './../../src';

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

  const getFullPath = (path: {
    destinationFolder: string;
    componentFolder: string;
    fileName: string;
    fileExtension: string;
  }) => {
    return `${path.destinationFolder}${separator}${path.componentFolder}${separator}${
      path.fileName
    }${path.fileExtension}`;
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

  it('should add a type to the component files without fileName', () => {
    comp.add(type, code);
    const filesComponent = comp.getFiles();

    expect(filesComponent[0].code).toBe(code);
    expect(filesComponent[0].name).toBe(fileName);
    expect(filesComponent[0].type).toEqual(type);
    expect(filesComponent[0].path).toBe(fullPath);
  });

  it('should get the path combining destinationFolder and componentFolder', () => {
    expect(comp.getFolder()).toBe(`${destinationFolder}${separator}${componentFolder}`);
  });

  it('should return the componentFolder', () => {
    expect(comp.getComponentFolder()).toBe(componentFolder);
  });
});
