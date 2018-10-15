import React, { Component } from "react";

import { Link } from "react-router-dom";

class WorkTermReports extends Component {
  render() {
    return (
      <div>
        Work term reports coming soon!
        <Link
          to={{
            pathname: "/",
            hash: "#reload"
          }}
        >
          Back to main Site
        </Link>
      </div>
    );
  }
}

export default WorkTermReports;
