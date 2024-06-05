import React from "react";
import Card from "./card";

export default class ClickCounterButton extends React.Component {
  constructor() {
    super();
    this.state = { clicks: 0 };
  }

  clickAndCount = () => {
    let clicks = this.state.clicks;
    this.setState({ clicks: clicks + 1 });
  };

  render() {
    return (
      <Card>
        <p>Times clicked: {this.state.clicks}</p>
        <button type="button" onClick={this.clickAndCount}>
          Click to add +1
        </button>
      </Card>
    );
  }
}
