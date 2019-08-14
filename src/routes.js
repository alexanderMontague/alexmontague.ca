import React from "react";
import { Switch, Route } from "react-router";
import Home from "./Components/Home";
import WorkTermReports from "./Components/WorkTermReports";
import recruitingRoutes from "./Components/Recruiting/routes";

const routes = (
  <Switch>
    {/* Main Page */}
    <Route exact path="/" component={Home} />

    {/* Co-op Workterm Reports */}
    <Route path="/co-op" component={WorkTermReports} />

    {/* Recruiting Pages */}
    {recruitingRoutes}
  </Switch>
);

export default routes;
