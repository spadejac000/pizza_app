import React, { Component } from 'react';
import {Consumer} from '../context';

class RestaurantMenu extends Component {
  render() {
    // console.log(this.props.match.path)
    // if() {

    // }
    return (
      <Consumer>
        {value => {
          return(
            value.restaurants.map((restaurant) => (
              <h1 
                style={{height: '100px', width: '100px', border: '5px solid red', color: 'red'}}
              >  
                {restaurant.path === this.props.match.path ? restaurant.pizzas.map((pizza) => (
                  pizza.type
                )) : null}
              </h1>
            ))
          )
        }}
      </Consumer>
    )
  }
}

export default RestaurantMenu;
