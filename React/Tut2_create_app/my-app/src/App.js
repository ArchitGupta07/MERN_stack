import React from "react";
import Navbar from "./components/Navbar";
// import Main from "./components/Main";
import Hero from "./components/Hero";
import Card from "./components/Card";
import ReactTips from "./components/ReactTips";


export default function App() {
    return ( // we can return only a single elements so wrap everything in div or <>

        <div className="container">
            <Navbar />
            <Hero/>
            <Card/>
            <ReactTips/>
            
        </div>



    )
}


// 3:05:37  -- time stamp