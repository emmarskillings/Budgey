import React, { Component } from "react";
import './SignupForm.css'

class SignupForm extends Component {
  render () {
    return (
      <div class="container">
      <form>
        <header>
          <h1>Signup</h1>
        </header>
        <div class="form-group row">
          <label for="inputFirstName3" class="col-sm-2 col-form-label">first name</label>
          <div class="col-sm-10">
            <input type="test" class="form-control" id="inputFirstName3" placeholder="First Name" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputLastName3" class="col-sm-2 col-form-label">Last Name</label>
          <div class="col-sm-10">
            <input type="test" class="form-control" id="inputLastName3" placeholder="Last Name" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" placeholder="Email" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPassword3" placeholder="Password" />
          </div>
        </div>
        <div class="form-group row">
          <label for="inputPasswordConfirmation3" class="col-sm-2 col-form-label">Confirmation</label>
          <div class="col-sm-10">
            <input type="password" class="form-control" id="inputPasswordConfirmation3" placeholder="Password Confirmation" />
          </div>
        </div>
      </form>
      </div>

    )
  }
}

export default SignupForm;
