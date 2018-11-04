import React, { Component } from "react";
import styled from "styled-components";

import CoopHeader from "./CoopHeader";
import bgImage from "../assets/coop-background.jpg";

import CoopLanding from "./CoopLanding";
import CoinsquareTerm from "./CoinsquareTerm";

const StyledBackground = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 675px) {
    background-repeat: repeat;
  }
`;

const StyledBody = styled.div`
  margin: 0 10%;
  min-height: 100vh;
`;

const StyledContent = styled.div`
  border: solid 3px #f7f9fb;
  border-radius: 10px;
  background-color: #2b2b2b
  min-height: 85%;
`;

class WorkTermReports extends Component {
  state = {
    selectedTerm: "landing"
  };

  updateSelectedTerm = term => {
    this.setState({ selectedTerm: term });
  };

  renderTerm = () => {
    const { selectedTerm } = this.state;
    const termMapping = {
      landing: <CoopLanding />,
      coinsquare: <CoinsquareTerm />
    };

    return termMapping[selectedTerm];
  };

  render() {
    return (
      <StyledBackground>
        <StyledBody>
          <CoopHeader
            title="CO-OP Work Term Reports"
            updateSelectedTerm={this.updateSelectedTerm}
          />
          <StyledContent>{this.renderTerm()}</StyledContent>
        </StyledBody>
      </StyledBackground>
    );
  }
}

export default WorkTermReports;
