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
            {/* <form
              method="POST"
              name="contact"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
            >
              <br />
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="mobile"
                  name="mobile"
                  placeholder="Mobile Number"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control"
                  type="textarea"
                  id="message"
                  placeholder="Message"
                  maxlength="140"
                  rows="7"
                  name="message"
                />
              </div>
              <button
                // type="submit"
                id="submit"
                name="submit"
                className="btn btn-dark"
              >
                Submit
              </button>
            </form> */}
            <form name="contact" method="post">
              <div className="form-group">
                <input type="hidden" name="form-name" value="contact" />
              </div>
              {/* Name */}
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
              {/* Email */}
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email"
                  required
                />
              </div>
              {/* Phone */}
              <div className="form-group">
                <input
                  type="text"
                  name="phone"
                  className="form-control"
                  placeholder="Mobile Number"
                  required
                />
              </div>
              {/* Subject */}
              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  className="form-control"
                  placeholder="Subject"
                  required
                />
              </div>
              {/* Message */}

              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  placeholder="Message"
                  maxLength="140"
                  rows="7"
                />
              </div>
              <button type="submit" className="btn btn-dark">
                Send
              </button>
            </form>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
