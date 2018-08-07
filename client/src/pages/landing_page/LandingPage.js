import React, { Component } from "react";
import { Container } from "reactstrap";
import Content from "./components/Content";
import LoginWithFacebook from "./components/FacebookLogin";
import "./LandingPage.css";

class LandingPage extends Component {
  render() {
    return (
      <Container className="landing-body">
        <Content />
      </Container>
    );
  }
}

export default LandingPage;
