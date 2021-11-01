import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { useHistory } from "react-router";

const Destination = ({ tour }) => {
  const { img, name, description, _id } = tour;
  const history = useHistory();

  const handleBook = () => {
    history.push(`/placeOrder/${_id}`);
  };
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="text-truncate" title={description}>
            {description}
          </Card.Text>
          <Button onClick={handleBook} variant="primary">
            Book Now
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Destination;
