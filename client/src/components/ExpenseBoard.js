import React from "react";
import "./ExpenseBoard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ExpenseBoard extends React.Component {
  render() {
    return <div className="expense-board row justify-content-center text-center border border-dark col-md-12 py-4">
        <h4>Expense Boards</h4>
        <div className="row">
          <div className="col-md-6">
            <div class="card my-2 mx-1">
              <div class="card-body">
                <FontAwesomeIcon icon="home" className="icons pb-2" />
                <h5 class="card-title">Housing</h5>
                <h6 class="card-subtitle mb-2 text-muted">$875</h6>
              </div>
            </div>
            <div class="card my-2 mx-1">
              <div class="card-body">
                <FontAwesomeIcon icon="car" className="icons pb-2" />
                <h5 class="card-title">Transport</h5>
                <h6 class="card-subtitle mb-2 text-muted">$167</h6>
              </div>
            </div>
            <div class="card my-2 mx-1">
              <div class="card-body">
                <FontAwesomeIcon icon="utensils" className="icons pb-2" />
                <h5 class="card-title">Food &amp; Dining</h5>
                <h6 class="card-subtitle mb-2 text-muted">$189</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div class="card my-2 mx-1">
              <div class="card-body">
                <FontAwesomeIcon icon="gamepad" className="icons pb-2" />
                <h5 class="card-title">Lifestyle</h5>
                <h6 class="card-subtitle mb-2 text-muted">$97</h6>
              </div>
            </div>
            <div class="card my-2 mx-1">
              <div class="card-body">
                <FontAwesomeIcon icon="truck" className="icons pb-2" />
                <h5 class="card-title">Shopping</h5>
                <h6 class="card-subtitle mb-2 text-muted">$124</h6>
              </div>
            </div>
            <div class="card my-2 mx-1">
              <div class="card-body">
                <FontAwesomeIcon icon="moon" className="icons pb-2" />
                <h5 class="card-title">Other</h5>
                <h6 class="card-subtitle mb-2 text-muted">$322</h6>
              </div>
            </div>
          </div>
        </div>
      </div>;
  }
}

export default ExpenseBoard;
