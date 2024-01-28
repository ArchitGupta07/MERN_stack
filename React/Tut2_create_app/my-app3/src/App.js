import './App.css';
import Header from './components/Header';
import Body from './components/Body';
import { useState } from 'react';

function App() {


  const [user, setUser] = useState('Joe')
  return (
    <>
    <Header user = {user}/>
    hello

    <Body user = {user}/>
    </>
   
  );
}

export default App;


// 7:22:00
