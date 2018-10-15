import React, { Component } from "react";
import { Switch, Route } from "react-router";
import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga";

import "./App.css";

import Home from "./Components/Home";
import WorkTermReports from "./Components/WorkTermReports";

ReactGA.initialize("UA-127386154-1");
ReactGA.pageview(window.location.pathname);

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/co-op_workterm_reports" component={WorkTermReports} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
