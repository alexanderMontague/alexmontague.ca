import React, { Component } from "react";
import styled, { css } from "styled-components";

import hamburgerMenu from "../assets/hamburgerMenu.png";
import { SlideDown } from "react-slidedown";
import "react-slidedown/lib/slidedown.css";

const StyledNavWrapper = styled.div`
  display: flex;
  align-items: center;
  height: 7%;
  background: #f7f9fb;
  border-radius: 10px;
  font-family: "opensans-bold", sans-serif;
  font-size: 25px;
  color: black;
`;

const StyledToggleButton = styled.img.attrs({
  onClick: props => props.clickHandler
})`
  height: 35px;
  width: 30px;
  transition: transform 300ms ease-in-out;
  transform: ${props => props.rotate && css`rotate(90deg)`};
`;

const StyledSlideDown = styled(SlideDown)`
  display: flex;
  flex-direction: column;
`;

class CoopHeader extends Component {
  state = {
    menuOpen: false,
    rotate: false
  };

  toggleMenu = () => {
    this.setState({
      menuOpen: !this.state.menuOpen,
      rotate: !this.state.rotate
    });
  };

  render() {
    const { title } = this.props;
    const { menuOpen } = this.state;
    return (
      <StyledNavWrapper>
        <StyledToggleButton
          clickHandler={this.toggleMenu}
          src={hamburgerMenu}
          rotate={this.state.rotate}
        />
        <StyledSlideDown>
          {menuOpen && [<a>HELLO</a>, <a>WORLD</a>, <a>HOW R U</a>]}
        </StyledSlideDown>
        <span>{title}</span>
      </StyledNavWrapper>
    );
  }
}

export default CoopHeader;
