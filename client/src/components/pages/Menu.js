import React, { Component } from 'react';

class Menu extends Component {
  render() {
    return this.props.menu.map((menuItem) => (
      <h3>{menuItem}</h3>
    ))
  }
}

export default Menu;
