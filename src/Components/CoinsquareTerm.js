import React from "react";
import styled from "styled-components";

import CoinsquareC from "../assets/Terms/Coinsquare/coinsquareC.jpg";

const StyledWrapper = styled.div`
  display: ${props => props.display || "flex"};
  flex-direction: ${props => props.flexDirection || "row"};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
  padding: ${props => props.padding};
  margin: ${props => props.margin};

  @media (max-width: 761px) {
    flex-direction: ${props => props.mobileFlexDirection || "column"};
  }
`;

const StyledTableOfContents = styled.div`
  width: 20%;
  min-height: 40%;
  border: solid 2px white;
  border-radius: 5px;
  margin: 20px 10px 20px 20px;
  padding: 25px;
  z-index: 1;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
  position: fixed;

  @media (max-width: 761px) {
    position: relative;
    width: auto;
    margin: 20px;
  }
`;

const StyledArticleWrapper = styled.div`
  width: 70%;
  border: solid 2px white;
  border-radius: 5px;
  margin: 20px 20px 20px 10px;
  margin-left: 29%;
  padding: 25px;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 761px) {
    width: auto;
    margin: 20px;
    margin-left: none;
  }
`;

const StyledList = styled.ul`
  margin: 20px 5px;
  padding-left: 15px;
  list-style: circle outside;
  word-wrap: break-word;
`;

const StyledLink = styled.a`
  color: ${props => props.color || "#b7b7b7"} !important;
  font-size: ${props => props.fontSize || "1em"} !important;
  font-family: ${props => props.fontFamily || "opensans-bold"} !important;
  line-height: 25px;

  &:hover {
    color: ${props => props.hoverColor || "#00a5ff"} !important;
  }
`;

const StyledText = styled.p`
  color: ${props => props.color || "#b7b7b7"};
  font-size: ${props => props.fontSize || "1em"};
  font-family: ${props => props.fontFamily};
  line-height: ${props => props.lineHeight || "25px"};
  z-index: 100;
  padding: ${props => props.padding};
  margin: ${props => props.margin};

  @media (max-width: 835px) {
    font-size: 15px;
  }
`;

const StyledImage = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: ${props => props.borderRadius};
  margin: ${props => props.margin};
`;

const CoinsquareTerm = () => {
  return (
    <StyledWrapper>
      <StyledTableOfContents>
        <StyledText
          color="#00a5ff"
          fontSize="20px"
          fontFamily={"opensans-bold"}
        >
          Table of Contents
        </StyledText>
        <hr />
        <StyledList>
          <li>
            <StyledLink href="#Intro">Intro</StyledLink>
          </li>
          <li>
            <StyledLink href="#Info">Employer Info</StyledLink>
          </li>
          <li>
            <StyledLink href="#Goals">Goals</StyledLink>
          </li>
          <li>
            <StyledLink href="#Description">Job Description</StyledLink>
          </li>
          <li>
            <StyledLink href="#Relation">Academic Relation</StyledLink>
          </li>
          <li>
            <StyledLink href="#Featured">Featured Aspect</StyledLink>
          </li>
          <li>
            <StyledLink href="#Extras">Extras</StyledLink>
          </li>
          <li>
            <StyledLink href="#Ack">Acknowledgments</StyledLink>
          </li>
        </StyledList>
      </StyledTableOfContents>
      <StyledArticleWrapper>
        <StyledWrapper mobileFlexDirection="row">
          <StyledText
            color="#00a5ff"
            fontSize="20px"
            fontFamily="opensans-bold"
            margin="auto 0"
          >
            Coinsquare - Canada's Cryptocurrency Exchange
          </StyledText>
          <StyledImage
            src={CoinsquareC}
            height="50px"
            width="50px"
            borderRadius="30px"
            margin="0 0 0 15px"
          />
        </StyledWrapper>
        <StyledText fontFamily="opensans-bold">
          Student Web Developer
        </StyledText>
        <StyledText fontFamily="opensans-bold">
          Toronto, Ontario, Canada
        </StyledText>
        <StyledText fontFamily="opensans-bold">
          Work Placement One: May 2018 - December 2018
        </StyledText>
        <hr />
        <StyledText>
          <span id="Intro">
            <span style={{ fontFamily: "opensans-bold" }}>Introduction: </span>
            This is the Intro
            <br />
            <br />
          </span>

          <span id="Info">
            <span style={{ fontFamily: "opensans-bold" }}>Information: </span>
            This is the info section
            <br />
            <br />
          </span>

          <span id="Goals">
            <span style={{ fontFamily: "opensans-bold" }}>Goals: </span>
            This is the goals section This spot of my site is where I record my
            experiences and learnings from my university co-op placements. I
            will have 3 work terms in the duration of my degree, two 8 month
            placements and one 4 month placement. So far I have completed my
            first 8 month placement and it has been awesome! To view each co-op
            work term report, select the company from the dropdown hamburger
            menu in the top left of the nav bar! As a viewer you should be able
            to get a good understanding of each placement through my
            experiences, as well as identify my goals and how I accomplished
            them. This spot of my site is where I record my experiences and
            learnings from my university co-op placements. I will have 3 work
            terms in the duration of my degree, two 8 month placements and one 4
            month placement. So far I have completed my first 8 month placement
            and it has been awesome! To view each co-op work term report, select
            the company from the dropdown hamburger menu in the top left of the
            nav bar! As a viewer you should be able to get a good understanding
            of each placement through my experiences, as well as identify my
            goals and how I accomplished them.
            <br />
            <br />
          </span>

          <span id="Description">
            <span style={{ fontFamily: "opensans-bold" }}>Description: </span>
            This is the desc section
            <br />
            <br />
          </span>

          <span id="Relation">
            <span style={{ fontFamily: "opensans-bold" }}>Relation: </span>
            This is the desc section This spot of my site is where I record my
            experiences and learnings from my university co-op placements. I
            will have 3 work terms in the duration of my degree, two 8 month
            placements and one 4 month placement. So far I have completed my
            first 8 month placement and it has been awesome! To view each co-op
            work term report, select the company from the dropdown hamburger
            menu in the top left of the nav bar! As a viewer you should be able
            to get a good understanding of each placement through my
            experiences, as well as identify my goals and how I accomplished
            them. This spot of my site is where I record my experiences and
            learnings from my university co-op placements. I will have 3 work
            terms in the duration of my degree, two 8 month placements and one 4
            month placement. So far I have completed my first 8 month placement
            and it has been awesome! To view each co-op work term report, select
            the company from the dropdown hamburger menu in the top left of the
            nav bar! As a viewer you should be able to get a good understanding
            of each placement through my experiences, as well as identify my
            goals and how I accomplished them.
            <br />
            <br />
          </span>

          <span id="Featured">
            <span style={{ fontFamily: "opensans-bold" }}>Featured: </span>
            This is the desc section This spot of my site is where I record my
            experiences and learnings from my university co-op placements. I
            will have 3 work terms in the duration of my degree, two 8 month
            placements and one 4 month placement. So far I have completed my
            first 8 month placement and it has been awesome! To view each co-op
            work term report, select the company from the dropdown hamburger
            menu in the top left of the nav bar! As a viewer you should be able
            to get a good understanding of each placement through my
            experiences, as well as identify my goals and how I accomplished
            them. This spot of my site is where I record my experiences and
            learnings from my university co-op placements. I will have 3 work
            terms in the duration of my degree, two 8 month placements and one 4
            month placement. So far I have completed my first 8 month placement
            and it has been awesome! To view each co-op work term report, select
            the company from the dropdown hamburger menu in the top left of the
            nav bar! As a viewer you should be able to get a good understanding
            of each placement through my experiences, as well as identify my
            goals and how I accomplished them.
            <br />
            <br />
          </span>

          <span id="Extras">
            <span style={{ fontFamily: "opensans-bold" }}>Extras: </span>
            This is the extras section This spot of my site is where I record my
            experiences and learnings from my university co-op placements. I
            will have 3 work terms in the duration of my degree, two 8 month
            placements and one 4 month placement. So far I have completed my
            first 8 month placement and it has been awesome! To view each co-op
            work term report, select the company from the dropdown hamburger
            menu in the top left of the nav bar! As a viewer you should be able
            to get a good understanding of each placement through my
            experiences, as well as identify my goals and how I accomplished
            them. This spot of my site is where I record my experiences and
            learnings from my university co-op placements. I will have 3 work
            terms in the duration of my degree, two 8 month placements and one 4
            month placement. So far I have completed my first 8 month placement
            and it has been awesome! To view each co-op work term report, select
            the company from the dropdown hamburger menu in the top left of the
            nav bar! As a viewer you should be able to get a good understanding
            of each placement through my experiences, as well as identify my
            goals and how I accomplished them.
            <br />
            <br />
          </span>

          <span id="Ack">
            <span style={{ fontFamily: "opensans-bold" }}>
              Acknowledgments:{" "}
            </span>
            This is the ack section
            <br />
            <br />
          </span>
        </StyledText>
      </StyledArticleWrapper>
    </StyledWrapper>
  );
};

export default CoinsquareTerm;
