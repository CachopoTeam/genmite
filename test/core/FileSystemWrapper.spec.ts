import { PrettierParser, TypeInterface } from './../../src';
import { FileSystem, FileSystemWrapper } from './../../src/core';
import { FileInterface } from './../../src/interfaces';

describe('FileSystemWrapper', () => {
  let fileSystem: FileSystem;
  let fileSystemWrapper: FileSystemWrapper;
  beforeEach(() => {
    fileSystem = new FileSystem();
    fileSystemWrapper = new FileSystemWrapper(fileSystem);
  });

  it('should create directory', () => {
    spyOn(fileSystem, 'createDirectory');
    const directory = 'Header';
    fileSystemWrapper.createDirectory(directory);
    expect(fileSystem.createDirectory).toHaveBeenCalledWith(directory);
  });

  it('should check if the directory exists', () => {
    spyOn(fileSystem, 'exists');
    const directory = 'Header';
    fileSystemWrapper.exists(directory);
    expect(fileSystem.exists).toHaveBeenCalledWith(directory);
  });

  it('should create a file', () => {
    spyOn(fileSystem, 'createFile');
    const prettierParser = new PrettierParser();
    const type: TypeInterface = {
      fileExtension: '.ts',
      parser: prettierParser
    };
    const code = 'var a = 2';
    const parsedCode = prettierParser.parse(code);
    const file: FileInterface = {
      code: code,
      type: type,
      path: 'demo/Header'
    };
    fileSystemWrapper.createFile(file);
    expect(fileSystem.createFile).toHaveBeenCalledWith(file.path, parsedCode);
  });
});
