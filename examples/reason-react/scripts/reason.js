const { ComponentCrafter, ExecCommandService, PromptService } = require('genmite');
const ReasonReactComponent = require('./ReasonReactComponent');

main();

function main() {
  const folders = {
    destination: '',
    component: ''
  };

  const destinationFolder = 'Destination folder: ';
  const componentName = 'Component name: ';

  PromptService.ask(destinationFolder).then(answer => {
    folders.destination = answer.trim();
    return PromptService.ask(componentName);
  })
  .then(answer => {
    folders.component = answer.trim();
    createComponent(folders);
  });

}

function createComponent(folders) {
  const { destination, component } = folders;
  const service = new ComponentCrafter();
  const config = {
    createFolder: false
  };
  const comp = new ReasonReactComponent(destination, component, config);
  service.createCustom(comp);
  ExecCommandService.execute('refmt', [
    '--in-place', `${destination}/${component}.re`
  ]);
}
