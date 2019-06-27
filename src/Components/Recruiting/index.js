import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import resume from "../../assets/resumeData.json";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const GradientBackground = styled.div`
  background-image: linear-gradient(
    to bottom right,
    ${props => props.companyColors[0]},
    ${props => props.companyColors[1]}
  );
  height: 100%;
  display: flex;
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
  color: ${props => (props.textColor ? props.textColor : "darkslategrey")};
`;

const CarouselContainer = styled.div`
  width: 55%;
  margin: 0 auto;

  @media (max-width: 1080px) {
    width: 95%;
  }
`;

const IndividualPic = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;

  @media (max-width: 1080px) {
    width: 90%;
    justify-content: space-around;
  }
`;

const StyledLink = styled.a`
  color: #ffffff !important;

  :hover {
    color: #000000 !important;
  }
`;

const StyledRouterLink = styled(Link)`
  color: #ffffff !important;

  :hover {
    color: #000000 !important;
  }
`;

const RecruitingComponent = ({
  companyName,
  companyColors,
  textColor = null
}) => {
  const renderPortfolioItems = () => {
    const showcasedProjects = resume.portfolio.projects.filter(project =>
      ["Cryptowatch", "Book Buy", "am.ca Server", "Awesome Ancestors"].includes(
        project.title
      )
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
              color: textColor ? textColor : "darkslategrey"
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
                  <StyledLink
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={"fab fa-2x fa-github"} />
                  </StyledLink>
                )}
                {project.links.hosted && (
                  <StyledLink
                    href={project.links.hosted}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className={"fas fa-2x fa-external-link-alt"} />
                  </StyledLink>
                )}
              </div>
              {/* Be careful with XSS if ever fetching */}
              <div
                style={{ color: textColor ? textColor : "darkslategrey" }}
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
    <GradientBackground companyColors={companyColors}>
      <PhotoContainer>
        <IndividualPic>
          <HeaderText>Alex Montague</HeaderText>
          <BubbleImage src="images/profilepic.jpg" alt="Headshot" />
        </IndividualPic>
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
        <IndividualPic>
          <HeaderText>{companyName}</HeaderText>
          <BubbleImage
            src={`images/recruiting/${companyName.toLowerCase()}.png`}
            alt={companyName}
          />
        </IndividualPic>
      </PhotoContainer>

      <div style={{ padding: "25px", width: "65%" }}>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          {resume.main.social.map(item => (
            <StyledLink
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={item.className} />
            </StyledLink>
          ))}
        </div>
        <hr style={{ color: "#ffffff", height: 1, width: "100%" }} />
        <Paragraph textColor={textColor}>
          {`Hey ${companyName}! My Name is Alex Montague and I am a Software Engineering
          student studying at the University of Guelph. I will be looking for my
          third internship starting in January 2020 for a 4 or 8 month
          placement. I would love to experience everything ${companyName} has to offer.`}
        </Paragraph>

        <Paragraph textColor={textColor}>
          {`I strive to work for innovative, fast moving and agile companies.
          Thats why I think an internship at ${companyName} would be such a great fit.
          Utilizing my past internships and side projects, I have been exposed
          to tech ecosystems ranging from full stack web development and AI and
          ML prototypes to low level systems + networking. I would be thrilled
          to work in any area that I have experience in, or hungry for a
          challenge working on something new.`}
        </Paragraph>

        <Paragraph textColor={textColor}>
          Some technology and frameworks that I am passionate about are
          React/Redux, NodeJS, Golang, C, Python, Blockchain, Neural Networks,
          Relational and Document based Databases and Analytics. Below are a few
          relevant projects that I think showcase my abilities. Feel free to
          <StyledRouterLink smooth to="/#contact" style={{ color: "#ffffff" }}>
            {" "}
            <span style={{ textDecoration: "underline" }}>contact me</span>{" "}
          </StyledRouterLink>
          or checkout the rest of my{" "}
          <StyledRouterLink smooth to="/" style={{ color: "#ffffff" }}>
            {" "}
            <span style={{ textDecoration: "underline" }}>site!</span>{" "}
          </StyledRouterLink>
          Thank you for your time and I appreciate the opportunity!
        </Paragraph>
      </div>
      <CarouselContainer>
        <Carousel
          showThumbs={false}
          infiniteLoop={true}
          useKeyboardArrows={true}
        >
          {renderPortfolioItems()}
        </Carousel>
      </CarouselContainer>
    </GradientBackground>
  );
};

export default RecruitingComponent;
