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
  valuesIngredients,
  handleChange,
  inputs,
  addInput,
  handleInputChange,
  handleRemove
}) => {

  // const blankIngredinet = {ingredient:''};
  // const [inputs, setInputs] = useState([
  //     {...blankIngredinet}
  // ]);

  // const addInput = () =>{
  //     setInputs([...inputs, {...blankIngredinet}]);
  // }

  // const inputHandleChange = (event) => {
  //     const updatedInputs = [...inputs];
  //     updatedInputs[event.target.name] = event.target.value;
  //     setInputs(updatedInputs); 
  // }

   

  // let imagePreview = null;
  // if (imagePreviewUrl) {
  //   imagePreview = (<img src={imagePreviewUrl} />);
  // }

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
                handleChange={handleInputChange}
                handleRemove={handleRemove}
                valuesIngredients = {valuesIngredients}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <h5 className="additional">Additional Information:</h5>
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
            <Col>
              {/* <h5 className="additional">Upload an Image</h5> */}
              {/* <input type="file" id="file" name="image" onChange={handleImageChange}/>
              <label for="file" class="btn-2">upload</label>
              <div className="imgPreview">
                {imagePreview}
              </div> */}
            </Col>
          </Row>
        </Form>
      </CardBody>
    </Card>
  </>
}

export default Editor;