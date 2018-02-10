let component = ReasonReact.statelessComponent("hello");

let handleClick = (_event, _self) => Js.log("clicked!");

let make = (~message, _children) => {
  ...component,
  render: (self) =>
    <button className="demo" onClick=(self.handle(handleClick))>
      (ReasonReact.stringToElement(message))
    </button>
};
