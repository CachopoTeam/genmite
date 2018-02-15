import { FileSystem } from './../../src/core/FileSystem';

jest.mock('fs');

describe('FileSystem', () => {
  const MOCK_FILE_INFO = {
    '/fakeDirectory/fake.js': 'console.log("file1 contents");'
  };
  const fileSystem = new FileSystem();

  beforeEach(() => {
    require('fs').__setMockFiles(MOCK_FILE_INFO);
  });

  it('should check if a directory exists', () => {
    const result = fileSystem.exists('fakeDirectory');
    expect(result).toBeTruthy();
  });

  it('should createDirectory', () => {
    const fake = 'fake';
    fileSystem.createDirectory(fake);

    expect(fileSystem.exists(fake)).toBeTruthy();
  });
});
