ReactDOM.render(<h1>Hello Everyone</h1>, document.getElementById('root')) //first parameter is to tell what to put, and second parameter is to tell where to put


ReactDOM.render(<p>My name is Archit</p>, document.getElementById('root'))
//note that when you use ReactDOM.render, it replaces the content of the target element with the new JSX element you provide.
// In the end, only the content rendered by the second ReactDOM.render call will be visible because it overwrites the content rendered by the first call.

ReactDOM.render(
    <div>
      <h1>Hello Everyone</h1>
      <p>My name is Archit</p>
    </div>,
    document.getElementById('root')
  ); // to render both of them 


//   =================================================================================
//   =================================================================================

// Create your own React Components

  function Navbar(){
    return (
        <h1>this is Navbar</h1>
    )
  }
  function MainComponent(){
    return (
        <h3>this is Body</h3>
    )
  }


  ReactDOM.render(
    <div>
        {/* <h1>Hello</h1> */}
        <Navbar/>
        <MainComponent/>
    </div>,
    document.getElementById('root')
  );

//   =================================================================================
//   =================================================================================

// Different between React and vanilla JS is they are declarative and imperative respectively
// Declarative is tell the computer what to do and it will figure it out own its own
// imperative is to tell the computer how to do it step by step.

ReactDOM.render(<h1>Hello Everyone</h1>, document.getElementById('root')) 

// lets convert the above line of code in vanilla JS

const h1 = document.createElement('h1')
h1.textContent = "This is an imperative way to program. This is coming from Vanilla Js"
h1.className = "header"
document.getElementById("root").append(h1)


//   =================================================================================
//   =================================================================================

//JSX

const element  = <h1 className='header'>This is JSX</h1>
console.log(element) //look whats its giving
/*$$typeof: Symbol(react.element) 
key:null
props:{className: 'header', children: 'This is JSX'}
ref:null
type:"h1"
_owner:null*/

ReactDOM.render(element,document.getElementById('root'))


//38.03 timestamp :-  https://www.youtube.com/watch?v=bMknfKXIFA8


//   =================================================================================
//   =================================================================================



//   =================================================================================
//   =================================================================================





//   =================================================================================
//   =================================================================================  
