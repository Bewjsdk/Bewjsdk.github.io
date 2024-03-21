import SummaryLists from "./SummaryLists";
import { SummarySection, Button } from "../styles/style";

function Summary() {
  return (
    <SummarySection>
      <h2>Summary</h2>
        <ul className="stat-summary">
          <SummaryLists />
          <SummaryLists />
          <SummaryLists />
          <SummaryLists />
        </ul>
      <Button>Continue</Button>
    </SummarySection>
  )
}

export default Summary