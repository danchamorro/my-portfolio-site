import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Components/Main";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="DAN CHAMORRO" scroll>
            <Navigation>
              <a href="/">Resume</a>
              <a href="/">About Me</a>
              <a href="/">Projects</a>
              <a href="/">Contact</a>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <a href="/">Resume</a>
              <a href="/">About Me</a>
              <a href="/">Projects</a>
              <a href="/">Contact</a>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
