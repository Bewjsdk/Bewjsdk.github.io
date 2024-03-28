import { useEffect, useState } from 'react';
import thankPic from '/images/illustration-thank-you.svg';
import PropTypes from 'prop-types';

function RatingSubmit({score, returnRating}) {
  const [countdown, setCountDown] = useState(5);

  useEffect(() => {
    const timeout = setTimeout(() => {
      returnRating(false);
    }, 5000)

    return () => {
      clearTimeout(timeout);
    }
  },[returnRating]);

  useEffect(() => {
    const interval = setInterval(() => {
      if(countdown > 0) {
        setCountDown(count => count - 1);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    }
  })

  return (
    <div className="rating-submit">
      <p className='countdown-time'>{countdown}</p>
      {/* Thank You Picuture */}
      <img src={thankPic} alt="Thank you picture" />

      {/* Show Score Rating */}
      <p className="rating-show-score">You selected {score} out of 5</p>

      {/* Thank you content */}
      <div className='rating-thank'>
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating.
          If you ever need more support. {`don't`} hesitate to
          get in touch!
        </p>
      </div>
    </div>
  )
}

RatingSubmit.propTypes = {
  score: PropTypes.number,
  returnRating: PropTypes.func,
}

export default RatingSubmit