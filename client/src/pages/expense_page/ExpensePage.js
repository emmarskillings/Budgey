import React, { Component } from "react";
import { Container } from "reactstrap";
import SpendingSummary from "./components/SpendingSummary";
import ExpenseTable from "./components/ExpenseTable";
import axios from "axios";
import { Redirect } from 'react-router-dom';

class ExpensePage extends Component {

  componentDidMount() {
    const { id } = this.props.match.params
    axios.get(`/api/v1/category/${id}.json`)
         .then(response => {
           this.setState({
             category: response.data[0],
             entries: response.data[1]
           });
          })
         .catch(error => console.log(error))

  }


  render() {

    if (!localStorage.getItem('jwtToken')) {
      return <Redirect to='/login' />
    }
    return (
      <Container>
        { this.state && this.state.entries &&
          <div>
            <SpendingSummary entries={this.state.entries}/>
            <ExpenseTable entries={this.state.entries} id={this.props.match.params} />
          </div>
        }
      </Container>
    );
  }
}

export default ExpensePage;
