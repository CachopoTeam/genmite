const { ComponentCrafter, PromptService } = require('./../dist/code-generator.umd');
import { MyAngularComponent } from './components';

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

  const destinationFolder = 'Destination folder: ';
  const componentFolder = 'Component folder: ';
  const prefix = 'my-app';

  PromptService.ask(destinationFolder).then((answer: string) => {
    folders.destination = answer.trim();
    return PromptService.ask(componentFolder);
  })
  .then((answer: string) => {
    folders.component = answer.trim();
    createComponent(folders, prefix);
  });

}

function createComponent(folders: FoldersInterface, prefix: string): void {
  const { destination, component } = folders;
  const service = new ComponentCrafter();
  const myAngularComponent = new MyAngularComponent(destination, component, prefix);

  service.createCustom(myAngularComponent);
}
