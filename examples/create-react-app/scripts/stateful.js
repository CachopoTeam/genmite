const { ComponentCrafter, PromptService } = require('genmite');

main();

function main() {
  const folders = {
    destination: '',
    component: ''
  };

  PromptService.ask('Destination folder: ').then(answer => {
    folders.destination = answer.trim();
    return PromptService.ask('Component folder: ');
  })
  .then(answer => {
    folders.component = answer.trim();
    createComponent(folders);
  });

}

function createComponent(folders) {
  const { destination, component } = folders;
  const service = new ComponentCrafter();

  service.createReactStatefulComponent(destination, component);
}
