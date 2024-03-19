import {faqsData} from '../data';
import FaqsShow from './FaqsShow';

function FaqsContents() {
  
  const faqsShowElements = faqsData.map((data, index) => (
    <FaqsShow data={data} key={index} />
  ))

  return (
    <div className="faqs-contents">
      {faqsShowElements}
    </div>
  )
}

export default FaqsContents