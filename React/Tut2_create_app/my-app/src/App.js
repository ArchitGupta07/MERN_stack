import React from "react";
import Navbar from "./components/Navbar";
// import Main from "./components/Main";
import Hero from "./components/Hero";
import Card from "./components/Card";
import ReactTips from "./components/ReactTips";
import Contact from "./components/Contact";
import img from "./images/card.jpg"


export default function App() {
    return ( // we can return only a single elements so wrap everything in div or <>

        <div className="container">
            <Navbar />
            <Hero/>
            <Card/>
            <ReactTips/>
            <Contact img={img} name="Card"
            phone="123456" email="card@gmail.com"
            />
            
        </div>

        


    )
}


// 3:26:37  -- time stamp