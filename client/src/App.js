import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import "./App.css";
import Navbar from './components/Navbar';
import ExpenseBoard from './components/ExpenseBoard';
import Summary from './components/Summary';
import IncomeBoard from './components/IncomeBoard';
import axios from 'axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHome, faCar, faUtensils, faTruck, faGamepad, faMoon } from "@fortawesome/free-solid-svg-icons";

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
    var bgColor = {
      "White": "#f6f6f6"
    };
    var customRowStyling = {
      marginLeft: 0
    };

    return (
      <div style={{backgroundColor: bgColor.White, height: "100vh"}}>
        <Navbar />
        <Container className="body">
          <Row style={customRowStyling}>
            <Col md="3">
              <IncomeBoard />
            </Col>
            <Col md="6">
              <Summary />
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
