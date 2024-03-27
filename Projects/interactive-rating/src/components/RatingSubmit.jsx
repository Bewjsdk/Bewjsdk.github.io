import thankPic from '/images/illustration-thank-you.svg';

function RatingSubmit() {
  return (
    <div className="rating-submit">
      {/* Thank You Picuture */}
      <img src={thankPic} alt="Thank you picture" />

      {/* Show Score Rating */}
      <p className="rating-show-score">You selected 4 out of 5</p>

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

export default RatingSubmit