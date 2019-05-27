import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const GradientBackground = styled.div`
  background-image: linear-gradient(to bottom right, red, white);
  height: ${window.innerHeight}px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const PhotoContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
`;

const BubbleImage = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50%;
  margin: 15px 0;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
`;

const HeaderText = styled.div`
  font-size: 25px;
  color: #ffffff;
`;

const Paragraph = styled.div`
  padding-top: 30px;
  color: #000000;
`;

const TeslaLanding = props => {
  return (
    <GradientBackground>
      <PhotoContainer>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "200px"
          }}
        >
          <HeaderText>Alex Montague</HeaderText>
          <BubbleImage src="images/profilepic.jpg" alt="Headshot" />
        </div>
        <div
          style={{
            fontSize: 25,
            padding: "0 50px",
            margin: "auto 0",
            color: "#ffffff"
          }}
        >
          x
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "200px"
          }}
        >
          <HeaderText>Tesla</HeaderText>
          <BubbleImage src="images/profilepic.jpg" alt="tesla" />
        </div>
      </PhotoContainer>

      <div style={{ padding: "25px", width: "65%" }}>
        <Paragraph>
          Hey Tesla! My Name is Alex Montague and I am a Software Engineering
          Student studying at the University of Guelph. I will be looking for my
          third internship starting in January 2020 for a 4 or 8 month
          placement. I would love to experience everything Tesla has to offer,
          and please keep reading to find out why!
        </Paragraph>

        <Paragraph>
          I love working for innovative, fast moving and agile companies. Thats
          why I think an internship at Tesla would be such a great fit.
          Utilizing my past internships and side projects, I have been exposed
          to full stack web development, AI and ML prototypes, and low level
          systems + networking. I would be thrilled to work in any of these
          areas that I have experience in, or up for the challenge to a
          completely new sector.
        </Paragraph>

        <Paragraph>
          Some technology and frameworks that I am passionate about are
          React/Redux, NodeJS, Golang, C, Python, Blockchain, Neural Networks,
          Relational and Document based Databases and Analytics. Check out some
          of my projects and skills for a full overview{" "}
          <Link to="/#works">Here!</Link>
        </Paragraph>
      </div>
    </GradientBackground>
  );
};

export default TeslaLanding;
