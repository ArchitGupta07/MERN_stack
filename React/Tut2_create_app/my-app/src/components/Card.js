import React from "react";


export default function Card(props){

    let badgeText
    if(props.openSpots===0){
        badgeText = "SOLD OUT"

    }else{
        badgeText = "ONLINE"
    }
    
    return (

        <div className="card">
    

        {props.openSpots===0 && <div className="card--badge">Sold</div> }
        {badgeText && <div className="card--badge">{badgeText}</div> }
        <img className="card--image" src={`../images/${props.img}`} alt="" /> 
        <img className="card--image" src={props.img2} alt="" /> 
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