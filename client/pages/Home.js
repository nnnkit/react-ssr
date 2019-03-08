import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header";

class Home extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <meta charSet="utf-8" />
          <title>React SSR</title>
        </Helmet>
        Hello World
      </div>
    );
  }
}

export default {
  component: Home
};
