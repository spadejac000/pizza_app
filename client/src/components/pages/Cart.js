import React, {Component} from 'react';
import axios from 'axios';
import uuid from 'uuid';
import {Container, ListGroup, ListGroupItem, Row, Col, Button} from 'react-bootstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

class Cart extends Component {
  state = {
    food: [
      {
        pizzaName: 'poop',
        image: 'poop.png',
        price: 10.00,
        quantity: 2,
        _id: uuid.v4()
      }
    ]
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/pizzas').then(res => {
      const food = res.data;
      this.setState({ food });
    })
  }

  render() {

    const consoleLog = () => {
      console.log('poop')
    }

    return(
      <Container>
        <Row>
          <Col><h2>Shopping Cart</h2></Col>
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
                      <Col style={{textAlign: 'end'}}>
                        <h6>{price}</h6>
                      </Col>
                      <Col style={{textAlign: 'end'}}>
                        <h6>{quantity}</h6>
                      </Col>
                    </Row>
                  </TransitionGroup>
                </CSSTransition>
              </ListGroupItem>
            ))}
        </ListGroup>
      </Container>
    )
  }
}

// const cartItemsStyle = {
//   border:
// }

export default Cart;