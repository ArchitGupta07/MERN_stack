// import React from 'react'
// import ReactDOM from 'react-dom'

// const React = require("react");




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

function Navbar() {
  return (
    <h1>this is Navbar</h1>
  )
}
function MainComponent() {
  return (
    <h3>this is Body</h3>
  )
}


ReactDOM.render(
  <div>
    {/* <h1>Hello</h1> */}
    <Navbar />
    <MainComponent />
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

const element = <h1 className='header'>This is JSX</h1>
console.log(element) //look whats its giving
/*$$typeof: Symbol(react.element) 
key:null
props:{className: 'header', children: 'This is JSX'}
ref:null
type:"h1"
_owner:null*/

ReactDOM.render(element, document.getElementById('root'))


//38.03 timestamp :-  https://www.youtube.com/watch?v=bMknfKXIFA8


//   =================================================================================
//   =================================================================================
// pracice 

const navbar = (
  <nav>
    <h1>Heading</h1>
    <ul>
      <li>Home</li>
      <li>contacts</li>
      <li>About</li>
    </ul>

  </nav>
)

ReactDOM.render(navbar, document.getElementById('root'))


//   =================================================================================
//   =================================================================================

//Use of append() instead of ReactDOM. lets see what happens


const page = (
  <div>
    <h1>Awesome</h1>
    <h3>Reasons for being awesome</h3>
    <ol>
      <li>Composable </li>
      <li>Declarative</li>
      <li>Hireable skill</li>
    </ol>
  </div>
)

document.getElementById('root').append(JSON.stringify(page))

//proper way in react

ReactDOM.render(page, document.getElementById('root'))





//   =================================================================================
//   =================================================================================  
// Note:- JSX is almost identical to HTML 


//Challenge

const page1 = (
  <div>
    <h1>Testing</h1>
    <img src=""></img>
    <ul>
      <li>Home</li>
      <li>contacts</li>
      <li>About</li>
    </ul>


  </div>
)


ReactDOM.render(page1, document.getElementById('root'))





  //   =================================================================================
  //   =================================================================================  
  //  Quick Quiz Questions

  // 1. Why do we need to "import React from 'react" in our files ?
  //  Ans. in order to use jsx we need react

  // 2. If I were to console.log(page) in index.js, what would show up?

  // 3. What's wrong with this code:
//   ```
//  const page = (
//   <h1>Hello</h1>
//   <p>How are you ?</p>
//  )
//  ```

//  ans. They need to be under single parent element

//  4. What does it mean for something to be "Declarative" instead of "imperative" ?

//  5. What does it mean for something to be "composable" ?
// Ans. We have small pieces that we can put together to make something larger/ greater than the individual pieces




//   =================================================================================
//   ================================================================================= 


function Reasons() {
  return (
    <div>
    <h1>Reasons</h1>
    {/* <img src=""></img> */}
    <ul>
      <li>Wow Home</li>
      <li>contacts</li>
      <li>About</li>
    </ul>


  </div>
  )
}


ReactDOM.render(<Reasons />, document.getElementById('root'))



//   =================================================================================
//   =================================================================================
// Quiz2 : there is a pic

// What is a React component ?
// Ans:- A function that returns react element. (UI)

// note any components need to use pascal case eg. MyComponents


//   =================================================================================
//   =================================================================================

function Header(){
  return(
    <header>
      <nav>
        Header
      </nav>
    </header>
  )
}

function Footer(){
  return(
    <footer>
      done with the footer
    </footer>
  )
}


function Page2(){

  return (
    <div>

 <Header/>  {/*  //point to learn here */}

    <h1>Reasons</h1>
    {/* <img src=""></img> */}
    <ul>
      <li>Wow Home</li>
      <li>contacts</li>
      <li>About</li>
    </ul>


    <Footer/> 

  </div>
  )

}

ReactDOM.render(<Page2/>, document.getElementById('root'))

//   =================================================================================
//   =================================================================================  
