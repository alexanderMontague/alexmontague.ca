import React, { Component } from "react";
import { Route } from "react-router";
import styled from "styled-components";

import bgImage from "../assets/coop-background.jpg";
import CoopHeader from "./Co-op/CoopHeader";
import CoopLanding from "./Co-op/CoopLanding";
import CoinsquareTerm from "./Co-op/CoinsquareTerm";
import LeagueTerm from "./Co-op/LeagueTerm";

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
  background-color: #2b2b2b;
  min-height: 85%;
`;

class WorkTermReports extends Component {
  state = {
    selectedTerm: "landing"
  };

  render() {
    return (
      <StyledBackground>
        <StyledBody>
          <CoopHeader title="CO-OP Work Term Reports" />
          <StyledContent>
            <Route
              exact
              path={`${this.props.match.url}`}
              component={CoopLanding}
            />
            <Route
              exact
              path={`${this.props.match.url}/coinsquare`}
              component={CoinsquareTerm}
            />
            <Route
              exact
              path={`${this.props.match.url}/league`}
              component={LeagueTerm}
            />

            {/* ADD NEW WRITE UPS HERE */}
          </StyledContent>
        </StyledBody>
      </StyledBackground>
    );
  }
}

/**
 * Process for writing new reports:
 * - Copy CoinsquareTerm.js to a new term component
 * - Add new route in render function above with the correct route and component
 * - Go to CoopHeader.js and add company name and route to state to render drop down
 * - write your report
 */

export default WorkTermReports;
