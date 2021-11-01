import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Destination from "../Destination/Destination";

const Destinations = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    fetch("https://morning-brook-19447.herokuapp.com/tours")
      .then((res) => res.json())
      .then((data) => setTours(data));
  }, []);
  return (
    <Row xs={1} md={2} xl={3} className="g-4">
      {tours.map((tour) => (
        <Destination tour={tour} key={tour.name} />
      ))}
    </Row>
  );
};

export default Destinations;
