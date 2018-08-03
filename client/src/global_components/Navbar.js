import React, { Component } from "react";
import { Redirect, NavLink } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  logout = event => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("fbToken");
    localStorage.removeItem("googleToken");
  };

  render() {
    var user = localStorage.getItem("jwtToken");
    var fbUser = localStorage.getItem("fbToken");
    var googleUser = localStorage.getItem("googleToken");
    var loginLogout;
    var messageCentre;
    var navbarBrand;
    var signup;
    if (user || fbUser || googleUser) {
      loginLogout = (
        <NavLink to="/">
          <div className="navbar-right-div logout" onClick={this.logout}>
            Logout
          </div>
        </NavLink>
      );
      messageCentre = (
        <NavLink to="/home">
          <div className="navbar-right-div">Message Centre</div>
        </NavLink>
      );
      navbarBrand = (
        <NavLink to="/home">
          <div className="navbar-brand">Budgey</div>
        </NavLink>
      );
    } else {
      loginLogout = (
        <NavLink to="/login">
          <div className="navbar-right-div login">Login</div>
        </NavLink>
      );
      signup = (
        <NavLink to="/signup">
          <div className="navbar-right-div login">Signup</div>
        </NavLink>
      );
      navbarBrand = (
        <NavLink to="/">
          <div className="navbar-brand">Budgey</div>
        </NavLink>
      );
    }
    return (
      <nav className="navbar justify-content-between mb-3">
        {navbarBrand}
        <div className="navbar justify-content-between">
          {messageCentre}
          {signup}
          {loginLogout}
        </div>
      </nav>
    );
  }
}

export default Navbar;
