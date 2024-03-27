import RatingSubmit from './RatingSubmit';
import starLogo from '/images/icon-star.svg';

function RatingBox() {
  // Rating Scores
  const ratingScores = [1, 2, 3, 4, 5];
  // Create Rating Score Button
  const ratingButtons = ratingScores.map((score,i) => (
    <button key={i} className='btn btn-rating'>{score}</button>
  ));

  return (
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
      <button className='btn btn-submit'>SUBMIT</button>

      <RatingSubmit />

    </div>
  )
}

export default RatingBox