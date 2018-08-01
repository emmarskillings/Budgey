import React, { Component } from "react";
import "./Rundown.css";

class Rundown extends Component {
  render() {
    console.log(this.props.categories, 'inside the Rundown page')

    var total_income = 0;
    var total_expenses = 0;


    this.props.categories.forEach(function(category){
      if (category.board_type === 'income'){
        total_income += category.current_total;

      }
      else {
        total_expenses += category.current_total;
      }

    })



    var amount_left = total_income - total_expenses;

    return <div>
        <div className="text-center">
          <p>Total Income: {total_income}</p>
          <p>Total Expenses: {total_expenses}</p>
          <p>Income Remaining:{amount_left}</p>
          
        </div>
      </div>;
  }
}

export default Rundown;
