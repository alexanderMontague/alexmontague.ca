import React from "react";
import styled from "styled-components";
import { HashLink as Link } from "react-router-hash-link";
import resume from "../../assets/resumeData.mjs";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { ProjectItem } from "../ProjectItem.js";

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

const MainContainer = styled.div`
  padding: 25px;
  max-width: 900px;

  @media (max-width: 675px) {
    max-width: 90%;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  width: 50%;
  justify-content: center;
  padding-top: 30px;

  @media (max-width: 675px) {
    width: 75%;
  }

  @media (max-width: 450px) {
    width: 90%;
  }
`;

const PhotoDivider = styled.div`
  font-size: 25px;
  padding: 0 50px;
  margin: auto 0;
  color: #ffffff;

  @media (max-width: 450px) {
    padding: 0 25px;
  }
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
  text-align: center;
`;

const Paragraph = styled.div`
  padding-top: 30px;
  color: ${props => (props.textColor ? props.textColor : "darkslategrey")};
`;

const CarouselContainer = styled.div`
  width: 55%;
  margin: 0 auto;
  padding-bottom: 40px;

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
  textColor = null,
}) => {
  const currCompany = resume.resume.work[0].company;

  const renderPortfolioItems = () => {
    const showcasedProjects = resume.portfolio.projects.filter(
      project => !["Greens Tracker"].includes(project.title)
    );

    return showcasedProjects.map(project => {
      return <ProjectItem key={project.title} project={project} vertical />;
    });
  };

  return (
    <GradientBackground companyColors={companyColors}>
      <PhotoContainer>
        <IndividualPic>
          <HeaderText>Alex Montague</HeaderText>
          <BubbleImage src="public/images/profilepic.jpg" alt="Headshot" />
        </IndividualPic>
        <PhotoDivider>x</PhotoDivider>
        <IndividualPic>
          <HeaderText>{companyName}</HeaderText>
          <BubbleImage
            src={`public/images/recruiting/${companyName
              .toLowerCase()
              .split(" ")
              .join("_")}.png`}
            alt={companyName}
          />
        </IndividualPic>
      </PhotoContainer>

      <MainContainer>
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
          {`Hey ${companyName}! I'm Alex Montague and I am a Full Stack Software Engineer currently working at ${currCompany}. I love all things Web2 and Web3, with lots of experience in both. I'm looking to build the next best thing, and I'm interested in all of what ${companyName} has to offer.`}
        </Paragraph>

        <Paragraph textColor={textColor}>
          {`I strive to work for innovative, fast moving and agile companies.
          Thats why I think ${companyName} would be such a great fit.
          Utilizing my past work experiences, I have been exposed
          to tech ecosystems ranging from full stack web development, Web3 and Blockchain development and AI/ML
          prototypes, to low level systems + networking. I would be thrilled
          to work in any area that I have experience in, or hungry for a
          challenge working on something new.`}
        </Paragraph>

        <Paragraph textColor={textColor}>
          Some technology and frameworks that I am passionate about are
          React/Redux, NodeJS/Typescript, Golang, C, Python, Blockchain, Neural
          Networks, Relational and Document based Databases and Analytics. Below
          are a few relevant projects that I think showcase my abilities. You
          can access my{" "}
          <StyledLink
            style={{ textDecoration: "underline" }}
            href={resume.main.resumedownload}
            target="_blank"
            rel="noopener noreferrer"
          >
            resume
          </StyledLink>{" "}
          by clicking here, or using the far right scroll icon on the top bar.
          Feel free to
          <StyledRouterLink smooth to="/#contact" style={{ color: "#ffffff" }}>
            {" "}
            <span style={{ textDecoration: "underline" }}>contact me</span>{" "}
          </StyledRouterLink>
          or checkout the rest of my{" "}
          <StyledRouterLink smooth to="/" style={{ color: "#ffffff" }}>
            {" "}
            <span style={{ textDecoration: "underline" }}>site!</span>{" "}
          </StyledRouterLink>
          <br />
          <br />
          Thank you for your time, and I look forward to meeting!
        </Paragraph>
      </MainContainer>
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
