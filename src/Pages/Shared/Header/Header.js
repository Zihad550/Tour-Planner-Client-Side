import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar bg="light nav-container" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Tour Planner</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/contactUs">Contact Us</NavLink>

            {user?.email ? (
              <>
                <NavLink to="/myTours">My Tours</NavLink>
                <NavLink to="/manageAllTours">Manage all tours</NavLink>
                <NavLink to="/addNewTour">Add New Tour</NavLink>
                <Button className="btn-primary rounded-3" onClick={logOut}>
                  Log out {user.displayName}
                </Button>
              </>
            ) : (
              <Link to="/login">Login</Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
