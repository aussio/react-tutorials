import React from "react";
import "./Toggle.css";

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClickOn = this.handleClickTurnOn.bind(this);
    this.handleClickOff = this.handleClickTurnOff.bind(this);
  }

  handleClickTurnOn() {
    this.setState({ isToggleOn: true });
  }

  handleClickTurnOff() {
    this.setState({ isToggleOn: false });
  }

  render() {
    let label;

    label = this.state.isToggleOn ? <p>Toggled On</p> : <p>Toggled Off</p>;

    return (
      <div className="Toggle">
        <button onClick={this.handleClickOn}>Turn On</button>
        <button onClick={this.handleClickOff}>Turn Off</button>
        {label}
      </div>
    );
  }
}

export default Toggle;
