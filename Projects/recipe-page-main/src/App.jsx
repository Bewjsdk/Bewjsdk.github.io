import Footer from './components/Footer';
import Header from './components/Header';
import Section from './components/Section';
import { recipeData } from './data';

import './App.scss';

function App() {
  const [preparationTime, ...otherRecipeData] = recipeData;

  const sectionElements = otherRecipeData.map((data, index) => (
    <Section key={index} data={data}/>
  ))

  return (
    <main className='recipe-main'>
      <Header data={preparationTime} />
      {sectionElements}
      <Footer />
    </main>
  )
}

export default App
