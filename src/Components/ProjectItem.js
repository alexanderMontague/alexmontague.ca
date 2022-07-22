import React from "react";

export function ProjectItem({
  project: { title, description, links, tech, asset },
}) {
  const renderMedia = () => {
    // const filePath = `public/images/portfolio/${asset}`;
    // videos are messed up

    if (asset.includes(".mov")) {
      // if a video
      console.log("video", asset);
      return (
        <video
          autoPlay
          loop
          muted
          playsInLine
          className="portfolioImage"
          src={asset}
        />
      );
    }

    return <img src={asset} alt="portfolio item" className="portfolioImage" />;
  };

  return (
    <div className="portfolioItem">
      <h5>{title}</h5>
      <div className="flexMeUp">
        {renderMedia()}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              paddingTop: 30,
              paddingBottom: 20,
            }}
          >
            {tech.map(tech => (
              <img
                key={tech}
                src={`public/images/tech/${tech}.png`}
                style={{ height: 40, width: 40 }}
                alt="tech item"
              />
            ))}
            {links.github && (
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <div className={"fab fa-github fa-2x"} />
              </a>
            )}
            {links.hosted && (
              <a href={links.hosted} target="_blank" rel="noopener noreferrer">
                <div className={"fas fa-external-link-alt fa-2x"} />
              </a>
            )}
          </div>
          {/* Be careful with XSS if ever fetching */}
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </div>
    </div>
  );
}
