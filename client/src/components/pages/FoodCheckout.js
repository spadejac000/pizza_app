import React, { Component } from 'react';
import {Consumer} from '../../context';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {
  Button,
  Container
} from 'react-bootstrap';

class FoodCheckout extends Component {
  state = {
    image: '',
    pizzaName: '',
    quantity: 0,
    price: 0
  }

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
                    const addToCart = async () => {
                      // await this.setState({
                      //   image: flavor.image,
                      //   pizzaName: flavor.type,
                      //   quantity: 1,
                      //   price: flavor.price
                      // })
                      // console.log(this.state)

                      await this.setState({
                        image: flavor.image,
                        pizzaName: flavor.type,
                        quantity: 1,
                        price: flavor.price
                      });

                      axios.post('http://localhost:5000/api/pizzas', this.state);
                    }
                    return(
                      <Container>
                        <img src={flavor.image}/>
                        <h1>{flavor.type}</h1>

                        <Button 
                          className="btn btn-warning"
                          onClick={addToCart}
                        >
                          <i className="fas fa-cart-plus"></i> Add to Cart
                        </Button>
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