import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import Client from "../Client/Client";

const WhatClientsSays = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetch("https://morning-brook-19447.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setClients(data));
  });

  return (
    <Row sm={1} md={2} lg={3} className="g-4">
      {clients.map((client) => (
        <Client client={client} key={client.name} />
      ))}
    </Row>
  );
};

export default WhatClientsSays;
