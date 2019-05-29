import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";
import { createGlobalStyle } from "styled-components";
import Routes from "./routes";

const GlobalStyles = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }
`;

ReactGA.initialize("UA-139159281-1");
ReactGA.pageview(window.location.pathname);

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyles />
        <BrowserRouter>{Routes}</BrowserRouter>
      </div>
    );
  }
}

export default App;
