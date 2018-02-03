import { ComponentCrafter, PromptService } from './../src';

interface FoldersInterface {
  destination: string;
  component: string;
}

main();

function main(): void {
  const folders: FoldersInterface = {
    destination: '',
    component: ''
  };

  PromptService.ask('Destination folder: ').then((answer: string) => {
    folders.destination = answer.trim();
    return PromptService.ask('Component folder: ');
  })
  .then((answer: string) => {
    folders.component = answer.trim();
    createComponent(folders);
  });

}

function createComponent(folders: FoldersInterface): void {
  const { destination, component } = folders;
  const service = new ComponentCrafter();

  service.createReactStatelessComponent(destination, component);
}
