import React from "react";
// import RatingComponent from 'react-rating-component';

export default function SimpleRating() {
  const [rating, setRating] = React.useState(0);

  const onStarClick = (nextValue, prevValue, name) => {
    setRating(nextValue);
  }

  return (
    <div>
      {/* <RatingComponent
        name="rate1"
        starCount={5}
        value={rating}
        onStarClick={onStarClick}
      /> */}
      <span>Rating from state: {rating}</span>
    </div>
  );
}