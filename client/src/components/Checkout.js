import React, {Component} from 'react';

class Checkout extends Component {
  render() {
    return(
      <form action="/charge" method="POST">
        <script
          src="https://checkout.stripe.com/checkout.js" class="stripe-button"
          // data-key={{stripePublishableKey}}
          data-amount="2500"
          data-name="Pizza App Checkout"
          data-description="Ebook written by Jacob Spade"
          data-image="/img/pepsi.png"
          data-locale="auto">
        </script>
        <script>
          // hide default stripe button
          document.getElementsByClassName('stripe-button-el')[0].style.display = 'block';
        </script>
        <button type="submit" class="btn btn-outline-dark text-white btn">
          Purchase For $25
        </button>
      </form>
    )
  }
}

export default Checkout;