import React, { Component } from "react";
import "./Rundown.css";

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
      <div className="rundown text-center">
        <br />
        <h5>Income: $ {total_income}</h5>
        <h5>Expenses: $ {total_expenses}</h5>
        <h6>-----------------------</h6>
        <h5 style={{ color: color }}>Net Total: $ {amount_left}</h5>
      </div>
    );
  }
}

export default Rundown;
