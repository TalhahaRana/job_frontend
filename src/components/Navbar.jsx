import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../../src/App.css";
const MyNavbar = () => {
  return (
    <Navbar>
      <Container>
        <div href="#">Actuary List</div>
        <Navbar.Collapse>
   
          <Nav className="ms-auto g-5">
            <Nav.Link href="#" className="nav-text">About</Nav.Link>
            <Nav.Link href="#" className="nav-text">Post A Job</Nav.Link>
          </Nav>
          <div className="ms-3 nav-btn">
            Get Free Job Alerts
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
