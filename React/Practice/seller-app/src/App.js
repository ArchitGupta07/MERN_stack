
import './App.css';
import Card from './components/Card';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='category--buttons'>

        <button className='category--newyork'>New York</button>
        <button className='category--mumbai'>Mumbai</button>
        <button className='category--paris'>Paris</button>
        <button className='category--london'>London</button>

      </div>
      <Card/>
    </div>
  );
}

export default App;
