import React from "react";
import "../App.css";
import { Col, Row, Image, Container, Button } from "react-bootstrap";

export default function Banner() {
  return (
    <Container fluid>
      <Row>
          <Col className="banner">
            <div className="bannerText">
              <h1>Welcome to Ghishniz</h1>
              <h3>Discover Recipes</h3>
              <Button size="lg">SEARCH RECIPE</Button>
            </div>
          </Col>
      </Row>
    </Container>
  );
}
