import React, { Component } from "react";
import "./App.css";
import FunctionComponent from "./components/FunctionComponent";
import ClassComponent from "./components/ClassComponent";
import KeyPadComponent from "./components/KeyPadComponent";
import DisplayComponent from "./components/DisplayComponent";
import InputComponent from "./components/InputComponent";
import InputDisplayComponent from "./components/InputDisplayComponent";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
      inputVal: "",
    };
  }

  onChange = (input) => {
    console.log(input);
    this.setState({
      inputVal: input,
    });
  };

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };
  calculate = () => {
    try {
      console.log(this.state.result);
      this.setState({
        result: eval(this.state.result),
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <FunctionComponent />
        <ClassComponent />
        <InputDisplayComponent inputVal={this.state.inputVal} />
        <InputComponent onChange={this.onChange} />
        <DisplayComponent result={this.state.result} />
        <KeyPadComponent onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
