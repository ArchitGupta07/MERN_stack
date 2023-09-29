import React from "react";


export default function Card(props){
    
    return (

        <div className="card">
        <h1>Card content</h1>
        <img className="card--image" src={`../images/${props.img}`} alt="" />
        <div className="card--stats">
        <img src="" alt="" />
        <span>{ props.rating }  </span>
      
        <span className="gray">{props.reviewCount} o </span>
        <span className="gray">{props.country}</span>
        </div>
        <p>{props.title} with card</p>
        <p><span className="bold">from ${props.price}</span>/person</p>
        </div>
        )
}