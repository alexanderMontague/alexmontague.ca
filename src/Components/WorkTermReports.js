import React, { Component } from "react";
import { Route } from "react-router";
import styled from "styled-components";

import CoopHeader from "./Co-op/CoopHeader";
import CoopLanding from "./Co-op/CoopLanding";
import CoinsquareTerm from "./Co-op/CoinsquareTerm";
import LeagueTerm from "./Co-op/LeagueTerm";
import TaplyticsTerm from "./Co-op/TaplyticsTerm";
import ShopifyTerm from "./Co-op/ShopifyTerm";

const StyledBackground = styled.div`
  background: linear-gradient(27deg, #151515 5px, transparent 5px) 0 5px,
    linear-gradient(207deg, #151515 5px, transparent 5px) 10px 0px,
    linear-gradient(27deg, #222 5px, transparent 5px) 0px 10px,
    linear-gradient(207deg, #222 5px, transparent 5px) 10px 5px,
    linear-gradient(90deg, #1b1b1b 10px, transparent 10px),
    linear-gradient(
      #1d1d1d 25%,
      #1a1a1a 25%,
      #1a1a1a 50%,
      transparent 50%,
      transparent 75%,
      #242424 75%,
      #242424
    );
  background-color: #131313;
  background-size: 20px 20px;
`;

const StyledBody = styled.div`
  margin: 0 10%;
  min-height: 100vh;

  @media (max-width: 675px) {
    margin: 0;
  }
`;

const StyledContent = styled.div`
  border: solid 3px #f7f9fb;
  border-radius: 10px;
  background-color: #2b2b2b;
  min-height: 85%;
`;

class WorkTermReports extends Component {
  state = {
    selectedTerm: "landing",
  };

  render() {
    return (
      <StyledBackground bgColour={this.state.selectedTerm}>
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

            <Route
              exact
              path={`${this.props.match.url}/taplytics`}
              component={TaplyticsTerm}
            />

            <Route
              exact
              path={`${this.props.match.url}/shopify`}
              component={ShopifyTerm}
            />
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
