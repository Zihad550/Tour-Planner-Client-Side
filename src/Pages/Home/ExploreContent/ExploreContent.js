import React from "react";
import { Card, Col } from "react-bootstrap";
import "./ExploreContent.css";

const ExploreContent = ({ exploreItem }) => {
  const { name, img } = exploreItem;
  return (
    <Col>
      <Card className="text-white explore-card border-0 ">
        <Card.Img className="explore-image" src={img} alt="Card image" />
        <Card.ImgOverlay className="d-flex align-items-center justify-content-center">
          <Card.Title>{name}</Card.Title>
        </Card.ImgOverlay>
      </Card>
    </Col>
  );
};

export default ExploreContent;
