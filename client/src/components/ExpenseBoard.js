import React from "react";
import "./ExpenseBoard.css";
class ExpenseBoard extends React.Component {
  render() {
    return (
      <div className="expense-board row justify-content-center text-center border border-dark py-4">
        <h4>Expense Boards</h4>
        <div class="card my-2">
          <div class="card-body">
            <h5 class="card-title">Housing</h5>
            <h6 class="card-subtitle mb-2 text-muted">$875</h6>
          </div>
        </div>
        <div class="card my-2">
          <div class="card-body">
            <h5 class="card-title">Travel</h5>
            <h6 class="card-subtitle mb-2 text-muted">$322</h6>
          </div>
        </div>
        <div class="card my-2">
          <div class="card-body">
            <h5 class="card-title">Transportation</h5>
            <h6 class="card-subtitle mb-2 text-muted">$167</h6>
          </div>
        </div>
        <div class="card my-2">
          <div class="card-body">
            <h5 class="card-title">Food &amp; Dining</h5>
            <h6 class="card-subtitle mb-2 text-muted">$189</h6>
          </div>
        </div>
        <div class="card my-2">
          <div class="card-body">
            <h5 class="card-title">Health &amp; Fitness</h5>
            <h6 class="card-subtitle mb-2 text-muted">$58</h6>
          </div>
        </div>
        <div class="card my-2">
          <div class="card-body">
            <h5 class="card-title">Shopping</h5>
            <h6 class="card-subtitle mb-2 text-muted">$124</h6>
          </div>
        </div>
      </div>
    )
  }
}

export default ExpenseBoard;
