import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section7() {
  return (
    <section className="contact_section">
      <Container>
        <Row className="justify-content-center">
          <Col sm={8} className="text-center">
            <h4>We Guarantee</h4>
            <h2>30 Minutes Delivery!</h2>
            <p>
            We ensure that your order reaches you within just 30 minutes, providing a seamless and hassle-free experience. Our efficient delivery system, combined with real-time tracking, ensures that you receive your items fresh and on time. 
            </p>
            <Link to="/" className="btn btn_red px-4 py-2 rounded-0">
              Call: 9xxxxxxxxxxx77
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section7;
