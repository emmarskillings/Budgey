import React, { Component } from "react";
import axios from 'axios';


class NewIncomeEntry extends Component {

handleClick(){
  var name = this.refs.name.value;
  var amount = this.refs.amount.value;
  var description = this.refs.description.value;
  var date = this.refs.date.value;
  var category_id = this.props.state_category.id


  axios.post(
      '/api/v1/entry',
      { entry:
        {
          name: name,
          amount: amount,
          description: description,
          date: date,
          category_id: category_id
        }
      }
    )
    .then(response => {
     this.props.update()
     this.props.updateDB(amount)

    })
    .catch(error => console.log(error))


  

}

  render() {
    console.log(this.props.state_category)
    return (
      <div>

       <input ref='name' placeholder='Title' />
       <input ref='amount' placeholder='Amount' />
       <input ref='description' placeholder='Decription' />
       <input ref='date' placeholder='Date' />



        <button onClick={this.handleClick.bind(this)}>Submit</button>

     </div>
)
  }
}

export default NewIncomeEntry;