ReactDOM.render(<h1>Hello Everyone</h1>, document.getElementById('root')) //first argument is to tell what to put, and second argument is to tell where to put


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
