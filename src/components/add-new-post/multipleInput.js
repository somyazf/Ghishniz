import React, { useState } from "react";
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
import { Button } from "@material-ui/core";

const [item, setItem] = useState();

const handleChange = event => {
    setItem(...item);
};

const multipleInput = () => {
    return <>
        <InputGroup className="mb-2">
            <InputGroupAddon type="prepend">
                <InputGroupText>Ingredient:</InputGroupText>
            </InputGroupAddon>
            <FormInput />
        </InputGroup>
        {
            item.map((item,index)=>{
                <div>
                    <input value={item}/>
                </div>
            })
        }
        
        <Button variant="outlined" color="secondary"/>
    </>
}
