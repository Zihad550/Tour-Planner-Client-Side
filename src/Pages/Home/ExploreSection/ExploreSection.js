import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ExploreContent from "../ExploreContent/ExploreContent";

const ExploreSection = () => {
  const [exploreItems, setExploreItems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/exploreitems")
      .then((res) => res.json())
      .then((data) => setExploreItems(data));
  });
  return (
    <Row xs={2} md={3} lg={5} className="g-3">
      {exploreItems.map((exploreItem) => (
        <ExploreContent exploreItem={exploreItem} key={exploreItem.name} />
      ))}
    </Row>
  );
};

export default ExploreSection;
