import React from "react";

export default function Joke(props){

    return(
        <div>
        {props.setup && <h1>Setup:{props.setup}</h1> } 
        {/*Conditional rendering in above line of code*/}
        {/*We can also write it as below LOC*/}

        <h1 style={{display: props.setup?"block":"none"}}>setup 2:{props.setup}</h1>


        
        <p>Punchline:{props.punchline}</p>
        <hr/>
        </div>
    );
  
};



