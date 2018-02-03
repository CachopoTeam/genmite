import {
  Component,
  CSSDefaultParser,
  FileTypes,
  PrettierParser
} from '../../core';

export class ReactStatelessComponent extends Component {
  constructor(destinationFolder: string, componentFolder: string) {
    super(destinationFolder, componentFolder);
  }

  init(): void {
    const prettierParser = new PrettierParser();
    const fileTypes = new FileTypes();
    const jsType = fileTypes.add('.js', prettierParser);
    const specJsType = fileTypes.add('.spec.js', prettierParser);
    const cssType = fileTypes.add('.css', CSSDefaultParser());
    const componentFolder = this.getComponentFolder();
    const classNameCSS = componentFolder.toLowerCase();

    this.add(jsType, this.defaultReactJS(componentFolder, componentFolder.toLowerCase()));
    this.add(cssType, this.defaultReactCSS(classNameCSS));
    this.add(
      jsType,
      this.defaultReactIndex(componentFolder),
      'index'
    );
    this.add(specJsType, this.defaultReactSpec(componentFolder));
  }

  private defaultReactJS(className: string, classNameCSS: string): string {
    return `
      import React from 'react'
      import PropTypes from 'prop-types'
      import './${className}.css'

      const ${className} = props => (
        <div className="${classNameCSS}">
          <h3>${className} Stateless Component generated from the cli</h3>
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
      import { ${className} } from './AddArticle';

      describe('${className} suite', () => {
        it('renders ${className} without any state injected', () => {
          const component = shallow(<${className} />);
          expect(component).toBeDefined();
        });
      });
    `;
  }
}
