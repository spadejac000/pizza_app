import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import RestaurantLocation from './RestaurantLocation';
import {Consumer} from '../context';

class Routes extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value.restaurants)
          return(
            <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/menu" component={Menu} />
                <Route exact path={value.restaurants.map((restaurant) => (
                  restaurant.path
                ))} component={RestaurantLocation} />
              </Switch>
            </Router>
          )
        }}
        
      </Consumer>
    )
  }
}

export default Routes;
