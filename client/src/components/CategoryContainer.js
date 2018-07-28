import React, { Component } from 'react'
import axios from 'axios';
import {Doughnut} from 'react-chartjs-2'





class CategoryContainer extends Component {



	constructor(props) {
	  super(props);
	  this.state = {
	    categories: [],
	  }
	}

	componentDidMount() {
	axios
	  .get("http://localhost:3002/api/v1/category.json")
	  .then(response => {
	    console.log(response);
	    this.setState({
	      categories: response.data
	    });
	  })
	  .catch(error => console.log(error));
	}
  render() {
  	var dataPoint = [];
  	var name = this.state.categories;
  	name.forEach(function(element){

  		var to_add = {value: element.current_total, label: element.name}
  		dataPoint.push(to_add)

  	});

  	var options = {
  	  legend: {
  	  	"display": true,
  	  	"position":"top"
  	  
  	  },
  	}


  
  console.log(dataPoint)
  return(
  	<div>
  	<p>dfsdfsd</p>
  	<Doughnut data={dataPoint} options={options} width='600' height="250"/>
  	</div>
  	)

	}
}

export default CategoryContainer;
