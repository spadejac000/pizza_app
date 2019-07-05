import React, {Component} from 'react';
import {Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';

class Success extends Component {
  render() {
    return(
      <Container>
        <section className="py-5">
          <h1 className="display-3">
            Thank You
          </h1>
          <p className="lead">You food will be delivered to you within 1 hour.</p>
          <Link to="/" className="btn btn-dark btn-lg">Go Back Home</Link>
        </section>
      </Container>
    )
  }
}

export default Success;