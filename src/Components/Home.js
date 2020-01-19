import React, { Fragment, Component } from "react";

import resumeData from "../assets/resumeData.js";

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Resume from "./Resume";
import Contact from "./Contact";
import Testimonials from "./Testimonials";
import Portfolio from "./Portfolio";

class Home extends Component {
  componentDidMount = () => {
    if (window.location.hash === "#reload") {
      window.location.hash = "#home";
      window.location.reload();
    }
  };

  render() {
    return (
      <Fragment>
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Testimonials data={resumeData.testimonials} />
        <Contact data={resumeData.main} />
        <Footer data={resumeData.main} />
      </Fragment>
    );
  }
}

export default Home;
