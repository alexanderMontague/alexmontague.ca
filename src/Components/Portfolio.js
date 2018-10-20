import React, { Component } from "react";

class Portfolio extends Component {
  renderMedia = file => {
    const filePath = `images/portfolio/${file}`;
    // videos are messed up
    // if (file.includes(".mp4")) {
    //   // if a video
    //   return (
    //     <video
    //       autoplay
    //       loop
    //       muted
    //       playsinline
    //       className="portfolioImage"
    //       src={filePath}
    //     />
    //   );
    // }

    return (
      <img src={filePath} alt="portfolio item" className="portfolioImage" />
    );
  };

  render() {
    const projects = this.props.data.projects.map(project => {
      const { title, category, url, image } = project;
      return (
        <div key={title}>
          <a href={url} target="_blank">
            <div className="portfolioItem">
              <h5>{title}</h5>
              <span className="flexMeUp">
                {this.renderMedia(image)}
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
