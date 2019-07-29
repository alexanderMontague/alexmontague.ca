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
  />,

  <DefaultRecruitingComponent
    path="/easypost"
    companyName="Easy Post"
    companyColors={["#324199", "#324199"]}
    textColor="#ffffff"
  />,

  <DefaultRecruitingComponent
    path="/udemy"
    companyName="Udemy"
    companyColors={["#DB5D58", "#DB5D58"]}
    textColor="#ffffff"
  />,

  <DefaultRecruitingComponent
    path="/amazon"
    companyName="Amazon"
    companyColors={["#ECA63F", "#ECA63F"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/airbnb"
    companyName="Airbnb"
    companyColors={["#ED6664", "#ED6664"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/cohesity"
    companyName="Cohesity"
    companyColors={["#9FC756", "#9FC756"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/github"
    companyName="GitHub"
    companyColors={["#171515", "#171515"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/salesforce"
    companyName="Salesforce"
    companyColors={["#479BD2", "#479BD2"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/roku"
    companyName="Roku"
    companyColors={["#4B327D", "#4B327D"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/linkedin"
    companyName="LinkedIn"
    companyColors={["#3D82B7", "#3D82B7"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/youtube"
    companyName="YouTube"
    companyColors={["#EB3232", "#EB3232"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/evernote"
    companyName="Evernote"
    companyColors={["#4BA534", "#4BA534"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/rakuten"
    companyName="Rakuten"
    companyColors={["#AE2317", "#AE2317"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/mongodb"
    companyName="MongoDB"
    companyColors={["#64A757", "#64A757"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/stripe"
    companyName="Stripe"
    companyColors={["#5F5AC8", "#5F5Ac8"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/square"
    companyName="Square"
    companyColors={["#171515", "#171515"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/slack"
    companyName="Slack"
    companyColors={["#63C3EC", "#E3B34B"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/twitter"
    companyName="Twitter"
    companyColors={["#67AAEB", "#67AAEB"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/yelp"
    companyName="Yelp"
    companyColors={["#AE2317", "#AE2317"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/intuit"
    companyName="Intuit"
    companyColors={["#3777B8", "#6DB9E6"]}
    textColor="#FFFFFF"
  />,

  <DefaultRecruitingComponent
    path="/instacart"
    companyName="Instacart"
    companyColors={["#F08933", "#F08933"]}
    textColor="#FFFFFF"
  />
];

export default recruitingRoutes;
