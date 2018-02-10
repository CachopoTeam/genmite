const {
  Component, CSSDefaultParser, FileTypes, NullParser
} = require('genmite');

class ReasonReactComponent extends Component {

  constructor(destinationFolder, componentFolder) {
    super(destinationFolder, componentFolder);
  }

  init() {
    const fileTypes = new FileTypes();
    const reType = fileTypes.add('.re', new NullParser());
    const cssType = fileTypes.add('.css', CSSDefaultParser());

    this.add(reType, this.defaultReason(this.getComponentFolder()));
    this.add(cssType, this.defaultCSS(this.getComponentFolder()));
  }

  defaultReason(component) {
    return `
      let component = ReasonReact.statelessComponent("${component}");

      let handleClick = (_event, _self) => Js.log("clicked!");

      let make = (~message, _children) => {
        ...component,
        render: (self) =>
          <button className="demo" onClick=(self.handle(handleClick))> (ReasonReact.stringToElement(message)) </button>
      };
    `;
  }

  defaultCSS(component) {
    return `
      .${component}{}
    `;
  }
}


module.exports = ReasonReactComponent;