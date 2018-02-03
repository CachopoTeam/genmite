import { FileTypes, PrettierParser, TypeInterface } from '../../src';

describe('FileTypes suite', () => {

  it('should add a new file type', () => {
    const fileTypes = new FileTypes();
    const type: TypeInterface = {
      fileExtension: '.ts',
      parser: new PrettierParser()
    };
    expect(fileTypes.add(type.fileExtension, type.parser)).toEqual(type);
  });
});
