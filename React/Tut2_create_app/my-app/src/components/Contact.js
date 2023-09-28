import React from "react";

export default function Contact(props) { 
    // i could have destructure props like Contact({img, name, phone, email}) 
  return (
        
        
        <div className="contact-card">
        <h1>Card</h1>
        <img src={props.img} alt="" />
        <h3>{props.name}</h3>
        <div className="info-group">
        <p>{props.phone}</p>

        </div>
        <div className="info-group">
        <p>{props.email}</p>
        </div>
        
        </div>
    )
};



// you can change the name of the destructured props