import React, { Component } from 'react';
import {Consumer} from '../../context';

class FoodCheckout extends Component {
  render() {
    return(
      <Consumer>
        {value => {
          let url = this.props.match.url
          let regularExp = /\w+$/
          let whichRestaurant = window.location.pathname.replace(/^\/([^\/]*).*$/, '$1')
          let specificFood = url.match(regularExp)[0];
          let foodCategoryRegex = /\w+(?=\/\w+$)/;
          let foodCategory = url.match(foodCategoryRegex)
          return(
            value.restaurants.map((restaurant) => {
              if(restaurant.path === "/" + whichRestaurant) {

                return(restaurant[foodCategory[0]].map((flavor) => {
                  if(flavor.type === specificFood) {
                    return(
                      <h1>{flavor.type}</h1>
                    )
                  }
                }))
              }
            })
          )
        }}
      </Consumer>
    )
  }
}

export default FoodCheckout;