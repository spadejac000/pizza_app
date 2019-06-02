import React, { Component } from 'react';
import uuid from 'uuid';
import {Link} from 'react-router-dom';

class Home extends Component {

  

  render() {
    // console.log(this.props.restaurants)
    return(
      <h1>Home</h1>
    )
    // return this.props.restaurants.map((restaurant) => (
    //   <Link to={restaurant.path} style={buttonStyle} className="mb-2 btn btn-primary">{restaurant.title}</Link>
    // ))
  }
}

const buttonStyle = {
  display: 'block',
  width: '25%',
  margin: '0 auto',
  textTransform: 'uppercase'
}

export default Home;
