import React from "react";

const TechItem = props => {
  const { imageSrc, header, text } = props;
  return (
    <div className="techCluster">
      <div className="techIconContainer">
        <img src={imageSrc} className="techIcon" alt="Tech Item" />
      </div>
      <h4>{header}</h4>
      <div>{text}</div>
    </div>
  );
};

export default TechItem;
