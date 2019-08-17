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
    key="Tesla"
  />,

  <DefaultRecruitingComponent
    path="/facebook"
    companyName="Facebook"
    companyColors={["#3172EA", "#ffffff"]}
    key="Facebook"
  />,

  <DefaultRecruitingComponent
    path="/apple"
    companyName="Apple"
    companyColors={["#B3B3B3", "#ffffff"]}
    key="Apple"
  />,

  <DefaultRecruitingComponent
    path="/google"
    companyName="Google"
    companyColors={["#529F56", "#ffffff"]}
    key="Google"
  />,

  <DefaultRecruitingComponent
    path="/lyft"
    companyName="Lyft"
    companyColors={["#D73081", "#ffffff"]}
    key="Lyft"
  />,

  <DefaultRecruitingComponent
    path="/uber"
    companyName="Uber"
    companyColors={["#000000", "#ffffff"]}
    textColor="#ffffff"
    key="Uber"
  />,

  <DefaultRecruitingComponent
    path="/drop"
    companyName="Drop"
    companyColors={["#000000", "#ffffff"]}
    textColor="#ffffff"
    key="Drop"
  />,

  <DefaultRecruitingComponent
    path="/vivo"
    companyName="Vivo"
    companyColors={["#497F93", "#ffffff"]}
    textColor="#ffffff"
    key="Vivo"
  />,

  <DefaultRecruitingComponent
    path="/rideos"
    companyName="RideOS"
    companyColors={["#3D92F7", "#ffffff"]}
    textColor="#ffffff"
    key="RideOS"
  />,

  <DefaultRecruitingComponent
    path="/youtech"
    companyName="YouTech"
    companyColors={["#001FF5", "#ffffff"]}
    textColor="#ffffff"
    key="YouTech"
  />,

  <DefaultRecruitingComponent
    path="/belcan"
    companyName="Belcan"
    companyColors={["#041F6E", "#ffffff"]}
    textColor="#ffffff"
    key="Belcan"
  />,

  <DefaultRecruitingComponent
    path="/hellosign"
    companyName="HelloSign"
    companyColors={["#50B0E1", "#ffffff"]}
    key="HelloSign"
  />,

  <DefaultRecruitingComponent
    path="/samsara"
    companyName="Samsara"
    companyColors={["#000000", "#ffffff"]}
    textColor="#ffffff"
    key="Samsara"
  />,

  <DefaultRecruitingComponent
    path="/box"
    companyName="Box"
    companyColors={["#3580C0", "#3580C0"]}
    textColor="#ffffff"
    key="Box"
  />,

  <DefaultRecruitingComponent
    path="/justanswer"
    companyName="Just Answer"
    companyColors={["#6Db8D2", "#6Db8D2"]}
    textColor="#ffffff"
    key="Just Answer"
  />,

  <DefaultRecruitingComponent
    path="/vsco"
    companyName="VSCO"
    companyColors={["#000000", "#ffffff"]}
    textColor="#ffffff"
    key="VSCO"
  />,

  <DefaultRecruitingComponent
    path="/okta"
    companyName="Okta"
    companyColors={["#337CBB", "#5CABDF"]}
    textColor="#ffffff"
    key="Okta"
  />,

  <DefaultRecruitingComponent
    path="/easypost"
    companyName="Easy Post"
    companyColors={["#324199", "#324199"]}
    textColor="#ffffff"
    key="Easy Post"
  />,

  <DefaultRecruitingComponent
    path="/udemy"
    companyName="Udemy"
    companyColors={["#DB5D58", "#DB5D58"]}
    textColor="#ffffff"
    key="Udemy"
  />,

  <DefaultRecruitingComponent
    path="/amazon"
    companyName="Amazon"
    companyColors={["#ECA63F", "#ECA63F"]}
    textColor="#FFFFFF"
    key="Amazon"
  />,

  <DefaultRecruitingComponent
    path="/airbnb"
    companyName="Airbnb"
    companyColors={["#ED6664", "#ED6664"]}
    textColor="#FFFFFF"
    key="Airbnb"
  />,

  <DefaultRecruitingComponent
    path="/cohesity"
    companyName="Cohesity"
    companyColors={["#9FC756", "#9FC756"]}
    textColor="#FFFFFF"
    key="Cohesity"
  />,

  <DefaultRecruitingComponent
    path="/github"
    companyName="GitHub"
    companyColors={["#171515", "#171515"]}
    textColor="#FFFFFF"
    key="GitHub"
  />,

  <DefaultRecruitingComponent
    path="/salesforce"
    companyName="Salesforce"
    companyColors={["#479BD2", "#479BD2"]}
    textColor="#FFFFFF"
    key="Salesforce"
  />,

  <DefaultRecruitingComponent
    path="/roku"
    companyName="Roku"
    companyColors={["#4B327D", "#4B327D"]}
    textColor="#FFFFFF"
    key="Roku"
  />,

  <DefaultRecruitingComponent
    path="/linkedin"
    companyName="LinkedIn"
    companyColors={["#3D82B7", "#3D82B7"]}
    textColor="#FFFFFF"
    key="LinkedIn"
  />,

  <DefaultRecruitingComponent
    path="/youtube"
    companyName="YouTube"
    companyColors={["#EB3232", "#EB3232"]}
    textColor="#FFFFFF"
    key="YouTube"
  />,

  <DefaultRecruitingComponent
    path="/evernote"
    companyName="Evernote"
    companyColors={["#4BA534", "#4BA534"]}
    textColor="#FFFFFF"
    key="Evernote"
  />,

  <DefaultRecruitingComponent
    path="/rakuten"
    companyName="Rakuten"
    companyColors={["#AE2317", "#AE2317"]}
    textColor="#FFFFFF"
    key="Rakuten"
  />,

  <DefaultRecruitingComponent
    path="/mongodb"
    companyName="MongoDB"
    companyColors={["#64A757", "#64A757"]}
    textColor="#FFFFFF"
    key="MongoDB"
  />,

  <DefaultRecruitingComponent
    path="/stripe"
    companyName="Stripe"
    companyColors={["#5F5AC8", "#5F5Ac8"]}
    textColor="#FFFFFF"
    key="Stripe"
  />,

  <DefaultRecruitingComponent
    path="/square"
    companyName="Square"
    companyColors={["#171515", "#171515"]}
    textColor="#FFFFFF"
    key="Square"
  />,

  <DefaultRecruitingComponent
    path="/slack"
    companyName="Slack"
    companyColors={["#63C3EC", "#E3B34B"]}
    textColor="#FFFFFF"
    key="Slack"
  />,

  <DefaultRecruitingComponent
    path="/twitter"
    companyName="Twitter"
    companyColors={["#67AAEB", "#67AAEB"]}
    textColor="#FFFFFF"
    key="Twitter"
  />,

  <DefaultRecruitingComponent
    path="/yelp"
    companyName="Yelp"
    companyColors={["#AE2317", "#AE2317"]}
    textColor="#FFFFFF"
    key="Yelp"
  />,

  <DefaultRecruitingComponent
    path="/intuit"
    companyName="Intuit"
    companyColors={["#3777B8", "#6DB9E6"]}
    textColor="#FFFFFF"
    key="Intuit"
  />,

  <DefaultRecruitingComponent
    path="/instacart"
    companyName="Instacart"
    companyColors={["#F08933", "#F08933"]}
    textColor="#FFFFFF"
    key="Instacart"
  />,

  <DefaultRecruitingComponent
    path="/twitch.tv"
    companyName="Twitch"
    companyColors={["#5F459F", "#5F459F"]}
    textColor="#FFFFFF"
    key="twitch"
  />,

  <DefaultRecruitingComponent
    path="/bird"
    companyName="Bird"
    companyColors={["#000000", "#ffffff"]}
    textColor="#FFFFFF"
    key="bird"
  />,

  <DefaultRecruitingComponent
    path="/figma"
    companyName="Figma"
    companyColors={["#171515", "#171515"]}
    textColor="#FFFFFF"
    key="figma"
  />
];

export default recruitingRoutes;
