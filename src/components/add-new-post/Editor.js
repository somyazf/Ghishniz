import React, { useState } from "react";
import { 
  Card, 
  CardBody, 
  Form, 
  FormInput, 
  InputGroup,
  InputGroupText,
  InputGroupAddon, 
  FormTextarea 
} from "shards-react";
import { Col, Row } from 'react-bootstrap';

import "react-quill/dist/quill.snow.css";
import "assets/styles/quill.css";
import MultipleInput from "./multipleInput";

const Editor = ({
  valuesTitle,
  valuesDirection,
  valuesReadyInMinutes,
  valuesServings,
  imagePreviewUrl,
  handleChange,
  handleImageChange
}) => {

  const blankIngredinet = {ingredient:''};
  const [inputs, setInputs] = useState([
      {...blankIngredinet}
  ]);

  const addInput = () =>{
      setInputs([...inputs, {...blankIngredinet}]);
  }

  const inputHandleChange = (event) => {
      const updatedInputs = [...inputs];
      updatedInputs[event.target.name] = event.target.value;
      setInputs(updatedInputs); 
  }

  const handleRemove = (id) =>{
      const items = [...inputs]
      items.splice(id, 1);
      setInputs(items);
  }  

  let imagePreview = null;
  if (imagePreviewUrl) {
    imagePreview = (<img src={imagePreviewUrl} />);
  } else {
    imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
  }

  return <>
    <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-post">
          <FormInput size="lg" className="mb-3" placeholder="Post Title" name="title" onChange={handleChange}/>
          <h5>Direction:</h5>
          <FormTextarea size="lg" className="mb-3" name="direction" value={valuesDirection} onChange={handleChange}/>
          <Row>
            <Col>
              <h5>Ingredients:</h5>
              <MultipleInput
                inputs={inputs}
                addInput={addInput}
                handleChange={inputHandleChange}
                handleRemove={handleRemove}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h5>Additional Information:</h5>
            </Col>
          </Row>
          <Row>
            <Col>
              <InputGroup className="mb-2">
                <InputGroupAddon type="prepend">
                  <InputGroupText>Preperation Time</InputGroupText>
                </InputGroupAddon>
                <FormInput name="readyInMinutes" value={valuesReadyInMinutes} onChange={handleChange}/>
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
                  <FormInput name="servings" value={valuesServings} onChange={handleChange}/>
                  <InputGroupAddon type="append">
                    <InputGroupText></InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
            </Col>
          </Row>
          <Row>
            <FormInput name="readyInMinutes" type="file" name="image" onChange={handleImageChange}/>
            <div className="imgPreview">
              {imagePreview}
            </div>
          </Row>
        </Form>
      </CardBody>
    </Card>
  </>
}

export default Editor;