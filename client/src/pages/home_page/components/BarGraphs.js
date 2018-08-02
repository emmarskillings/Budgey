import React, { Component } from "react";
import "./BarGraphs.css";
import { Progress } from "reactstrap";
import axios from 'axios';


class BarGraphs extends Component {
  render() {
    const card = this.props.card
    const percentage = (card.current_total / card.goal * 100)
    let barColor = 'success'
    if (percentage > 100){
      barColor = 'danger'
      axios.put(`/api/v1/category/${card.id}`, {
        flag: true
      }).then((res) => {
        console.log(res)
      })
    }

    return (
      <div className="fdfdd">
        <div>
          <Progress color={barColor} value={percentage}>
            $ {card.current_total}
          </Progress>
        </div>
      </div>
    );
  }
}

export default BarGraphs;
