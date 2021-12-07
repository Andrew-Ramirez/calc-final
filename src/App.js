import React, { Component } from "react";
import Calc from "./calcComponents/Calc";
import Display from "./calcComponents/Display";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }

  onClick = (button) => {
    if (button === "=") {
      this.eval();
    }

    else if (button === "Clear") {
      this.clear();
    }

    else if (button === "del") {
      this.del();
    } 
    
    else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  eval = () => {
    var solution = this.state.result;

    this.setState({
      result: eval(solution),
    });
  };

  clear = () => {
    this.setState({
      result: "",
    });
  };
  del = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div className = "test">
        <h1>I did it maybe idk</h1>
        <Display result={this.state.result} />
        <Calc onClick={this.onClick} />
      </div>
    );
  }
}

export default App;
