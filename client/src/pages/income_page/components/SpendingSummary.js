import React, { Component } from "react";
import "./SpendingSummary.css";
import {Doughnut} from 'react-chartjs-2';


class SpendingSummary extends Component {

  render() {
  	console.log(this.props.entries, 'inside spendingsummary')


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
      
      var name = this.props.entries;

      name.forEach(function(element){
        

        var to_add = element.amount
        var to_add2 = element.name
        var to_add3 = generate_color()

        dataPoint.push(to_add);
        labels.push(to_add2);
        colors.push(to_add3);
        


      });

      var options = {
        responsive: true,
        maintainAspectRatio: false,
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

          var options = {
            responsive: true,
            legend: {
              "display": true,
              "position":"top"
            
            },
          }



    return (
      <div className="spending-summary mx-auto border border-dark col-md-12">
        <div className="text-center">

        <Doughnut data={data} options={options} width = {600} height = {250}/>


        </div>
      </div>
    );
  }
}

export default SpendingSummary;