import React from "react";
import { Container, Row, Col, Carousel, Card } from "react-bootstrap";
import "./Aboutus.css";
import ashok from "../pages/ashok.jpg";
import devesh from "../pages/devesh.jpg";
import shivam from "../pages/shivam.jpg";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <Container>
      <h1 className="text-center mt-4 mb-5">About Us</h1>
      <Row className="mb-5">
        <Col md={6} className="mb-4">
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://img.c3controls.com/c3controls-Electric-car-home-charging-4.gif?h=500&fit=fill"
                alt="About Us 1"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://waveipt.com/wp-content/uploads/2021/04/Wireless-Bus-Gif-2.gif"
                alt="About Us 2"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://ktm2day.com/wp-content/uploads/2022/06/electric-vehicle-anim.gif"
                alt="About Us 3"
              />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col md={6}>
          <div>
            <h2 className="mb-3">Welcome to EVON</h2>
            <p className="lead" style={{ fontSize: "1.2rem", color: "#333" }}>
              At EVON, we are committed to revolutionizing the electric vehicle
              charging experience. We provide efficient and eco-friendly
              charging solutions that empower individuals and businesses to
              embrace sustainable transportation.
            </p>
            <p style={{ fontSize: "1rem", color: "#555" }}>
              Our strategically located charging stations offer convenience and
              accessibility to EV owners, enabling them to power their journeys
              with clean energy. We believe in the power of electric vehicles to
              reduce carbon emissions and create a greener future.
            </p>
            <p style={{ fontSize: "1rem", color: "#555" }}>
              With our advanced charging infrastructure and intelligent network,
              EV owners can easily locate and access our charging stations
              through our user-friendly mobile app or website. We offer flexible
              charging plans, secure payment options, and seamless user
              experiences to ensure a hassle-free charging process.
            </p>
            <p style={{ fontSize: "1rem", color: "#555" }}>
              Join us in our mission to drive the transition to sustainable
              transportation. We continuously strive to expand our charging
              network, innovate our services, and provide exceptional support to
              our customers. Contact us today to learn more about EVON and how
              we can meet your electric vehicle charging needs.
            </p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="mb-3">Our Commitment to Sustainability</h3>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            At EVON, sustainability is at the core of everything we do. We are
            dedicated to reducing our environmental impact and promoting a
            cleaner future. Our charging stations are powered by renewable
            energy sources, minimizing carbon emissions and supporting the
            transition to a greener energy ecosystem.
          </p>
          <p style={{ fontSize: "1rem", color: "#555" }}>
            We actively collaborate with local communities, businesses, and
            governments to expand the electric vehicle charging infrastructure
            and promote sustainable transportation solutions. By providing
            reliable and efficient charging services, we aim to accelerate the
            adoption of electric vehicles and contribute to a cleaner and
            healthier planet.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md={4}>
          <Card className="h-50 w-50 p-2 hover-shadow">
            <Card.Img variant="top" src={shivam} alt="Member 1" />
            <Card.Body className="text-center">
              <Card.Title className="card-name">Shivam GAur</Card.Title>
              <Card.Text className="card-position">CEO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-50 w-50 hover-shadow  p-2">
            <Card.Img variant="top" src={ashok} alt="Member 2" />
            <Card.Body className="text-center">
              <Card.Title className="card-name">Ashok Nagda</Card.Title>
              <Card.Text className="card-position">CFO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="h-50 w-50 hover-shadow p-2">
            <Card.Img variant="top" src={devesh} alt="Member 3" />
            <Card.Body className="text-center">
              <Card.Title className="card-name">Devesh Bhargava</Card.Title>
              <Card.Text className="card-position">CTO</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
};

export default AboutUs;
