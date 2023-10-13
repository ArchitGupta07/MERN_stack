
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {

  const [count, setCount] = useState(0)
  function add(){
    setCount(count + 1)
  }
  return (
    <div>
    <Header/>
    <Meme/>
    </div>
  );
}

export default App;



// 5:57:00-timestamp

