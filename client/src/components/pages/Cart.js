import React, {Component} from 'react';
import axios from 'axios';

class Cart extends Component {
  state = {
    cart: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/pizzas').then(res => {
      const cart = res.data;
      this.setState({ cart });
    })
  }

  render() {
    return(
      <ul>
        { this.state.cart.map(cart => <li>{cart.pizzaName}</li>)}
      </ul>
    )
  }
}

export default Cart;