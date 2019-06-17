import React, { Component } from 'react';
import {Consumer} from '../context';
import {
  Container
} from 'react-bootstrap';
import {Link} from 'react-router-dom';

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
                    restaurant[this.props.match.params.default].map((pizza) => (
                        <div style={{textAlign: 'center'}}>
                          <img 
                            src={pizza.image} 
                            style={{position: 'relative', width: '100%', height: '150px', borderRadius: '5px'}} 
                            alt="here is a pizza"/>
                          <Link to="#" className="btn btn-danger mt-1" style={{width: '100%'}}>ORDER</Link>
                          <h1>{pizza.type}</h1>
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
  gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
  gridGap: '1em',
  justifyContent: 'center'
}

export default RestaurantMenu;
