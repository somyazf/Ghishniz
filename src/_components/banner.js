import React from 'react';
import banner from '../assets/banner.jpg';
import '../App.css';
import { Col, Row, Image, Container, Button } from 'react-bootstrap';
export default function Banner() {
  return (
    <Container fluid>
      <Row>
        <Col className="banner">
          <div className="bannerText">
            <h1>Welcome to Ghishniz</h1>
            <Button size="lg">
              SEARCH RECIPE
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
