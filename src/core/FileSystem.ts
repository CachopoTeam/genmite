import * as fs from 'fs';

export class FileSystem {
  exists(directory: string): boolean {
    return fs.existsSync(directory);
  }

  createDirectory(directory: string): void {
    fs.mkdirSync(directory);
  }

  createFile(pathName: string, code: string): void {
    this.writeFile(pathName, code, (err, success) => {
      if (err) {
        console.log(`error writing ${pathName}`);
      }
      console.log(`write  the ${pathName} file`);
    });
  }

  private writeFile(
    path: string,
    stream: string,
    cb: (err: NodeJS.ErrnoException | undefined, success: boolean) => void
  ): void {
    fs.writeFile(path, stream, (err) => {
      if (err) {
        cb(err, false);
      }
      cb(undefined, true);
    });
  }
}
