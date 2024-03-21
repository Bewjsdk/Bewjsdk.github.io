import { ResultSection } from "../styles/style"

function Result() {
  return (
    <ResultSection>
      <h2>Your Result</h2>

      <div className="score">
        <p className="score-average">50</p>
        <p>of 100</p>
      </div>

      <p>Great</p>

      <p>
        You scored higher that 65% of <br /> 
        the people who have taken <br/> 
        these tests.
      </p>
    </ResultSection>
  )
}

export default Result