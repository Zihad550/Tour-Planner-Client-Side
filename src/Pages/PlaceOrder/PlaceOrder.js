import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import "./PlaceOrder.css";

const PlaceOrder = () => {
  const { user } = useAuth();
  const { id } = useParams();

  const [selectedTour, setSelectedTour] = useState({});

  const { img, name, description, _id } = selectedTour;

  useEffect(() => {
    fetch(`https://morning-brook-19447.herokuapp.com/tours/${id}`)
      .then((res) => res.json())
      .then((data) => setSelectedTour(data));
  }, []);

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.orderImg = img;
    data.orderName = name;
    data.orderDescription = description;
    data.orderId = _id;
    data.orderStatus = "pending";

    fetch("https://morning-brook-19447.herokuapp.com/orderDetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Order processed succesfully");
          reset();
        }
      });
  };
  return (
    <Container className="my-5">
      <Row md={1} lg={2} className="align-items-center">
        <Col>
          <Card>
            <Card.Img src={img} alt="tour" />
            <Card.Body>
              <Card.Title>{name}</Card.Title>
              <Card.Text>{description}</Card.Text>
            </Card.Body>
          </Card>{" "}
        </Col>

        <Col>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex flex-column  mx-auto my-5 placeOrder-form"
          >
            <input
              defaultValue={user.displayName}
              placeholder="Enter your Name"
              {...register("name")}
            />
            {errors.name && (
              <span className="text-danger">Please enter your e-mail</span>
            )}

            <input
              defaultValue={user.email}
              placeholder="Enter your E-mail"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <span className="text-danger">
                Please enter your valid e-mail
              </span>
            )}
            <input
              placeholder="Enter your mobile number"
              {...register("number", { required: true })}
            />
            {errors.number && (
              <span className="text-danger">
                Please enter your valid phone number
              </span>
            )}
            <input
              placeholder="Enter your city name"
              {...register("cityName", { required: true })}
            />
            {errors.cityName && (
              <span className="text-danger">Please enter your city name</span>
            )}

            <input type="submit" />
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default PlaceOrder;
