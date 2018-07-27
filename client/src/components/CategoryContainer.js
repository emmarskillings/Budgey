import React, { Component } from 'react'
import axios from 'axios'




class CategoryContainer extends Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    categories: [],
	  }
	}

	componentDidMount() {
	axios
	  .get("http://localhost:3001/api/v1/category.json")
	  .then(response => {
	    console.log(response);
	    this.setState({
	      categories: response.data
	    });
	  })
	  .catch(error => console.log(error));
	}
  render() {
  return (
    <div>
      {this.state.categories.map((idea) => {
        return(
          <div className="tile" key={idea.id} >
            <h4>{idea.name}</h4>
            <p>{idea.board_type}</p>
            <p>{idea.created_at}</p>
            <p>{idea.goal}</p>
            <p>{idea.current_total}</p>
          </div>
        )       
      })}
    </div>
  );
    }
}

export default CategoryContainer;
