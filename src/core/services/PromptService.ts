import * as readline from 'readline';

export class PromptService {
  static ask(question: string): Promise<string> {
    const stream = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    return new Promise<string>((resolve, reject) => {
      stream.question(question, (answer: string) => {
        stream.close();
        resolve(answer);
      });
    });
  }
}
