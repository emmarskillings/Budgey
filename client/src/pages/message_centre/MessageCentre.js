import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import Messages from './components/Messages'

class MessageCentre extends Component {

  render () {
    return (
      <Container className="signup-body">
        <Messages />
      </Container>
    )
  }
}

export default MessageCentre;
