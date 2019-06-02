import React, { Component } from 'react';

class Menu extends Component {

  render() {
    console.log(this.state)
    return(
      <h3>Menu</h3>
    )
    
    // return this.props.menu.map((menuItem) => (
    //   <h3>{menuItem}</h3>
    // ))
  }
}

export default Menu;
