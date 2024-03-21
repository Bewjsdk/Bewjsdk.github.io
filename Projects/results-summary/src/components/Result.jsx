import { ResultSection } from "../styles/style";
import PropTypes from "prop-types";

function Result({ scoreData }) {

  // Average Score
  const scoreSum = scoreData.reduce((current, score) => current + score, 0);
  const scoreAvg = Math.round(scoreSum / scoreData.length);

  // Check Level
  let scoreLevel = '';
  let scoreHigher = '';
  
  if(scoreAvg >= 80) {
    scoreLevel = "Best";
    scoreHigher = "80%"
  } else if(scoreAvg >= 70) {
    scoreLevel = "Great";
    scoreHigher = "65%"
  } else if(scoreAvg >= 60) {
    scoreLevel = "Good";
    scoreHigher = "55%"
  } else if(scoreAvg >= 50) {
    scoreLevel = "Normal";
    scoreHigher = "40%"
  } else {
    scoreLevel = "Bad";
    scoreHigher = "20%"
  }

  return (
    <ResultSection>
      <h2>Your Result</h2>

      <div className="score">
        <p className="score-average">{scoreAvg}</p>
        <p>of 100</p>
      </div>

      <p>{scoreLevel}</p>

      <p>
        You scored higher than {scoreHigher} of <br /> 
        the people who have taken <br/> 
        these tests.
      </p>
    </ResultSection>
  )
}

Result.propTypes = {
  scoreData: PropTypes.array,
}

export default Result