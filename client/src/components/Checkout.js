import React, {Component} from 'react';

class Checkout extends Component {

  componentDidMount () {
    const script = document.createElement("script");

    script.src = "https://checkout.stripe.com/checkout.js";
    script.dataKey = "pk_test_SDgPMwlzPSK2Fo1LNTcCKhYr00pduFRDkx";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return(
      <form action="http://localhost:5000/charge" method="POST">
        <script
          src="https://checkout.stripe.com/checkout.js" className="stripe-button"
          data-key="pk_test_SDgPMwlzPSK2Fo1LNTcCKhYr00pduFRDkx"
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