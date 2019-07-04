import React, {Component} from 'react';

class Checkout extends Component {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://checkout.stripe.com/checkout.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return(
      <form action="/charge" method="POST">
        <script
          src="https://checkout.stripe.com/checkout.js" className="stripe-button"
          // data-key={{stripePublishableKey}}
          data-amount="2500"
          data-name="Pizza App Checkout"
          data-description="Pizza app cart. Checking out items"
          data-image="https://cdn.dribbble.com/users/404971/screenshots/1241486/pizza-logo.png"
          data-locale="auto">
        </script>
      </form>
    )
  }
}

export default Checkout;