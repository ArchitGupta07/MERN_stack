import React from "react";
import memesData from "./memesData";

export default function Meme(params) {


    function getMemeImage(){
        console.log(memesData.data)
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
        // const {url} = memesArray[randomNumber] we can also write the above LOC using this de-structuring approach
        console.log(url)

    }
    return(
       <main>
        <div className="form" action="">
        <input className="form--input" type="text" 
        placeholder="top text"/>
        <input className="form--input" type="text" placeholder="bottom text" />
        <button className="form--button" onClick={getMemeImage} >Get a new meme image</button> 
        {/* dont use paranthesis like getMemeImage() inside onclick as react will run the function as soon as you load the page . use only the name getMemeImage as a value */}


        

        </div>
       </main>
    )    
};
