import React from 'react';
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="navbar justify-content-between mb-4">
        <a className="navbar-brand">Budgey -- Welcome to your Budgeting App!</a>
        <form className="form-inline">
          <button className="btn btn-outline-success my-2 mr-3 my-sm-0" type="submit">Message Centre</button>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Logout</button>
        </form>
      </nav>
    )
  }
}

export default Navbar;