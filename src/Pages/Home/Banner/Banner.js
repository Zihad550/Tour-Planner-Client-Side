import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../../images/banner/banner-1.jpg";
import banner2 from "../../../images/banner/banner-2.jpg";
import banner3 from "../../../images/banner/banner-3.jpg";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={banner1} alt="First slide" />
          <Carousel.Caption className="d-flex align-items-center justify-content-center h-100 w-100 flex-column">
            <h3 className="fs-1 ">Best travel planners</h3>
            <p className="fs-5">
              We are teams of professionals to help you with your travel.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner2} alt="Second slide" />

          <Carousel.Caption className="d-flex align-items-center justify-content-center h-100 w-100 flex-column">
            <h3 className="fs-1">Explore more</h3>
            <p className="fs-5">
              You can explore travel related things with this tour planner.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={banner3} alt="Third slide" />

          <Carousel.Caption className="d-flex align-items-center justify-content-center h-100 w-100 flex-column">
            <h3 className="fs-1">Contact Us</h3>
            <p className="fs-5">
              We are always here to help you on your needs.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;
