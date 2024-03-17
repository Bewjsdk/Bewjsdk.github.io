import foodPic from '/images/image-omelette.jpeg';

function Header() {
  return (
    <header className="recipe-header">
      <img src={foodPic} alt="Omelette Picture" />
      <h1>Simple Omeletter Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. 
        This classic omelette combines beaten eggs cooked to perfection, 
        optionally filled with your choice of cheese, vegetables, or meats.
      </p>
    </header>
  )
}

export default Header;