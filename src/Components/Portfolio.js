import React, { Component } from "react";

import { ProjectItem } from "./ProjectItem";

class Portfolio extends Component {
  render() {
    const projects = this.props.data.projects.map(project => {
      return <ProjectItem project={project} key={project.title} />;
    });

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Work!</h1>
            <div id="portfolio-wrapper" className="portfolioContainer">
              {projects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
