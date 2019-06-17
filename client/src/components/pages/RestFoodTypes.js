import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {Consumer} from '../../context';
import './RestFoodTypes.css'
import {
  Container
} from 'react-bootstrap';

class RestFoodTypes extends Component {
  // state = {
  //   savedFoodType: ''
  // }

  render() {
    return (
      <Consumer>
        {value => {
          return(
            value.restaurants.map((restaurant) => (
              <Container>{
              restaurant.path === this.props.match.path 
              ? Object.keys(restaurant).slice(3).map((foodTypes) => {
                for(let i = 0; i < Object.keys(value.foodImagesMain).length; i++) {
                  if(Object.keys(value.foodImagesMain)[i] === foodTypes) {
                    const saveFoodType = () => {
                      value.savedFoodType.setState({
                        savedFoodType: Object.keys(value.foodImagesMain)[i]
                      },
                      value.savedFoodType.findRoutes()
                    )
                    }
                    return (
                      <Link 
                        className="foodTypeLinks mb-2" 
                        to={`${restaurant.path}/${Object.keys(value.foodImagesMain)[i]}`}
                        onClick={saveFoodType}
                      >
                        <img src={value.foodImagesMain[foodTypes]} />
                        {foodTypes}
                      </Link>
                    )
                  }
                }
                })
              : null
              }</Container>
            ))
          )

        }}
      </Consumer>
    )
  }
}

export default RestFoodTypes;
