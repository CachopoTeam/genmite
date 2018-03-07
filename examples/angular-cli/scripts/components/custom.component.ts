import {
  AngularUtils,
  Component,
  HTMLDefaultParser,
  CSSDefaultParser,
  TypeInterface,
  TypescriptDefaultParser,
 } from 'genmite';

export class CustomComponent extends Component {
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
    const indexTsType: TypeInterface = {
      fileExtension: '.ts',
      parser: TypescriptDefaultParser()
    };
    const componentTsType: TypeInterface = {
      fileExtension: '.component.ts',
      parser: TypescriptDefaultParser()
    };

    const specTsType: TypeInterface = {
      fileExtension: '.component.spec.ts',
      parser: TypescriptDefaultParser()
    };

    const htmlType: TypeInterface = {
      fileExtension: '.component.html',
      parser: HTMLDefaultParser()
    };

    const cssType: TypeInterface = {
      fileExtension: '.component.css',
      parser: CSSDefaultParser()
    };
    const componentFolder = this.getComponentFolder();
    const className = this.angularUtils.generateClassName(componentFolder);
    this.add(
      componentTsType,
      this.defaultAngularComponent(componentFolder, className, this.prefix)
    );
    this.add(indexTsType, this.defaultAngularIndex(componentFolder), 'index');
    this.add(specTsType, this.defaultAngularSpec(componentFolder, className));
    this.add(htmlType, this.defaultAngularHTML(componentFolder, className));
    this.add(cssType, this.defaultAngularCSS(componentFolder));
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

  private defaultAngularCSS(component: string): string {
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
