import PropTypes from 'prop-types';
import { useState } from 'react';

import plus from '/assets/images/icon-plus.svg';
import minus from '/assets/images/icon-minus.svg';

function FaqsShow({data}) {
  // Show state
  const [isShow, setIsShow] = useState(false);

  // Handle state show and hide
  const handleShow = () => {
    setIsShow(prev => !prev);
  }

  return (
    <>
      <details 
        open={isShow}
        className={isShow ? "faqs-contents-item active" : "faqs-contents-item"}
      >
        {/* Question Topic */}
        <summary>
          {data.question}
          <button onClick={handleShow}>
            <img src={isShow ? minus : plus} />
          </button>
        </summary>
        
        {/* Answer */}
        <p>{data.answer}</p>
      </details>
      <hr />
    </>
  )
}

FaqsShow.propTypes = {
  data: PropTypes.object,
}


export default FaqsShow