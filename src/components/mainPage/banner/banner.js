import React from 'react';
import 'App.css';
import { Col, Row, Container} from 'react-bootstrap';
import SearchPage from '../firstPageSearch/search';

export default function Banner() {
  return (
    <Container fluid>
      <Row>
        <Col className="banner">
{/* <SearchPage/> */}
        </Col>
      </Row>
    </Container>
  );
}
