import React from "react";
import Navbar from "./components/Navbar";
// import Main from "./components/Main";
import Hero from "./components/Hero";
import Card from "./components/Card";


export default function App() {
    return ( // we can return only a single elements so wrap everything in div or <>

        <div className="container">
            <Navbar />
            <Hero/>
            <Card/>
            
        </div>



    )
}


// 2:43:57  -- time stamp