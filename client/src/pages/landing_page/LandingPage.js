import React, { Component } from "react";
import { Container } from "reactstrap";
import Content from "./components/Content";
import LoginWithFacebook from "./components/FacebookLogin";
import LoginWithGoogle from "./components/GoogleLogin";

class LandingPage extends Component {
  render() {
    return (
      <Container className="landing-body">
        <Content />
        <LoginWithGoogle />
      </Container>
    );
  }
}

export default LandingPage;
