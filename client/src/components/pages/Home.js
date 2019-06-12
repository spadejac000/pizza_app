import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Consumer} from '../../context';

class Home extends Component {

  render() {
    return(
      <Consumer>
        {value => {
          const {restaurants} = value;
          console.log(value)
          return restaurants.map((restaurant) => (
            <Link 
              to={restaurant.path} 
              style={buttonStyle} 
              className="mb-2 btn btn-primary"
            >
              {restaurant.title}
            </Link>
          ))
        }}
      </Consumer>
    )
    
  }
}

const buttonStyle = {
  display: 'block',
  width: '25%',
  margin: '0 auto',
  textTransform: 'uppercase'
}

export default Home;
