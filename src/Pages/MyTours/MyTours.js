import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MyTour from "../../MyTour/MyTour";

const MyTours = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <Row lg={3} md={2} xs={1}>
      {orders.map((order) => (
        <MyTour order={order} key={order._id} />
      ))}
    </Row>
  );
};

export default MyTours;
