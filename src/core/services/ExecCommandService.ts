import { spawn } from 'child_process';

export class ExecCommandService {
  static execute(command: string, args: string[] | undefined): void {
    spawn(command, args);
  }
}
