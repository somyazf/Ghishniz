import React, { useState } from "react";
import {
  FormInput, 
  InputGroup,
  InputGroupText,
  InputGroupAddon, 
} from "shards-react";
import { Button } from "@material-ui/core";

const MultipleInput = () => {

const blankIngredinet = {ingredient:''};
const [inputs, setInputs] = useState([
    {...blankIngredinet}
]);

const addInput = () =>{
    setInputs([...inputs, {...blankIngredinet}]);
}

const handleChange = (event) => {
    const updatedInputs = [...inputs];
    updatedInputs[event.target.name] = event.target.value;
    setInputs(updatedInputs);   
}

const handleRemove = (id) =>{
    const idx = inputs.findIndex(row => row.id === id);
    inputs.splice(idx, 1);
    setInputs(inputs);
}

    return <>
        {
            inputs.map((ing,index)=>{
                const ingId = `ingredient-${index}`;
                return(
                    <InputGroup className="mb-2" key={index}>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>{`Ingredient ${index + 1}:`}</InputGroupText>
                        </InputGroupAddon>
                        <FormInput value={inputs[index].ingId} name={ingId} onChange={handleChange}/>
                        <InputGroupAddon type="append">
                            <Button theme="secondary" onClick={handleRemove}>Remove</Button>
                        </InputGroupAddon>
                    </InputGroup>
                )
            })
        } */}
        
        <Button variant="outlined" color="secondary" onClick={addInput}>Add Ingredient</Button>
    </>
}

export default MultipleInput;
