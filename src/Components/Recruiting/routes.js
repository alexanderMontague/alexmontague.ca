import React from "react";
import { Route } from "react-router";
import RecruitingComponent from "./index";

const DefaultRecruitingComponent = ({ ...rest }) => {
  return <Route {...rest} render={() => <RecruitingComponent {...rest} />} />;
};

const recruitingRoutes = [
  <DefaultRecruitingComponent
    path="/tesla"
    companyName="Tesla"
    companyColors={["#ff0000", "#ffffff"]}
  />,

  <DefaultRecruitingComponent
    path="/facebook"
    companyName="Facebook"
    companyColors={["#3172EA", "#ffffff"]}
  />,

  <DefaultRecruitingComponent
    path="/apple"
    companyName="Apple"
    companyColors={["#B3B3B3", "#ffffff"]}
  />,

  <DefaultRecruitingComponent
    path="/google"
    companyName="Google"
    companyColors={["#529F56", "#ffffff"]}
  />,

  <DefaultRecruitingComponent
    path="/lyft"
    companyName="Lyft"
    companyColors={["#D73081", "#ffffff"]}
  />,

  <DefaultRecruitingComponent
    path="/uber"
    companyName="Uber"
    companyColors={["#000000", "#ffffff"]}
    textColor="#ffffff"
  />,

  <DefaultRecruitingComponent
    path="/drop"
    companyName="Drop"
    companyColors={["#000000", "#ffffff"]}
    textColor="#ffffff"
  />,

  <DefaultRecruitingComponent
    path="/vivo"
    companyName="Vivo"
    companyColors={["#497F93", "#ffffff"]}
    textColor="#ffffff"
  />,

  <DefaultRecruitingComponent
    path="/rideos"
    companyName="RideOS"
    companyColors={["#3D92F7", "#ffffff"]}
    textColor="#ffffff"
  />,

  <DefaultRecruitingComponent
    path="/youtech"
    companyName="YouTech"
    companyColors={["#001FF5", "#ffffff"]}
    textColor="#ffffff"
  />,

  <DefaultRecruitingComponent
    path="/belcan"
    companyName="Belcan"
    companyColors={["#041F6E", "#ffffff"]}
    textColor="#ffffff"
  />,

  <DefaultRecruitingComponent
    path="/hellosign"
    companyName="HelloSign"
    companyColors={["#50B0E1", "#ffffff"]}
  />,

  <DefaultRecruitingComponent
    path="/samsara"
    companyName="Samsara"
    companyColors={["#000000", "#ffffff"]}
    textColor="#ffffff"
  />,

  <DefaultRecruitingComponent
    path="/box"
    companyName="Box"
    companyColors={["#3580C0", "#3580C0"]}
    textColor="#ffffff"
  />,

  <DefaultRecruitingComponent
    path="/justanswer"
    companyName="Just Answer"
    companyColors={["#6Db8D2", "#6Db8D2"]}
    textColor="#ffffff"
  />,

  <DefaultRecruitingComponent
    path="/vsco"
    companyName="VSCO"
    companyColors={["#000000", "#ffffff"]}
    textColor="#ffffff"
  />,

  <DefaultRecruitingComponent
    path="/okta"
    companyName="Okta"
    companyColors={["#337CBB", "#5CABDF"]}
    textColor="#ffffff"
  />
];

export default recruitingRoutes;
