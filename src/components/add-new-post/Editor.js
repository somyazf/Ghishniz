import React from "react";
import ReactQuill from "react-quill";
import { 
  Card, 
  CardBody, 
  Form, 
  FormInput, 
  InputGroup,
  InputGroupText,
  InputGroupAddon, 
} from "shards-react";
import { Col, Row } from 'react-bootstrap';

import "react-quill/dist/quill.snow.css";
import "assets/styles/quill.css";

const Editor = () => (
  <Card small className="mb-3">
    <CardBody>

      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" />
        <ReactQuill className="add-new-post__editor mb-1" />
      </Form>

      <Row>
        <h4>Ingredients:</h4>
        <Col>
          <InputGroup className="mb-2">
            <InputGroupAddon type="prepend">
              <InputGroupText>Preperation Time</InputGroupText>
            </InputGroupAddon>
            <FormInput />
            <InputGroupAddon type="append">
              <InputGroupText>Min</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <h4>Additional Information:</h4>
        <Col>
          <InputGroup className="mb-2">
            <InputGroupAddon type="prepend">
              <InputGroupText>Preperation Time</InputGroupText>
            </InputGroupAddon>
            <FormInput />
            <InputGroupAddon type="append">
              <InputGroupText>Min</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </Col>
        <Col>
        <InputGroup className="mb-2">
              <InputGroupAddon type="prepend">
                <InputGroupText>Serving People</InputGroupText>
              </InputGroupAddon>
              <FormInput />
              <InputGroupAddon type="append">
                <InputGroupText></InputGroupText>
              </InputGroupAddon>
            </InputGroup>
        </Col>
      </Row>
      

    </CardBody>
  </Card>
);

export default Editor;
