import React from "react";
import { Container, Row, Col } from "reactstrap";
// eslint-disable-next-line
import heroImg from "../images/hero-img1.jpg";
import "./css/hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Learn And Teach <br /> The Way You Want 
              </h2>
              <p className="mb-5">
              
              </p>
            </div>
            
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
