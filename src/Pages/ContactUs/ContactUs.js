import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import img from "../../images/contact-us.svg";

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container className="">
      <Row xs={1} md={2}>
        <Col>
          <img src={img} alt="" />
        </Col>
        <Col className="my-auto">
          <h2>Contact Us</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control
                as="textarea"
                placeholder="Write your message"
                rows={3}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Send
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
