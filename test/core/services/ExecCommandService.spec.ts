import { ExecCommandService } from './../../../src';

jest.mock('child_process');

describe('ExecCommandService', () => {
  it('should call the execute fn', () => {
    const spawn = require('child_process').spawn;
    const command = 'git';
    const args = ['--version'];
    ExecCommandService.execute(command, args);
    expect(spawn).toHaveBeenCalledWith(command, args);
  });
});
