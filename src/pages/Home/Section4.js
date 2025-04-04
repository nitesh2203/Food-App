import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";

function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
              A delicious burger isn’t just a meal—it’s an experience that brings people closer. The perfect blend of juicy patties, fresh ingredients, and rich flavors makes every bite unforgettable. Whether you're sharing a meal with friends or enjoying a solo feast, a great burger always hits the spot!
              </p>
              <ul>
                <li>
                  <p>
                  At Burger Beast, we craft each burger with passion, using high-quality ingredients to ensure a mouthwatering experience. From our signature sauces to perfectly toasted buns, every detail is designed to deliver pure satisfaction.
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG Parallax Scroll */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
