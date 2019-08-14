import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { SlideDown } from "react-slidedown";

import hamburgerMenu from "../../assets/hamburgerMenu.png";
import "react-slidedown/lib/slidedown.css";

const StyledNavWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 7%;
  background: #f7f9fb;
  border-radius: 10px;
  font-family: "opensans-bold", sans-serif;
  font-size: 25px;
  color: black;

  @media (max-width: 835px) {
    font-size: 15px;
  }
`;

const StyledToggleButton = styled.img`
  height: 35px;
  width: 30px;
  cursor: pointer;
  transition: transform 300ms ease-in-out;
  transform: ${props => props.open && css`rotate(90deg)`};
  z-index: 100;
`;

const StyledSlideDown = styled(SlideDown)`
  background-color: #f7f9fb;
  border-radius: 0 0 10px 10px;
  z-index: 100;
  box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.2);
`;

const StyledSliderContainer = styled.div`
  height: 35px;
  width: 150px;
  z-index: 100;
`;

const StyledBackButton = styled(Link)`
  padding: 10px;
  background: #00a5ff;
  display: inline-block;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: 300ms;
  margin: 10px;
  z-index: 1;

  &:hover {
    background-color: #313131;
  }

  @media (max-width: 835px) {
    padding: 0 0 0 10px;
  }
`;

const StyledText = styled.h5`
  color: ${props => props.color || "#f7f9fb"};
  font-size: ${props => props.fontSize || "20px"};
  line-height: 20px;
  z-index: 100;

  @media (max-width: 835px) {
    font-size: 15px;
  }
`;

const StyledItem = styled(Link)`
  display: flex;
  justify-content: center;
  padding: 10px 0;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #00a5ff;
  }
`;

class CoopHeader extends Component {
  state = {
    menuOpen: false,
    baseURL: "/co-op/",
    coopTerms: [
      { company: "Coinsquare", route: "coinsquare" },
      { company: "League", route: "league" },
      { company: "Work Term 3", route: "" }
    ]
  };

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen
    });
  };

  updateTermHandler = term => {
    const { updateSelectedTerm } = this.props;
    updateSelectedTerm(term);
    this.toggleMenu();
  };

  renderLinks = () => {
    const { baseURL, coopTerms } = this.state;
    return (
      <ul style={{ margin: 0, marginTop: "-5px" }}>
        {coopTerms.map(term => (
          <StyledItem
            to={`${baseURL}${term.route}`}
            onClick={this.toggleMenu}
            key={term.company}
          >
            <StyledText color="black">{term.company}</StyledText>
          </StyledItem>
        ))}
      </ul>
    );
  };

  render() {
    const { title } = this.props;
    const { menuOpen } = this.state;
    return (
      <StyledNavWrapper>
        <StyledSliderContainer>
          <StyledToggleButton
            onClick={this.toggleMenu}
            src={hamburgerMenu}
            open={this.state.menuOpen}
          />
          <StyledSlideDown>{menuOpen && this.renderLinks()}</StyledSlideDown>
        </StyledSliderContainer>
        <StyledText color={"#313131"}>{title}</StyledText>
        <StyledBackButton
          to={{
            pathname: "/",
            hash: "#reload"
          }}
        >
          <StyledText>Back to Main Site</StyledText>
        </StyledBackButton>
      </StyledNavWrapper>
    );
  }
}

export default CoopHeader;
