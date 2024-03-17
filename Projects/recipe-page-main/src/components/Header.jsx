import Lists from './Lists';
import foodPic from '/images/image-omelette.jpeg';
import PropTypes from 'prop-types';

function Header({ data }) {
  const {topic, lists} = data;
  return (
    // Recipe Header
    <header className='recipe-header'>

      {/* Top Header (Image and some content) */}
      <div className="recipe-header-top">
        <img src={foodPic} alt='Omelette Picture' />
        <h1>Simple Omeletter Recipe</h1>
        <p>
          An easy and quick dish, perfect for any meal.
          This classic omelette combines beaten eggs cooked to perfection,
          optionally filled with your choice of cheese, vegetables, or meats.
        </p>
      </div>

      {/* Bottom Header (Preparation time) */}
      <div className='recipe-header-bottom'>
        <Lists type='ul' topic={topic} lists={lists} />
      </div>
    </header>
  )
}

Header.propTypes = {
  data: PropTypes.object,
}

export default Header;