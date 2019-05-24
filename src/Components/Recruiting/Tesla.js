import React from "react";
import styled from "styled-components";

const GradientBackground = styled.div`
  background-image: linear-gradient(to bottom right, red, white);
  height: ${window.innerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CenterContainer = styled.div``;

const PhotoContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`;

const BubbleImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
`;

const TeslaLanding = props => {
  return (
    <GradientBackground>
      <PhotoContainer>
        <BubbleImage src="images/profilepic.jpg" alt="Headshot" />
        <div style={{ fontSize: 25, padding: "0 20px" }}>X</div>
        <BubbleImage src="images/profilepic.jpg" alt="tesla" />
      </PhotoContainer>
    </GradientBackground>
  );
};

export default TeslaLanding;
