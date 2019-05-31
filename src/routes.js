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
      companyColors={["#3172EA", "#ffffff"]}
    />

    <DefaultRecruitingComponent
      path="/apple"
      companyName="Apple"
      companyColors={["#B3B3B3", "#ffffff"]}
    />

    <DefaultRecruitingComponent
      path="/google"
      companyName="Google"
      companyColors={["#529F56", "#ffffff"]}
    />

    <DefaultRecruitingComponent
      path="/lyft"
      companyName="Lyft"
      companyColors={["#D73081", "#ffffff"]}
    />

    <DefaultRecruitingComponent
      path="/uber"
      companyName="Uber"
      companyColors={["#000000", "#ffffff"]}
      textColor="#ffffff"
    />
  </Switch>
);

export default routes;
