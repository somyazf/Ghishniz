import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';


 const SimpleRating = (props) => {
  const [value, setValue] = React.useState(2);
  

  return (
    <div>
      {/* <RatingComponent
        name="rate1"
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
      /> */}
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Rating
          name={props.index}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
    
    </div>
  );
}


export default SimpleRating;