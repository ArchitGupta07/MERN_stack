import './App.css';

function App() {

  const [squares, setSquares]  = React.useState(boxes)

  function toggle(id){
    setSquares(prevSquares => {
      return prevSquares.map((square)=>{
          return square.id === id ? {...square, on: !square.on}: square

      })
      
    })
  }
  return (

    <>

    </>
    
  );
}

export default App;


// 7:45:15
