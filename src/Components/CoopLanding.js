import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledArticleWrapper = styled.div`
  border: solid 2px white;
  border-radius: 5px;
  margin: 30px;
  padding: 25px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
`;

const StyledText = styled.p`
  color: ${props => props.color || "#f7f9fb"};
  font-size: ${props => props.fontSize || "1em"};
  font-family: ${props => props.fontFamily};
  line-height: 25px;
  z-index: 100;

  @media (max-width: 835px) {
    font-size: 15px;
  }
`;

const CoopLanding = () => {
  return (
    <StyledWrapper>
      <StyledArticleWrapper>
        <StyledText
          color="#00a5ff"
          fontSize="20px"
          fontFamily={"opensans-bold"}
        >
          Welcome to my Work Term Reports!
        </StyledText>
        <hr />
        <StyledText color="#b7b7b7">
          This spot of my site is where I record my experiences and learnings
          from my university co-op placements. I will have 3 work terms in the
          duration of my degree, two 8 month placements and one 4 month
          placement. So far I have completed my first 8 month placement and it
          has been awesome! To view each co-op work term report, select the
          company from the dropdown hamburger menu in the top left of the nav
          bar! As a viewer you should be able to get a good understanding of
          each placement through my experiences, as well as identify my goals
          and how I accomplished them.
          <br />
          <br />
          If you did not read my bio on the main page of my site, lets get to
          know eachother! I am currently in my third year at the University of
          Guelph studying Software Engineering, and I have just completed my
          first placement at Toronto based cryptocurrency trading platform,
          Coinsquare. I am experienced in object oriented, functional, and
          imperative programming using technologies randing from Java to
          Javascript to C. I am currently interested in full stack web
          development, blockchain principles and architecture, and AI
          technology.
          <br />
          <br />
          Go checkout my work term reports, or head back to the main site with
          the other button in the nav bar. If you are looking to contact me, hit
          me up at <a href="mailto:me@alexmontague.ca">me@alexmontague.ca</a>,
          or head back to see my resume/portfolio!
        </StyledText>
      </StyledArticleWrapper>
    </StyledWrapper>
  );
};

export default CoopLanding;
