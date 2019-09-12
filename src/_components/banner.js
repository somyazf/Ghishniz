import React from 'react';
import '../App.css';
import { Col, Row, Container} from 'react-bootstrap';
import MainPageSearch from './mainPageSearch/searchMainPage';




export default function Banner() {
  return (
    <Container fluid>
      <Row>
        <Col className="banner">
          <MainPageSearch/>
        </Col>
      </Row>
    </Container>
  );
}
