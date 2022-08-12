import React, { useState } from 'react';

import RatingCard from './components/rating-card/';

import RatingResponse from './components/rating-response';

import "./App.css"


function App() {

  const [ isRatingSubmit, setIsRatingSubmitted ] = useState(false);

  const [ submittedRating, setSubmittedRating ] = useState(-1);

  const onRatingSubmitted = (rate : number) => {
    setSubmittedRating(rate);
    setIsRatingSubmitted(true);
  }
  
  let ratingConfig = {
    maxRating : 5,
    minRating : 1,
    onRatingSubmitted : onRatingSubmitted
  };

  

  return (
    <div className="App">
      { isRatingSubmit ? <RatingResponse rate={submittedRating} maxRating={ratingConfig.maxRating}/> : <RatingCard {...ratingConfig} />}
    </div>
  );
}

export default App;
