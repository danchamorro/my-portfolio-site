import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";
import personImage from "../img/pcman.jpg";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Dan Chamorro</h2>
            <img src={personImage} alt="personal" style={{ height: "250px" }} />
            <p style={{ height: "250px", margin: "auto", paddingTop: "1em" }}>
              Experienced Business Owner with a demonstrated history of working
              in the information technology and services industry. Skilled in
              Reporting & Analysis, Python (Programming Language), Databases,
              React, and JavaScript. Strong entrepreneurship professional
              graduated from Lambda School.
            </p>
          </Cell>
          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    716-704-6634
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    dan@danchamorro.com
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
