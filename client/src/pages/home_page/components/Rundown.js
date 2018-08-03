import React, { Component } from "react";
import "./Rundown.css";
import NumberFormat from "react-number-format";

class Rundown extends Component {
  render() {
    let total_income = 0;
    let total_expenses = 0;

    this.props.categories.forEach(function(category) {
      if (category.board_type === "income") {
        total_income += category.current_total;
      } else {
        total_expenses += category.current_total;
      }
    });

    const amount_left = total_income - total_expenses;
    let color = "green";
    if (amount_left < 0) {
      color = "red";
    }

    return (
      <div className="rundown text-center mt-3">
        <h4>You've budgeted...</h4>
        <div className="rundown-income row justify-content-between">
          <div className="col-5">
            <h6>Income</h6>
          </div>
          <div className="col-5" id="total-income">
            <NumberFormat value=${total_income} displayType={'text'} thousandSeparator={true} prefix={'$'} />
          </div>
        </div>
        <div className="rundown-spending row justify-content-between">
          <div className="col-5">
            <h6>Spending</h6>
          </div>
          <div className="col-5" id="total-expenses">
            <NumberFormat value=${total_expenses} displayText={'text'} thousandSeparator={true} prefix={'-$'} />
          </div>
        </div>
        <hr />
        <div className="rundown-leftover row justify-content-between">
          <div className="col-5">
            <h6>Leftover</h6>
          </div>
          <div className="col-5">
            <p id="amount-left" style={{ color: color }}>${amount_left}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Rundown;
