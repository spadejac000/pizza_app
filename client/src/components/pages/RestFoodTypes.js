import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Consumer} from '../../context';
import './RestFoodTypes.css'
import {
  Container
} from 'react-bootstrap';

class RestFoodTypes extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return(
            value.restaurants.map((restaurant) => (
              <Container>
                {
                  restaurant.path === this.props.match.path ?
                // restaurant.map((foodTypes) => (
                //   <h1>{foodTypes}</h1>
                // )) 
                // console.log(restaurant)
                // <h1>{restaurant}</h1>
                // console.log(Object.keys(restaurant))
                  
                  // for(let i = 0; i < Object.keys(restaurant).length; i++) {
                  //   console.log(Object.keys(restaurant))
                  // }
                  Object.keys(restaurant).slice(3).map((foodTypes) => (
                    <Link className="foodTypeLinks mb-2" style={foodTypeStyles}>{foodTypes}</Link>
                  ))
                : null}
              </Container>
            ))
          )
        }}
      </Consumer>
    )
  }
}

const foodTypeStyles = {
  display: 'block',
  border: '1px dotted grey',
  textDecoration: 'none',
  textTransform: 'uppercase',
  fontWeight: 'bold'
}

export default RestFoodTypes;
