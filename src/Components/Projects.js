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
        <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
          <CardTitle
            style={{
              color: "#fff",
              height: "176px",
              background:
                "url(https://cdn-images-1.medium.com/max/1200/1*y6C4nSvy2Woe0m7bWEn4BA.png) center / cover"
            }}
          >
            React Project #1
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

        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
