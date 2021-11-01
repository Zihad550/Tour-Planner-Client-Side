import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import ExploreContent from "../ExploreContent/ExploreContent";

const ExploreSection = () => {
  const [exploreItems, setExploreItems] = useState([]);

  useEffect(() => {
    fetch("https://morning-brook-19447.herokuapp.com/exploreitems")
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
