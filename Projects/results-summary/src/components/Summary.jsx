import SummaryLists from "./SummaryLists";
import { SummarySection, Button } from "../styles/style";
import PropTypes from "prop-types";

function Summary({ dataValue }) {
   
  const listElements = dataValue.map((data, index) => {
    return <SummaryLists key={index} dataInfo={data}/>
  });

  return (
    <SummarySection>
      <h2>Summary</h2>
        <ul className="stat-summary">
          {listElements}
        </ul>
      <Button>Continue</Button>
    </SummarySection>
  )
}

Summary.propTypes = {
  dataValue: PropTypes.array,
}

export default Summary