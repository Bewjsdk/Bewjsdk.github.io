import starPic from '/assets/images/icon-star.svg';

function FaqsHeader() {
  return (
    <header className='faqs-header'>
      <img src={starPic} alt="Purple Star icon" />
      <h1>FAQs</h1>
  </header>
  )
}

export default FaqsHeader