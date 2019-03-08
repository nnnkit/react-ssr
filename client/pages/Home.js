import React, { Component } from "react";

class Home extends Component {
  render() {
    return <div onClick={() => console.log("Clicked")}>Hello World</div>;
  }
}

export default {
  component: Home
};
