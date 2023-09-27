import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";


export default function App() {
    return ( // we can return only a single elements so wrap everything in div or <>

        <div className="container">
            <Navbar />
            <Main />
        </div>



    )
}