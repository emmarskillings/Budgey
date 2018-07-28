import React, { Component } from "react";
import "./App.css";
import Navbar from "./global_components/Navbar";
import HomePage from "./pages/home_page/HomePage";
import ExpensePage from "./pages/expense_page/ExpensePage";
import axios from "axios";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faCar,
  faUtensils,
  faTruck,
  faGamepad,
  faMoon
} from "@fortawesome/free-solid-svg-icons";

import Navbar from './components/Navbar';
import ExpenseBoard from './components/ExpenseBoard';
import Summary from './components/Summary';
import IncomeBoard from './components/IncomeBoard';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faCar, faUtensils, faTruck, faGamepad, faMoon } from "@fortawesome/free-solid-svg-icons";
import CategoryContainer from './components/CategoryContainer'

library.add(faHome, faCar, faUtensils, faTruck, faGamepad, faMoon);

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

        <HomePage />

        <Container className="body">
          <Row style={customRowStyling}>
            <Col md="3">
              <IncomeBoard />
            </Col>
            <Col md="6">
              <Summary />
              <CategoryContainer />
            </Col>
            <Col md="3">
              <ExpenseBoard />
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default App;
