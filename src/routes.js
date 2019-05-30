import React from "react";
import { Switch, Route } from "react-router";
import Home from "./Components/Home";
import WorkTermReports from "./Components/WorkTermReports";
import RecruitingComponent from "./Components/Recruiting";

const DefaultRecruitingComponent = ({ ...rest }) => {
  return <Route {...rest} render={() => <RecruitingComponent {...rest} />} />;
};

const routes = (
  <Switch>
    {/* Main Page */}
    <Route exact path="/" component={Home} />

    {/* Co-op Workterm Reports */}
    <Route path="/co-op_workterm_reports" component={WorkTermReports} />

    {/* Recruiting Pages */}
    <DefaultRecruitingComponent
      path="/tesla"
      companyName="Tesla"
      companyColors={["#ff0000", "#ffffff"]}
    />

    <DefaultRecruitingComponent
      path="/facebook"
      companyName="Facebook"
      companyColors={["#0027ff", "#ffffff"]}
      // textColor="#ffffff"
    />
  </Switch>
);

export default routes;
