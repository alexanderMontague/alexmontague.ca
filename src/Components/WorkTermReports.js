import React, { Component } from "react";
import styled from "styled-components";

import CoopHeader from "./CoopHeader";
import bgImage from "../assets/coop-background.jpg";

import Landing from "./CoopLanding";
import CoinsquareTerm from "./CoinsquareTerm";
import CoopLanding from "./CoopLanding";

const StyledBackground = styled.div`
  background-image: url(${bgImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledBody = styled.div`
  margin: 0 10%;
  height: 100vh;
`;

const StyledContent = styled.div`
  border: solid 3px #f7f9fb;
  border-radius: 10px;
  background-color: #0677a1
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
