import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import RestaurantMenu from './RestaurantMenu';
import RestFoodTypes from './pages/RestFoodTypes';
import FoodCheckout from './pages/FoodCheckout';
import Cart from './pages/Cart';
import {Consumer} from '../context';

class Routes extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          return(
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path={value.restaurants.map((restaurant) => (
                  restaurant.path
                ))} component={RestFoodTypes} />
                <Route exact path={value.restaurants.map((restaurant) => (
                  // this.props.location.pathname
                  restaurant.path + '/:' + value.savedFoodType
                ))} component={RestaurantMenu}/>
                <Route exact path="/Dominos/pizzas/ExtravaganZZa" component={FoodCheckout} />
                <Route exact path="/cart" component={Cart} />
              </Switch>
            </Router>
          )
        }}
        
      </Consumer>
    )
  }
}

export default Routes;
