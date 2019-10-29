import React from "react";
import "./Boiling.css";

const scaleNames = {
  c: "Celsius",
  f: "Fahrenheit"
};

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temperature: "",
      scale: "f"
    };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: "c", temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: "f", temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsiusTemp =
      scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheitTemp =
      scale === "c" ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div className="Calculator">
        <TemperatureInput
          scale="c"
          temperature={celsiusTemp}
          onTemperatureChange={this.handleCelsiusChange}
        />

        <TemperatureInput
          scale="f"
          temperature={fahrenheitTemp}
          onTemperatureChange={this.handleFahrenheitChange}
        />

        <BoilingVerdict celsius={celsiusTemp} />
      </div>
    );
  }
}

// Takes a temperature as a string and a conversion function and returns the converted temperature, rounded to two places.
// Example:
//  `tryConvert('abc', toCelsius)` returns an empty string
//  `tryConvert('10.22', toFahrenheit)` returns '50.396'.
function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function toCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

export default Calculator;
