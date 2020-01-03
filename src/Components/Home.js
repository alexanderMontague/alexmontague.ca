import React, { Fragment, Component } from "react";
import axios from "axios";

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

    // used to alert when my API goes down
    let ERROR = false;
    setInterval(() => {
      axios
        .get("https://www.api.alexmontague.ca/resume")
        .then(() => {
          ERROR = false;
        })
        .catch(async err => {
          if (ERROR !== true) {
            ERROR = true;
            await axios.post(
              "https://discordapp.com/api/webhooks/662714536025128981/Ftz7XCnjiGlto2bGDku4xquErE4Q8elD1H3raqeaDD0OrF5RcTSnnLq7UuEMJcYYKcNQ",
              {
                content:
                  "@Monty api.alexmontague.ca is currently down: " + err.message
              }
            );
          }
        });
    }, 36e5);
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
