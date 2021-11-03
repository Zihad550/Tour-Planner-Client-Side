import React from "react";
import { Container } from "react-bootstrap";
import Banner from "../Banner/Banner";
import CustomerSupports from "../CustomerSupports /CustomerSupports";
import Destinations from "../Destinations/Destinations";
import ExploreSection from "../ExploreSection/ExploreSection";
import WhatClientsSays from "../WhatClientsSays/WhatClientsSays";
import "./HomeContainer.css";

const HomeContainer = () => {
  return (
    <div>
      <Banner></Banner>

      {/* destination section */}
      <Container className="section-margin">
        <h2 className="fs-1 fw-bold mb-3 mt-5">Tours</h2>
        <Destinations />
      </Container>

      {/* explore section */}
      <Container className="section-margin">
        <h2 className="fs-1 fw-bold mb-3 mt-5">Explore</h2>
        <ExploreSection />
      </Container>

      {/* customer support section */}
      <Container>
        <CustomerSupports />
      </Container>

      {/* What our client says section */}
      <div className="mb-5 client-container py-4 px-5">
        <h2 className="fs-1 fw-bold mb-3 mt-4 text-black-50">
          What our client says
        </h2>
        <WhatClientsSays />
      </div>
    </div>
  );
};

export default HomeContainer;
