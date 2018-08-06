import React, { Component } from "react";
import "./Summary.css";
import { Doughnut } from "react-chartjs-2";

class CategoryContainer extends Component {

  render() {

    const dataPoint = [];
    const labels = [];

    this.props.categories.forEach(function(category) {
      if (category.board_type === "expense") {
        dataPoint.push(category.current_total);
        labels.push(category.name);
      }
    });

    if (dataPoint.length === 0){
      var reverse_labels = ['Food', 'School', 'Hobbies', 'Transportation'];
      var reverse_dataPoints = [25, 25, 25, 25];
      var example_graph_message = 'Example Chart - Add Stuff'

    } else {
      var reverse_dataPoints = dataPoint.reverse();
      var reverse_labels = labels.reverse();
      var example_graph_message = ''
    }

    const options = {
      responsive: true,
      legend: {
        display: true,
        position: "right"
      },
      layout: {
        padding: {
          left: 0,
          right: 300,
          top: 0,
          bottom: 0
        }
      }
    };

    const data = {
      labels: reverse_labels,
      datasets: [
        {
          backgroundColor: ['#740001','#ae0001',' #eeba30','#d3a625','#000000','#f72f53','#000080','#008000','#fef65b','#9EB6B8', '#767BA5', '#2C3571', '#008080', '#FF6347'],
          data: reverse_dataPoints
        }
      ]
    };


    return (
      <div className="summary text-center">

        <h4 className="py-3">Expenses</h4>
        <h5>{example_graph_message}</h5>
        <div className="pt-2" id="pie-chart">
          <Doughnut data={data} options={options} height={85} />
        </div>
      </div>
    );

  }
}

export default CategoryContainer;
