import React, { Component } from 'react'
import { 
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from 'react-bootstrap';


class NavMenu extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark" className="mb-5">
        <Navbar.Brand href="/">Pizza App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/" to="/">Home</Nav.Link>
          </Nav>
          <Nav>
          <Nav.Link href="/cart" to="/cart"><i className="fas fa-shopping-cart"></i></Nav.Link>
          </Nav>
          {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default NavMenu;
