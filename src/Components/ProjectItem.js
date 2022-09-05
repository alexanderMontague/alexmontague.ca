import React from "react";
import cn from "classnames";

export function ProjectItem({
  project: { title, description, links, tech, asset },
  vertical = false,
}) {
  const renderMedia = () => {
    const mediaClass = cn("portfolioImage", !vertical && "paddingRight");

    if (asset.includes(".mov")) {
      // if a video
      return (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={mediaClass}
          src={asset}
        />
      );
    }

    return <img src={asset} alt="portfolio item" className={mediaClass} />;
  };

  return (
    <div className={cn("portfolioItem", vertical && "no-m")}>
      <h5>{title}</h5>
      <div className={cn("flexMeUp", vertical && "verticalFlexMeUp")}>
        {renderMedia()}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              paddingTop: 10,
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
          <div
            style={{ marginBottom: 50 }}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </div>
    </div>
  );
}
