import React, { Component } from 'react';
import {Consumer} from '../context';
import {
  Container
} from 'react-bootstrap';

class RestaurantMenu extends Component {
  state = {
    urlPath: this.props.location.pathname
  }

  render() {
    return (
      <Consumer>
        {value => {
          return(
            value.restaurants.map((restaurant) => {
              for(let i = 0; i < Object.keys(restaurant).length; i++) {
                if(this.props.match.params.default === Object.keys(restaurant)[i]) {
                  console.log(Object.keys(restaurant)[i])
                }
              }
              return (
                <Container>
                <div style={menuItemStyle}>
                  {(restaurant.path + '/:' + value.savedFoodType) === this.props.match.path ? 
                    restaurant.pizzas.map((pizza) => (
                        <div style={{textAlign: 'center'}}>
                          <img src={pizza.image} style={{width: '200px', height: '200px'}} alt="here is a pizza"/>
                          <h1>{pizza.type}</h1>
                          <h1>{pizza.price}</h1>
                        </div>
                    )) 
                  
                  : null
                  }
                </div>
                </Container>
              )
            })
          )
        }}
      </Consumer>
    )
  }
}

const menuItemStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  justifyContent: 'center'
}

export default RestaurantMenu;
