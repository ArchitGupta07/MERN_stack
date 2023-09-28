import React from "react";
import bnb from "../images/bnb.jpg"


export default function Hero(){
    return(
        <section className="hero">
        <img className="hero--photo" src={bnb} alt="" />
        <h1 className="hero--header">Online Experiences</h1>
        <p className="hero--text"> Join unique interactive activities lead by one of a kind hosts-all without leaving home</p>

        </section>
    )
}