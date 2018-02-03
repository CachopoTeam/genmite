import { ComponentCrafter, ExecCommandService, PromptService } from './../src';
import { ReasonReactComponent } from './components';

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

  PromptService.ask(destinationFolder).then((answer: string) => {
    folders.destination = answer.trim();
    return PromptService.ask(componentFolder);
  })
  .then((answer: string) => {
    folders.component = answer.trim();
    createComponent(folders);
  });

}

function createComponent(folders: FoldersInterface): void {
  const { destination, component } = folders;
  const service = new ComponentCrafter();
  const comp = new ReasonReactComponent(destination, component);
  service.createCustom(comp);
  ExecCommandService.execute('refmt', [
    '--in-place', `${destination}/${component}/${component}.re`
  ]);
}
