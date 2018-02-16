const {
  Component, CSSDefaultParser, NullParser
} = require('genmite');

class ReasonReactComponent extends Component {

  constructor(destinationFolder, componentFolder, config) {
    super(destinationFolder, componentFolder, config);
  }

  init() {
    const reType = {
      fileExtension: '.re',
      parser: new NullParser()
    };
    
    const cssType = {
      fileExtension: '.css',
      parser: CSSDefaultParser()
    };

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