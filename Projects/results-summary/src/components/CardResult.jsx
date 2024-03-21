import Summary from "./Summary";
import Result from './Result';
import { CardMain } from "../styles/style";
import data from '../data.json';

function CardResult() {
  const scores = data.map(value => value.score);
  
  return (
    <CardMain>
      <Result scoreData={scores}/>
      <Summary dataValue={data}/>
    </CardMain>
  )
}

export default CardResult