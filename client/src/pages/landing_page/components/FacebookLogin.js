import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';

class LoginWithFacebook extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  redirect = (event) => {
    var user = JSON.parse(localStorage.getItem('fbUser'));
    if (user) {
      var token = user.accessToken
      console.log(token)
    }
    if (token !== undefined) {
      localStorage.setItem('fbToken', token);
      this.setState({ redirect: true })
    }
  }


  responseFacebook = (res) => {
    localStorage.setItem('fbUser', JSON.stringify(res));
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
    return(
      <div className="social-button">
        <FacebookLogin
          appId="1058917207602672"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook}
          cssClass="my-facebook-button-class"
          onClick={this.redirect}
          icon="fa-facebook"
        />
      </div>
    );
  }
}

export default LoginWithFacebook;
