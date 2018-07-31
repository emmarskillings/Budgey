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

  //Function to update state for messages
  updateCategory = (newCategory) => {

    this.setState({ categories: [
      ...this.state.categories,
      { 
        id: newCategory.id,
        name: newCategory.name,
        user_id: newCategory.user_id,
        board_type: newCategory.board_type,
        goal: newCategory.goal,
        current_total: newCategory.current_total,
        updated_at: newCategory.updated_at


      } ]
    })
  }



  
	componentDidMount() {
	axios
	  .get("http://localhost:3002/api/v1/category.json")
	  .then(response => {
	    this.setState({
	      categories: response.data
	    });
      console.log(this.state)
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
    var dataPoint2 = [];
    var labels2 = [];
    var colors2 = [];  
  	var name = this.state.categories;

  	name.forEach(function(element){
      if (element.board_type === 'expense'){

  		var to_add = element.current_total
      var to_add2 = element.name
      var to_add3 = generate_color()

  		dataPoint.push(to_add);
      labels.push(to_add2);
      colors.push(to_add3);
      }

      else {
      var to_add = element.current_total
      var to_add2 = element.name
      var to_add3 = generate_color()

      dataPoint2.push(to_add);
      labels2.push(to_add2);
      colors2.push(to_add3);

      }


  	});

  	var options = {
      responsive: true,
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

        var options2 = {
          responsive: true,
          legend: {
            "display": true,
            "position":"top"
          
          },
        },


        data2= {
                labels: labels2,
                datasets: [{
                label: "My First dataset",
                backgroundColor: colors2,
                data: dataPoint2,
                }]
            }

  
  return(
  	<div>
    <h2 align='center'>Expenses</h2>

  	<Doughnut data={data} options={options} width = {600} height = {250}/>

    <br></br>


    <h2 align='center'>Income</h2>

    <Doughnut data={data2} options={options2} width = {600} height = {250}/>


  	</div>
  	)

	}
}

export default CategoryContainer;
