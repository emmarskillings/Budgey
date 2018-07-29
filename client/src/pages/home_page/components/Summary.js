import React, { Component } from 'react'
import axios from 'axios';
import "./Summary.css";
import {Doughnut} from 'react-chartjs-2';



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


    const generate_color = () => {

      var letters = '0123456789ABCDEF';
      var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
      return color;

    }



  	var dataPoint = [];
    var labels = [];
    var colors = [];
  	var name = this.state.categories;

  	name.forEach(function(element){

  		var to_add = element.current_total
      var to_add2 = element.name
      var to_add3 = generate_color()

  		dataPoint.push(to_add);
      labels.push(to_add2);
      colors.push(to_add3);



  	});

  	var options = {
  	  legend: {
  	  	"display": true,
  	  	"position":"top"
  	  
  	  },
  	},


    data= {
            labels: labels,
            datasets: [{
            label: "My First dataset",
            backgroundColor: colors,
            data: dataPoint,
            }]
        }

  
  return(
  	<div>

  	<Doughnut data={data} options={options} width='600' height="250"/>
  	</div>
  	)

	}
}

export default CategoryContainer;
