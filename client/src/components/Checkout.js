import React, {Component} from 'react';
import {Elements, StripeProvider} from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

class Checkout extends Component {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://checkout.stripe.com/checkout.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    let checkoutSheet = (
      <StripeProvider apiKey="pk_test_SDgPMwlzPSK2Fo1LNTcCKhYr00pduFRDkx">
        <div className="example">
          <h1>React Stripe Elements Example</h1>
          <Elements>
            <CheckoutForm/>
          </Elements>
        </div>
      </StripeProvider>
    )

    if(! this.props.isOpen) {
      checkoutSheet = null
    }
    return(
      <div>
        {checkoutSheet}
      </div>
    )
  }
}

export default Checkout;