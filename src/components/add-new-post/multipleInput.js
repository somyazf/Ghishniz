import React, { useState } from "react";
import {
  FormInput, 
  InputGroup,
  InputGroupText,
  InputGroupAddon, 
  Button
} from "shards-react";

const MultipleInput = ({
    inputs,
    addInput,
    handleChange,
    handleRemove
}) => {

// const blankIngredinet = {ingredient:''};
// const [inputs, setInputs] = useState([
//     {...blankIngredinet}
// ]);

// const addInput = () =>{
//     setInputs([...inputs, {...blankIngredinet}]);
// }

// const handleChange = (event) => {
//     const updatedInputs = [...inputs];
//     updatedInputs[event.target.name] = event.target.value;
//     setInputs(updatedInputs); 
// }

// const handleRemove = (id) =>{
//     const items = [...inputs]
//     items.splice(id, 1);
//     setInputs(items);
// }

    return <>
        {
            inputs.map((ing,index)=>{
                const ingId = `ingredient-${index}`;
                return(
                    <InputGroup className="mb-2" key={index} id={ingId}>
                        <InputGroupAddon type="prepend">
                            <InputGroupText>{`Ingredient ${index + 1}:`}</InputGroupText>
                        </InputGroupAddon>
                        <FormInput value={inputs[index].ingId} name={ingId} onChange={handleChange}/>
                        <InputGroupAddon type="append">
                            <Button theme="secondary" onClick={handleRemove}>X</Button>
                        </InputGroupAddon>
                    </InputGroup>
                )
            })
        }
        
        <Button variant="outlined" color="secondary" onClick={addInput}>Add Ingredient</Button>
    </>
}

export default MultipleInput;