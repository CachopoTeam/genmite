const {
  Component, CSSDefaultParser, FileTypes, NullParser
} = require('./../../dist/genmite.umd');

export class ReasonReactComponent extends Component {

  constructor(destinationFolder: string, componentFolder: string) {
    super(destinationFolder, componentFolder);
  }

  init(): void {
    const fileTypes = new FileTypes();
    const reType = fileTypes.add('.re', new NullParser());
    const cssType = fileTypes.add('.css', CSSDefaultParser());

    this.add(reType, this.defaultReason(this.getComponentFolder()));
    this.add(cssType, this.defaultCSS(this.getComponentFolder()));

  }

  private defaultReason(component: string): string {
    return `
      let component = ReasonReact.statelessComponent("${component}");

      let handleClick = (_event, _self) => Js.log("clicked!");

      let make = (~message, _children) => {
        ...component,
        render: (self) =>
          <div className="demo" onClick=(self.handle(handleClick))> (ReasonReact.stringToElement(message)) </div>
      };
    `;
  }

  private defaultCSS(component: string): string {
    return `
      .${component}{}
    `;
  }

}
