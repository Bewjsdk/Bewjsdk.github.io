import PropTypes from 'prop-types';
import Lists from './Lists';
import Table from './Table';

function Section({data}) {
  const {topic, lists} = data;
  
  let listElements;

  if(topic === "Ingredients") {
    listElements = <ul><Lists lists={lists} /></ul>
  } else if(topic === "Instructions") {
    listElements = <ol><Lists lists={lists} /></ol>
  } else {
    listElements = <Table items={lists} />
  }
   
  return (
    <section className={`section-${topic.toLowerCase()}`}>
      <h2>{topic}</h2>
      {listElements}
    </section>
  )
}

Section.propTypes = {
  data: PropTypes.object,
}

export default Section