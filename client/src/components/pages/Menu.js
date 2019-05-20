import React, { Component } from 'react';
import axios from 'axios';

class Menu extends Component {
  state = {
    pizzas: []
  }

  componentDidMount() {
    axios.get('http://localhost:5000')
      .then(res => console.log(res.data));
  }

  render() {
    return (
      <div>
        <h1>Menu</h1>
      </div>
    )
  }
}

export default Menu;
