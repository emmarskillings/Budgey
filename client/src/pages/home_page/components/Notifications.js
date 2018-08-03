import React, { Component } from 'react';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class Notification extends Component {
  //
  // createNotification = () => {
  //   return() => {
      // NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
  //   }
  // }
  //
  // categories = (props) => {
  //   var overBudget = [];
  //   for (var i = 0; i > props.categories.length; i++) {
  //     if (props.categories[i].current_total > props.categories[i].goal) {
  //       overBudget.push(props.categories[i])
  //     }
  //   }
  //   return overBudget;
  // }
  createNotification = (type) => {
    var overBudget = [];
    for (var i = 0; i < this.props.categories.length; i++) {
      if (this.props.categories[i].board_type === 'expense') {
        if (this.props.categories[i].current_total > this.props.categories[i].goal) {
          overBudget.push(this.props.categories[i])
        }
      }
    }
    return () => {
      switch(type) {
        case 'warning':
        console.log('warning')
        break;
        // for (var i = 0; i < overBudget.length; i++) {
        //   NotificationManager.warning(`Warning - you have gone over your budgeting goal for ${overBudget[i].name}`, 'Close after 3000ms', 3000);
        // }
      }
    }
  }

  render() {
    return (
      <div>
        <div onLoad={this.createNotification('warning')}></div>
        <NotificationContainer />
      </div>
    )
  }

}

export default Notification;
