import { useState } from 'react';
import RatingSubmit from './RatingSubmit';
import starLogo from '/images/icon-star.svg';
import Button from './Button';

// Rating Scores
const ratingScores = [1, 2, 3, 4, 5];

function RatingBox() {
  // Submit State
  const [isSubmit, setIsSubmit] = useState(false);
  // Select Button
  const [selectedButton, setSelectedButton] = useState(0);

  // Create Rating Score Button
  const ratingButtons = ratingScores.map((score,i) => (
    <Button key={i} score={score} selected={selectedButton}
    setSelected={setSelectedButton}/>
  ));

  // Submit Button
  const handleSubmit = () => {

    if(selectedButton > 0) {
      setIsSubmit(true);
    }
  };

  return (
    // Submit will show rating submit (thank you)
    isSubmit ? <RatingSubmit score={selectedButton} returnRating={setIsSubmit}/> :
    
    // Not submit will show rating-card
    <div className="rating-card">
      {/* Star Logo */}
      <img src={starLogo} alt="Orange Star" />

      {/* Information */}
      <div className='rating-card-info'>
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support
          request. All feedback is appreciated to help us
          improve our offering!
        </p>
      </div>

      {/* Rating Score */}
      <div className='rating-card-score'>
        {ratingButtons}
      </div>

      {/* Submit Rating */}
      <button className='btn btn-submit' onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default RatingBox