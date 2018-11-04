import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
`;

const StyledTableOfContents = styled.div`
  width: 30%;
  height: 40%;
  border: solid 2px white;
  border-radius: 5px;
  margin: 20px 10px 20px 20px;
  padding: 25px;
  z-index: 1;
`;

const StyledArticleWrapper = styled.div`
  /* width: 70%; */
  border: solid 2px white;
  border-radius: 5px;
  /* margin: 20px 20px 20px 10px; */
  margin: 50px;
  padding: 25px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
`;

const StyledText = styled.p`
  color: ${props => props.color || "#f7f9fb"};
  font-size: ${props => props.fontSize || "1em"};
  line-height: 25px;
  z-index: 100;

  @media (max-width: 835px) {
    font-size: 15px;
  }
`;

const CoinsquareTerm = () => {
  return (
    <StyledWrapper>
      {/* <StyledTableOfContents>
        <h5>Table of Contents:</h5>
        <hr />
      </StyledTableOfContents> */}
      <StyledArticleWrapper>
        <h5>Welcome to my Work Term Reports!</h5>
        <hr />
        <StyledText>
          This spot of my site is where I record my experiences and learnings
          from my university co-op placements. I will have 3 work terms in the
          duration of my degree, two 8 month placements and one 4 month
          placement. So far I have completed my first 8 month placement and it
          has been awesome! To view each co-op work term report, select the
          company from the dropdown hamburger menu in the top left on the nav
          bar!
          <br />
          <br />
          If you did not read my bio on the main page of my site, lets get to
          know eachother! I am currently in my third year at the University of
          Guelph studying Software Engineering, and I have just completed my
          first placement at the Toronto based cryptocurrency trading platform,
          Coinsquare. I am experienced in object oriented, functional, and
          imperative programming using technologies randing from Java to
          Javascript to C.
          <br />
          <br />
          Go checkout my work term reports, or head back to the main site with
          the other button in the nav bar. If you are looking to contact me, hit
          me up at <a href="mailto:me@alexmontague.ca">me@alexmontague.ca</a> or
          head back to see my resume/portfolio!
        </StyledText>
      </StyledArticleWrapper>
    </StyledWrapper>
  );
};

export default CoinsquareTerm;
