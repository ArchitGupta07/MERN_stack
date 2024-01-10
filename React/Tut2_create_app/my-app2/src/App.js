
import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {

  const [count, setCount] = useState(0)  //important
  function add(){
    setCount(count + 1)  // works but not a good practice

    // below LOC  is for good practice 

    setCount(function(){   
      return count+1
    })

    // OR

    setCount(function(oldvalue){
      return oldvalue + 1
    })

    //OR 

    setCount(prevCount => prevCount + 1)  // here prevCoun represents the old value and react knows that as its inside setCount
  }

  function subtract(){
    setCount(count-1)
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

