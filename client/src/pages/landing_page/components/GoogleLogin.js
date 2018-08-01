import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import GoogleButton from 'react-google-button'
import { Redirect } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Content.css'

class LoginWithGoogle extends Component {

  constructor(props) {
    super(props)
    this.state = {
      redirect: false
    }
  }

  responseGoogle = (res) => {
    var token = res.accessToken
    localStorage.setItem('googleToken', token);
    this.setState({ redirect: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to='/home' />
    }
    return (
      <div className='social-button'>
      <GoogleLogin
        clientId={'858595878709-ue1v5u0ts5ffi0iq58pc538m5v4r8r3g.apps.googleusercontent.com'}
        onSuccess={this.responseGoogle}
        onFailure={this.responseGoogle}
        className='google-login'
      >
        <FontAwesomeIcon
          icon={['fab', 'google']}
        />
        <span> Login with Google</span>
      </GoogleLogin>
      </div>
    )
  }
}

export default LoginWithGoogle;
