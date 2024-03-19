import FaqsContents from './components/FaqsContents';
import FaqsHeader from './components/FaqsHeader';
import './styles/App.scss';


function App() {

  return (
    <main className='faqs-container'>
      <FaqsHeader />
      <FaqsContents />
    </main>
  )
}

export default App
