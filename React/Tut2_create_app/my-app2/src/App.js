
import './App.css';
import Header from './components/Header';
import Meme from './components/Meme';

function App() {

  const [count, setCount] = React.useState(0)
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



// 5:51:00-timestamp

