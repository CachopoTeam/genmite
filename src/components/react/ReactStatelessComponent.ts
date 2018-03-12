import { Component, CSSDefaultParser, PrettierParser } from '../../core';

import { TypeInterface } from './../../interfaces';

export class ReactStatelessComponent extends Component {
  constructor(destinationFolder: string, componentFolder: string) {
    super(destinationFolder, componentFolder);
  }

  init(): void {
    const prettierParser = new PrettierParser();
    const jsType: TypeInterface = {
      fileExtension: '.js',
      parser: prettierParser
    };

    const specJsType: TypeInterface = {
      fileExtension: '.spec.js',
      parser: prettierParser
    };

    const cssType: TypeInterface = {
      fileExtension: '.css',
      parser: CSSDefaultParser()
    };

    const componentFolder = this.getComponentFolder();

    this.add(jsType, this.defaultReactIndex(componentFolder), 'index');
    this.add(jsType, this.defaultReactJS(componentFolder));
    this.add(cssType, this.defaultReactCSS(componentFolder));
    this.add(specJsType, this.defaultReactSpec(componentFolder));
  }

  private defaultReactJS(className: string): string {
    return `
      import React from 'react'
      import PropTypes from 'prop-types'
      import './${className}.css'

      const ${className} = props => (
        <div className="${className}">
          <h2>${className} Stateless Component generated from the cli</h2>
        </div>
      );

      ${className}.propTypes = {};

      export default ${className};
    `;
  }

  private defaultReactCSS(className: string): string {
    return `
      .${className}{}
    `;
  }

  private defaultReactIndex(className: string): string {
    return `
      export { default as ${className} } from './${className}';
    `;
  }

  private defaultReactSpec(className: string): string {
    return `
      import React from 'react';
      import { shallow } from 'enzyme';
      import { ${className} } from './${className}';

      describe('${className} suite', () => {
        it('renders ${className} without any state injected', () => {
          const component = shallow(<${className} />);
          expect(component).toBeDefined();
        });
      });
    `;
  }
}
