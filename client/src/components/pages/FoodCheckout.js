import React, { Component } from 'react';
import {Consumer} from '../../context';
import {Link} from 'react-router-dom';
import {
  Container
} from 'react-bootstrap';

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
                      <Container>
                        <img src={flavor.image}/>
                        <h1>{flavor.type}</h1>
                        <Link to="#" className="btn btn-warning"><i className="fas fa-cart-plus"></i> Add to Cart</Link>
                      </Container>
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