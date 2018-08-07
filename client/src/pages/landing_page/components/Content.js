import React, { Component } from "react";
import "./Content.css";
import LoginWithGoogle from "./GoogleLogin";

class Content extends Component {
  render() {
    return (
      <div className="landing-content">
        <div className="description">
          <h4>Welcome to</h4>
          <h1>Budgey</h1>
          <h6>Your friendly budgeting buddy.</h6>
          <p>Are you a first time budgeter? <a href="/signup">Register now.</a></p>
          <p>Been here before? <a href="/login">Log in</a> to keep budgeting!</p>
          <LoginWithGoogle />
        </div>
      </div>
    );
  }
}

export default Content;
