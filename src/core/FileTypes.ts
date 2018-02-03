import {
  FileParserInterface,
  FileTypesInterface,
  TypeInterface
} from './../interfaces';

export class FileTypes implements FileTypesInterface {
  private types: TypeInterface[] = [];
  // TODO: Validate regex .*
  add(fileExtension: string, parser: FileParserInterface): TypeInterface {
    const type: TypeInterface = {
      fileExtension: fileExtension,
      parser: parser
    };
    this.types.push(type);

    return type;
  }
}
