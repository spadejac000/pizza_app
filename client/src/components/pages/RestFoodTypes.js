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
          // where console log starts
          value.restaurants.map((restaurant) => (
            restaurant.path === this.props.match.path 
            ? Object.keys(restaurant).slice(3).map((foodTypes) => {
              for(let i = 0; i < Object.keys(value.foodImagesMain).length; i++) {
                if(Object.keys(value.foodImagesMain)[i] === foodTypes) {
                  console.log(foodTypes)
                }
              }
              })
            : null
          ))
          // where console log ends
          return(
            value.restaurants.map((restaurant) => (
              <Container>
                {
                  restaurant.path === this.props.match.path ?
                  Object.keys(restaurant).slice(3).map((foodTypes) => (
                    <h1>{foodTypes}</h1>
                  // <Link className="foodTypeLinks mb-2">
                  //   <img src={foodTypes.image} />
                  //   {foodTypes}
                  // </Link>
                  ))
                : 
                  null
                }
              </Container>
            ))
          )
        }}
      </Consumer>
    )
  }
}

export default RestFoodTypes;
