import React, { Component } from "react";
import "./NewIncomeModal.css";
import axios from 'axios';


class NewIncomeModal extends Component {

handleClick(){
  var name = this.refs.name.value;
  var current_total = this.refs.current_total.value;
  var goal_total = this.refs.goal_total.value;

  axios.post(
      'http://localhost:3002/api/v1/category',
      { category:
        {
          name: name,
          user_id: 1,
          board_type: 'income',
          goal: goal_total,
          current_total: current_total
        }
      }
    )
    .then(response => {
      
    })
    .catch(error => console.log(error))
  

}

  render() {
    return (
      <div>

       <input ref='name' placeholder='Title' />
       <input ref='current_total' placeholder='Current Total' />
       <input ref='goal_total' placeholder='Goal Total' />


        <button onClick={this.handleClick.bind(this)}>Submit</button>

     </div>
)
  }
}

export default NewIncomeModal;