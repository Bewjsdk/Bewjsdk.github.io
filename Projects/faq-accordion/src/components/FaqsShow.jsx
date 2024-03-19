import PropTypes from 'prop-types';
import { useState } from 'react';

import plus from '/assets/images/icon-plus.svg';
import minus from '/assets/images/icon-minus.svg';

function FaqsShow({data}) {
  // Show state
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <details 
        className="faqs-contents-item"
        onClick={() => setIsShow(prev => !prev)}
      >
        {/* Question Topic */}
        <summary>
          {data.question}
          <img src={isShow ? minus : plus} />
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