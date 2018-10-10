import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    const projects = this.props.data.projects.map((project, index) => {
      const { title, category, url, image } = project;
      const projectImage = "images/portfolio/" + image;
      return (
        <div key={title}>
          <a href={url} target="_blank">
            <div className="portfolioItem">
              <h5>{title}</h5>
              <span className="flexMeUp">
                <img
                  src={projectImage}
                  alt="portfolio item"
                  className="portfolioImage"
                />
                {category}
              </span>
            </div>
          </a>
        </div>
      );
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
