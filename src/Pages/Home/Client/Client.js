import React from "react";
import { Card, Col } from "react-bootstrap";
import "./Client.css";

const Client = ({ client }) => {
  const { name, comment, img } = client;
  return (
    <Col>
      <Card className="client bg-transparent d-flex flex-column align-items-center pt-3 ">
        <Card.Img variant="top" src={img} />
        <Card.Body className="text-white">
          <Card.Title>{name} </Card.Title>
          <Card.Text>{comment}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Client;
