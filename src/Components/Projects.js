import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardActions,
  Button,
  CardMenu,
  IconButton,
  CardText
} from "react-mdl";

class Projects extends Component {
  state = {
    activeTab: 0
  };

  toggleCategories = () => {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
              }}
            >
              Auto-Invoicer
            </CardTitle>
            <CardText>
              Auto-Invoicer is a MERN stack application. Due to the potential
              for high usage at key times of the year (e.g. the end of each
              quarter, the end of the fiscal year), MERN stack will offer the
              greatest uptime and concurrency handling.
            </CardText>
            <CardActions border>
              <Button
                colored
                href="https://github.com/Lambda-School-Labs/Labs8-AutoInvoicer/"
                target="_blank"
              >
                GitHub
              </Button>
              <Button colored href="https://auto-invoicer.com/" target="_blank">
                Live Demo
              </Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
              }}
            >
              React Project #2
            </CardTitle>
            <CardText>
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Cras ultricies ligula sed magna dictum porta. Sed porttitor
              lectus nibh. Vivamus magna justo, lacinia eget consectetur sed,
              convallis at tellus.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
              }}
            >
              React Project #3
            </CardTitle>
            <CardText>
              Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
              dui. Cras ultricies ligula sed magna dictum porta. Sed porttitor
              lectus nibh. Vivamus magna justo, lacinia eget consectetur sed,
              convallis at tellus.
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div>
          <h1>This is Python</h1>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div>
          <h1>This is MySQL</h1>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div>
          <h1>This is MongoDB</h1>
        </div>
      );
    }
  };

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Python</Tab>
          <Tab>MySQL</Tab>
          <Tab>MongoDB</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
