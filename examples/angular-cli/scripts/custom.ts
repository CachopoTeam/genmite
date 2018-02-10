import { ComponentCrafter, PromptService } from 'genmite';
import { CustomComponent } from './components/custom.component';

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
  const prefix = 'custom';

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
  const customComponent = new CustomComponent(destination, component, prefix);

  service.createCustom(customComponent);
}
