import { useEffect, useState } from "react";
import PropTypes from "prop-types";

function Button({score, selected, setSelected}) {
  // Select Score State
  const [isSelect, setIsSelect] = useState(false);

  // Click Select Score
  const selectScoreHandle = () => {
    setIsSelect(true);
    setSelected(score);
  };

  useEffect(() => {
    setIsSelect(score === selected);
  },[score, selected]);
 
  return (
    <button 
      onClick={selectScoreHandle}
      className={isSelect ? 'btn btn-rating selected' : 'btn btn-rating'}
    >
    {score}
    </button>
  )
}

Button.propTypes = {
  score: PropTypes.number,
  selected: PropTypes.number,
  setSelected: PropTypes.func,
}

export default Button