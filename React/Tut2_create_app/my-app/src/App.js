import React from "react";
import Navbar from "./components/Navbar";
// import Main from "./components/Main";
import Hero from "./components/Hero";
import Card from "./components/Card";
import ReactTips from "./components/ReactTips";
import Contact from "./components/Contact";
import img from "./images/card.jpg"
import Joke from "./components/Joke";



export default function App() {
    return ( // we can return only a single elements so wrap everything in div or <>

        <div className="container">
            <Navbar />
            <Hero/>
            <Card img="card.jpg" rating={5.0} reviewCount = {6}
            country = "India" title="Life Lessons" price = {100}/>
            <ReactTips/>
            <Contact img={img} name="Card"
            phone="123456" email="card@gmail.com"
            />

            <Joke setup = "Knock Knock"
            punchline="KGB waits for no-one"/> 
            <Joke setup = ""
            punchline="who"/> 
            
        </div>

        


    )
}


// 3:26:37  -- time stamp