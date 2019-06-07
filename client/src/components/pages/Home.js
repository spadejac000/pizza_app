import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Consumer} from '../../context';

class Home extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedRestaurant: ''
  //   }
  // }

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
              // onClick={() => {
              //   this.setState({
              //     selectedRestaurant: restaurant.title
              //   })
              // }}
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
