import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <Container className="text-center">
        <div className="text">
        <h1>Find Handpicked Actuarial Jobs That Match Your Expertise</h1>
        <p>
          With 300+ open roles and 50 new jobs posted weekly, your dream job is just a click away.
        </p>
        </div>
     
        <Form className="search-bar">
          <Form.Control
            type="text"
            placeholder="Enter Keyword or Job Title or Location"
            className="search-input"
          />
          <div className="search-button">
            <FaSearch /> Search Jobs
          </div>
        </Form>

     
        <div className="trust-badge">
          <span>Trusted by 1400+ actuaries finding their dream jobs.</span>
          <Button className="join-button">Join The List →</Button>
        </div>
      </Container>
    </div>
  );
};

export default HeroSection;
