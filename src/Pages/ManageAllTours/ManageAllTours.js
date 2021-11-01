import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import MyTour from "../../MyTour/MyTour";

const ManageAllTours = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("https://morning-brook-19447.herokuapp.com/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  });
  return (
    <Row lg={3} md={2} xs={1}>
      {orders.map((order) => (
        <MyTour order={order} key={order._id}>
          <button></button>
        </MyTour>
      ))}
    </Row>
  );
};

export default ManageAllTours;
