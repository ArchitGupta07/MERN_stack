import React from "react";


export default function ReactTips() {

    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if(hours<12){
        timeOfDay = "Morning"
    }else if (hours>=12 && hours<17){
        timeOfDay = "Afternoon"

    }else{
        timeOfDay="night"
    }

    return(
        
        <h1>Good {timeOfDay}</h1> //  this is how you can use javascript code inside your html


    )
    
};
