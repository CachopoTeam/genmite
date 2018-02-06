const {
  AngularUtils,
  Component,
  FileTypes,
  HTMLDefaultParser,
  SCSSDefaultParser,
  TypescriptDefaultParser
 } = require('./../../dist/genmite.umd');

export class MyAngularComponent extends Component {
  private angularUtils: AngularUtils;
  private prefix: string;

  constructor(
    destinationFolder: string,
    componentFolder: string,
    prefix: string
  ) {
    super(destinationFolder, componentFolder);
    this.angularUtils = new AngularUtils();
    this.prefix = prefix;
  }

  init(): void {
    const fileTypes = new FileTypes();
    const indexTsType = fileTypes.add('.ts', TypescriptDefaultParser());
    const componentTsType = fileTypes.add(
      '.component.ts',
      TypescriptDefaultParser()
    );
    const specTsType = fileTypes.add(
      '.component.spec.ts',
      TypescriptDefaultParser()
    );
    const htmlType = fileTypes.add('.component.html', HTMLDefaultParser());
    const cssType = fileTypes.add('.component.scss', SCSSDefaultParser());
    const componentFolder = this.getComponentFolder();
    const className = this.angularUtils.generateClassName(componentFolder);
    this.add(
      componentTsType,
      this.defaultAngularComponent(componentFolder, className, this.prefix)
    );
    this.add(indexTsType, this.defaultAngularIndex(componentFolder), 'index');
    this.add(specTsType, this.defaultAngularSpec(componentFolder, className));
    this.add(htmlType, this.defaultAngularHTML(componentFolder, className));
    this.add(cssType, this.defaultAngularSCSS(componentFolder));
  }

  private defaultAngularComponent(
    component: string,
    className: string,
    prefix: string
  ): string {
    return `
      import { Component, OnInit } from '@angular/core';

      @Component({
        selector: '${prefix}-${component}',
        templateUrl: './${component}.component.html',
        styleUrls: ['./${component}.component.scss'],
      })
      export class ${className} implements OnInit {
        constructor(){}

        ngOnInit(): void {}
      }
    `;
  }

  private defaultAngularSpec(component: string, className: string): string {
    return `
      import { async, ComponentFixture, TestBed } from '@angular/core/testing';

      import { ${className} } from './${component}.component';

      describe('${className}', () => {
        let component: ${className};
        let fixture: ComponentFixture<${className}>;

        beforeEach(async(() => {
          TestBed.configureTestingModule({
            declarations: [
              ${className}
            ]
          });
        }));

        beforeEach(() => {
          fixture = TestBed.createComponent(${className});
          component = fixture.componentInstance;
        });

        it('should create the component', () => {
          expect(component).toBeTruthy();
        });

      });
    `;
  }

  private defaultAngularHTML(component: string, className: string): string {
    return `
      <section id="${component}">
        <h3>${className} generated from the cli</h3>
      </section>
    `;
  }

  private defaultAngularSCSS(component: string): string {
    return `
      #${component}{}
    `;
  }

  private defaultAngularIndex(component: string): string {
    return `
      export * from './${component}.component'
    `;
  }
}
