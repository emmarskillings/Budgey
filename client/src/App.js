import React, { Component } from 'react';
import { Container } from "reactstrap";
import Navbar from './components/Navbar';
import ExpenseBoard from './components/ExpenseBoard';
import Summary from './components/Summary';
import IncomeBoard from './components/IncomeBoard';
import axios from 'axios'; //import for every compenent that needs a call to database

class App extends Component {

  componentDidMount() {
  axios
    .get("http://localhost:3001/api/v1/resources.json")
    .then(response => {
      console.log(response);
      this.setState({
        resources: response.data
      });
    })
    .catch(error => console.log(error));
  }


  render() {
    return (
      <div>
        <Navbar />

        <Container>
          <ExpenseBoard />
          <Summary />
          <IncomeBoard />
        </Container>
      </div>
    );
  }
}

export default App;
