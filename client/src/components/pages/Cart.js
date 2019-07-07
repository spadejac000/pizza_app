import React, {Component} from 'react';
import axios from 'axios';
import uuid from 'uuid';
import {Container, ListGroup, ListGroupItem, Row, Col, Button, Card} from 'react-bootstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Checkout from '../Checkout';

class Cart extends Component {
  state = {
    food: [
    ],
    price: 29.97,
    isOpen: false,
    modal: false
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
        <Row>
          <Col className="col-sm-8">
            <Row>
              <Col className="col-sm-5"><h2>Shopping Cart</h2></Col>
              <Col></Col>
              <Col style={{textAlign: "end"}}><h6 style={{position: "absolute", bottom: 0, right: '15px'}}>Price</h6></Col>
              <Col style={{textAlign: "end"}}><h6 style={{position: "absolute", bottom: 0, right: '15px'}}>Quantity</h6></Col>
            </Row>
            <ListGroup>
              { this.state.food.map(
                ({_id, pizzaName, image, price, quantity}) => (
                  <ListGroupItem>
                    <CSSTransition key={_id} timeout={500} classNames="fade">
                      <TransitionGroup>
                        <Row>
                          <Col>
                            <img style={{width: '100px', borderRadius: '5px'}} src={image} />
                          </Col>
                          <Col>
                            <Row>
                              <h4>{pizzaName}</h4>
                            </Row>
                            <Row>
                              <Button 
                                className="btn-danger"
                                // onClick={this.setState(state => ({
                                //   food: state.food.filter(food => food.id !== id)
                                // }))}
                                onClick={() => {
                                  // console.log(food._id, food._id)
                                  this.setState({
                                    food: this.state.food.filter(food => food._id !== _id)
                                  })

                                  axios.delete('http://localhost:5000/api/pizzas', this.state);
                                }}
                              >Delete</Button>
                            </Row>
                          </Col>
                          <Col style={{textAlign: 'end', paddingRight: 0}}>
                            <h6 style={{color: '#DC3545'}}>${price}</h6>
                          </Col>
                          <Col style={{textAlign: 'end'}}>
                          <select>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="4">5</option>
                            <option value="4">6</option>
                            <option value="4">7</option>
                            <option value="4">8</option>
                            <option value="4">9</option>
                            <option value="4">10+</option>
                          </select>
                          </Col>
                        </Row>
                      </TransitionGroup>
                    </CSSTransition>
                  </ListGroupItem>
                ))}
            </ListGroup>
            <h4 style={{textAlign: 'end'}}>Subtotal (1 item): ${this.state.price}</h4>
          </Col>
          <Col className="col-sm-3">
            <Card style={{ width: '18rem' }}>
              <Card.Body>
                <Card.Title>Subtotal (1 item): ${this.state.price}</Card.Title>
                <Button 
                  variant="warning"
                  onClick={(e) => {
                    this.setState({
                      isOpen: true,
                      modal: true
                    })
                  }}
                >Checkout</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Checkout isOpen={this.state.isOpen} onClose={(e) => this.setState({
          isOpen: false
        })}/>
        
      </Container>
    )
  }
}

export default Cart;