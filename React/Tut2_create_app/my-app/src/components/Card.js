import React from "react";
import card from "../images/card.jpg";

export default function Card(){
    return (
        <div className="card">
        <h1>Card content</h1>
        <img className="card--image" src={card} alt="" />
        <div className="card--stats">
        <img src="" alt="" />
        <span>5.0 </span>
        <span className="gray">(6) o </span>
        <span className="gray">India</span>
        </div>
        <p>react lessons with card</p>
        <p><span className="bold">from $100</span>/person</p>
        </div>
        )
}