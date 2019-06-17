import React, { Component } from 'react';
import {Consumer} from '../context';
import {
  Container
} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './RestaurantMenu.css';

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
              return (
                <Container>
                <div style={menuItemStyle}>
                  {(restaurant.path + '/:' + value.savedFoodType) === this.props.match.path ? 
                    restaurant[this.props.match.params.default].map((food) => (
                        <div 
                          style={{
                            width: '100%'
                          }}>
                          <img 
                            src={food.image} 
                            style={{width: '100%', height: '120px', borderRadius: '5px'}} 
                            alt="here is a pizza"/>
                          <Link to="#" className="btn btn-danger mt-1" style={{width: '100%'}}>ORDER</Link>
                          <Link to="#" className="foodTypeTitle">{food.type}</Link>
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
  gridTemplateColumns: '17% 17% 17% 17% 17%',
  gridGap: '1em',
  justifyContent: 'center'
}

export default RestaurantMenu;
