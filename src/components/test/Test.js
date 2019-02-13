import React, { Component } from "react";

class Test extends Component {
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    return <h1>Test Component</h1>;
  }
}

export default Test;
