import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import personImage from "../img/pcman.jpg";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img src={personImage} alt="personal" className="personal-image" />
            <div className="banner-text">
              <h1>Software Engineer</h1>
              <hr />
              <p>
                HTML/CSS | Bootstrap | React | Python | NodeJS | Express |
                MongoDB | MySQL
              </p>
              <div className="social-links">
                {/* Linkedin */}
                <a
                  href="https://www.linkedin.com/in/dan-chamorro-071346176/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                {/* Githb */}
                <a
                  href="https://github.com/danchamorro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                {/* Twitter */}
                <a
                  href="https://twitter.com/danchamorro"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/daniel.chamorro.9085"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-facebook-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
