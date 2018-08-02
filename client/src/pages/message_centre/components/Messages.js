import React, { Component } from 'react';

class Messages extends Component {

  makeMessageRow = (messages) => {
    let count = 0;
    const allRows = messages.map(message => {
      count += 1;
      return (
        <tr className='entryRow'>
          <td>{message.title}</td>
          <td>{message.date}</td>
          <td>Click to see details.</td>
        </tr>
      )
    })
    return allRows;
  }

  render() {
    return (
      <div>Hello</div>
    )
  }

}

export default Messages;
