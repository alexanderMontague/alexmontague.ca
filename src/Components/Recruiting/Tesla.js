import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import resume from "../../assets/resumeData.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const GradientBackground = styled.div`
  background-image: linear-gradient(to bottom right, red, white);
  height: 100%;
  display: flex;
  ${"" /* justify-content: center; */}
  align-items: center;
  flex-direction: column;
`;

const PhotoContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  padding-top: 30px;
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
  const renderPortfolioItems = () => {
    const showcasedProjects = resume.portfolio.projects.filter(project =>
      ["Cryptowatch", "Book Buy", "am.ca Server"].includes(project.title)
    );

    return showcasedProjects.map(project => {
      return (
        <div
          className="portfolioItem"
          style={{ width: "65%", margin: "30px auto" }}
          key={project.title}
        >
          <h5
            style={{
              textAlign: "center",
              padding: "10px 0",
              color: "darkslategrey"
            }}
          >
            {project.title}
          </h5>
          <span className="flexMeUp" style={{ flexDirection: "column" }}>
            <img
              src={`images/portfolio/${project.image}`}
              alt="portfolio item"
              style={{ height: 250 }}
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  padding: "10px 0"
                }}
              >
                {project.tech.map(tech => (
                  <img
                    key={tech}
                    src={`images/${tech}.png`}
                    style={{ height: 40, width: 40 }}
                    alt="tech item"
                  />
                ))}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ffffff" }}
                  >
                    <div className={"fab fa-2x fa-github"} />
                  </a>
                )}
                {project.links.hosted && (
                  <a
                    href={project.links.hosted}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#ffffff" }}
                  >
                    <div className={"fas fa-2x fa-external-link-alt"} />
                  </a>
                )}
              </div>
              {/* Be careful with XSS if ever fetching */}
              <div
                style={{ color: "darkslategrey" }}
                dangerouslySetInnerHTML={{
                  __html: project.description
                }}
              />
            </div>
          </span>
        </div>
      );
    });
  };

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
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {resume.main.social.map(item => (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#ffffff" }}
            >
              <div className={item.className} />
            </a>
          ))}
        </div>
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
          Relational and Document based Databases and Analytics. Below are a few
          relevant projects that I think showcase my abilities. Feel free to
          <Link smooth to="/#contact" style={{ color: "#ffffff" }}>
            {" "}
            contact me{" "}
          </Link>
          or checkout the rest of my{" "}
          <Link smooth to="/" style={{ color: "#ffffff" }}>
            {" "}
            site!{" "}
          </Link>
          Thank you for your time and I appreciate the opportunity!
        </Paragraph>

        <div style={{ width: "75%", margin: "0 auto" }}>
          <Carousel
            showThumbs={false}
            infiniteLoop={true}
            useKeyboardArrows={true}
          >
            {renderPortfolioItems()}
          </Carousel>
        </div>
      </div>
    </GradientBackground>
  );
};

export default TeslaLanding;
