import React, { Component } from 'react';
import {Consumer} from '../context';

class RestaurantMenu extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          // for(let i = 0; i < value.restaurants.length; i++) {
          //   if(value.restaurants[i].path === this.props.match.path) {
          //     let pizzaTypes = [];
          //     for(let j = 0; j < value.restaurants[i].pizzas.length; j++) {
          //       // console.log(value.restaurants[i].pizzas[j].type)
          //       pizzaTypes.push(value.restaurants[i].pizzas[j].type)
          //       console.log(pizzaTypes);
          //       return(() => {
          //         for(let x = 0; x < pizzaTypes.length; x++) {
          //           let pizzaTypeTitle = document.createElement('h1');
          //           pizzaTypeTitle.textContent = pizzaTypes[x];
          //           document.appendChild(pizzaTypeTitle);
          //         }
          //       }) 
          //     }
          //   }
          // }

          return(
            value.restaurants.map((restaurant) => (
              <div>
                {restaurant.path === this.props.match.path ? restaurant.pizzas.map((pizza) => (
                  <div>
                    <h1>{pizza.type}</h1>
                    <h1>{pizza.price}</h1>
                    <img src={pizza.image} />
                  </div>
                )) : null}
              </div>
            ))
          )
        }}
      </Consumer>
    )
  }
}

export default RestaurantMenu;
