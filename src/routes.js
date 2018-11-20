import React from "react";
import { Switch, Route } from "react-router";
import Home from "./Components/Home";
import WorkTermReports from "./Components/WorkTermReports";

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/co-op_workterm_reports" component={WorkTermReports} />
  </Switch>
);

export default routes;
