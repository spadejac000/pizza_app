import React, {Component} from 'react';
import axios from 'axios';
import {Container, ListGroup, ListGroupItem} from 'react-bootstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class Cart extends Component {
  state = {
    food: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/pizzas').then(res => {
      const food = res.data;
      this.setState({ food });
    })
  }

  render() {
    return(
      <Container>
        <ListGroup>
          { this.state.food.map(food => <ListGroup.Item><img style={{width: '100px'}} src={food.image} />{food.pizzaName} {food.quantity} {food.price}</ListGroup.Item>)}
        </ListGroup>
      </Container>
    )
  }
}

// const cartItemsStyle = {
//   border:
// }

export default Cart;