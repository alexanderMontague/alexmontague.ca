import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import resume from "../../assets/resumeData.json";

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
  color: darkslategrey;
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
          <BubbleImage src="images/recruiting/tesla.jpg" alt="tesla" />
        </div>
      </PhotoContainer>

      <div style={{ padding: "25px", width: "65%" }}>
        <hr style={{ color: "#ffffff", height: 1, width: "100%" }} />
        <Paragraph>
          Hey Tesla! My Name is Alex Montague and I am a Software Engineering
          student studying at the University of Guelph. I will be looking for my
          third internship starting in January 2020 for a 4 or 8 month
          placement. I would love to experience everything Tesla has to offer.
        </Paragraph>

        <Paragraph>
          I strive to work for innovative, fast moving and agile companies.
          Thats why I think an internship at Tesla would be such a great fit.
          Utilizing my past internships and side projects, I have been exposed
          to full stack web development, AI and ML prototypes, and low level
          systems + networking. I would be thrilled to work in any of these
          areas that I have experience in, or up for the challenge working on
          something new.
        </Paragraph>

        <Paragraph>
          Some technology and frameworks that I am passionate about are
          React/Redux, NodeJS, Golang, C, Python, Blockchain, Neural Networks,
          Relational and Document based Databases and Analytics. Here are a few
          relevant projects that I think showcase my abilities.
          <Link smooth to="/#portfolio">
            here!
          </Link>
        </Paragraph>

        <div className="portfolioItem">
          <h5>{resume.portfolio.projects[0].title}</h5>
          <span className="flexMeUp">
            <img
              src={"images/portfolio/cryptoWatch.png"}
              alt="portfolio item"
              className="portfolioImage"
              style={{ height: 250 }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  paddingTop: 30,
                  paddingBottom: 20
                }}
              >
                {resume.portfolio.projects[0].links.github && (
                  <a
                    href={resume.portfolio.projects[0].links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={"fa fa-3x fa-github"} />
                  </a>
                )}
                {resume.portfolio.projects[0].links.hosted && (
                  <a
                    href={resume.portfolio.projects[0].links.hosted}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={"fa fa-3x fa-external-link"} />
                  </a>
                )}
              </div>
              {/* Be careful with XSS if ever fetching */}
              <div
                dangerouslySetInnerHTML={{
                  __html: resume.portfolio.projects[0].description
                }}
              />
            </div>
          </span>
        </div>
      </div>
    </GradientBackground>
  );
};

export default TeslaLanding;
