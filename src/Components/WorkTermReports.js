import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import CoopHeader from "./CoopHeader";
import bgImage from "../assets/coop-background.jpg";

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
  height: 85%;
`;

class WorkTermReports extends Component {
  render() {
    return (
      <StyledBackground>
        <StyledBody>
          <CoopHeader title="CO-OP Work Term Reports!" />
          <StyledContent>
            Work term reports coming soon!
            <Link
              to={{
                pathname: "/",
                hash: "#reload"
              }}
            >
              Back to main Site
            </Link>
          </StyledContent>
        </StyledBody>
      </StyledBackground>
    );
  }
}

export default WorkTermReports;
