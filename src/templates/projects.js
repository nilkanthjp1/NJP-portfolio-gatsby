import React from "react";
import Link from "gatsby-link";

import "./projects.scss";

class CaseStudy extends React.Component {
  render() {
    return (
      <section className="home" >
        <div className="welcome">
          <h1>Projects.</h1>
          <div className="interests">
            <h2>I like </h2>
            <div className="interests-gradient bottom" />
            <div className="interests-gradient top" />
          </div>
        </div>
      </section>
    );
  }
}

export default CaseStudy;
