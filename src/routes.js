import React from "react";
import { Switch, Route } from "react-router";
import Home from "./Components/Home";
import WorkTermReports from "./Components/WorkTermReports";
import { Tesla } from "./Components/Recruiting";

const routes = (
  <Switch>
    {/* Main Page */}
    <Route exact path="/" component={Home} />

    {/* Co-op Workterm Reports */}
    <Route path="/co-op_workterm_reports" component={WorkTermReports} />

    {/* Recruiting Pages */}
    <Route exact path="/tesla" component={Tesla} />
  </Switch>
);

export default routes;
