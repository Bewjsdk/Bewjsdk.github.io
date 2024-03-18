import Lists from './Lists';
import foodPic from '/images/image-omelette.jpeg';
import PropTypes from 'prop-types';

function Header({ data }) {
  const {topic, lists} = data;
  return (
    // Recipe Header
    <header className='recipe-header'>

      <img src={foodPic} alt='Omelette Picture' />
      
      {/* Top Header (Image and some content) */}
      <div className="recipe-header-top">
        <h1>Simple Omeletter Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal.
          This classic omelette combines beaten eggs cooked to perfection,
          optionally filled with your choice of cheese, vegetables, or meats.
        </p>
      </div>

      {/* Bottom Header (Preparation time) */}
      <div className='recipe-header-bottom'>
        <h3>{topic}</h3>
        <ul className='prepare-lists'>
          <Lists lists={lists} />
        </ul>
      </div>
    </header>
  )
}

Header.propTypes = {
  data: PropTypes.object,
}

export default Header;