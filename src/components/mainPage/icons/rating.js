import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


const SimpleRating = (props) => {
  const [value, setValue] = React.useState(2);
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name={props.index}
          value={value}
          onChange={(event, newValue) => {
            console.log(props.index)
            setValue(newValue);
          }}
        />
      </Box>
    </div>
  );
}

export default SimpleRating;
