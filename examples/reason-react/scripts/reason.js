const { ComponentCrafter, ExecCommandService, PromptService } = require('genmite');
const ReasonReactComponent = require('./ReasonReactComponent');

main();

function main() {
  const folders = {
    destination: '',
    component: ''
  };

  const destinationFolder = 'Destination folder: ';
  const componentFolder = 'Component folder: ';

  PromptService.ask(destinationFolder).then(answer => {
    folders.destination = answer.trim();
    return PromptService.ask(componentFolder);
  })
  .then(answer => {
    folders.component = answer.trim();
    createComponent(folders);
  });

}

function createComponent(folders) {
  const { destination, component } = folders;
  const service = new ComponentCrafter();
  const comp = new ReasonReactComponent(destination, component);
  service.createCustom(comp);
  ExecCommandService.execute('refmt', [
    '--in-place', `${destination}/${component}/${component}.re`
  ]);
}
