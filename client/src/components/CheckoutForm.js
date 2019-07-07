import React, {Component} from 'react';
import {CardElement, injectStripe, ReactStripeElements} from 'react-stripe-elements';
import {Modal, Button} from 'react-bootstrap';

class CheckoutForm extends Component<IFormProps, IFormState> {
  constructor(props) {
    super(props);
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    // User clicked submit
  }

  render() {
    return (
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
      // <form className="form-group mt-3 border border-primary rounded shadow-lg">
      //   <div className="checkout" style={{zIndex: 10}}>
      //     <button onClick={this.props.onClose}>X</button>
      //     <p>Would you like to complete the purchase?</p>
      //     <CardElement />
      //     <button onClick={this.submit}>Send</button>
      //   </div>
      // </form>
    );
  }
}

interface IFormProps { }

interface IFormState {}

export default injectStripe(CheckoutForm);