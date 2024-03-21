import { ListItem } from "../styles/style";
import PropTypes from "prop-types";

function SummaryLists({ dataInfo }) {
  const {category, score, icon} = dataInfo;
  return (
    <ListItem type={category} >
      <p>
        <img src={icon} alt={`${category} icon`} />
        <span>{category}</span>
      </p>
      <p>
        <strong>{score}</strong> 
        <span>/ 100</span>
      </p>
    </ListItem>
  )
}

SummaryLists.propTypes = {
  dataInfo: PropTypes.object,
}

export default SummaryLists;