import React from "react";
import Navbar from "./components/Navbar";
// import Main from "./components/Main";
import Hero from "./components/Hero";
import Card from "./components/Card";
import ReactTips from "./components/ReactTips";
import Contact from "./components/Contact";
import img from "./images/card.jpg"
import Joke from "./components/Joke";

import jokesData from "./components/jokesData";
import cardData from "./components/card_data";




export default function App() {



    const cards = cardData.map((card)=>{

        return(

            <>
            
            <Card key={card.id}  img2 ={img} rating={card.stats.rating} reviewCount = {card.stats.reviewCount} country = "India" title={card.title} price = {card.price} openSpots = {card.openSpots} />   // first card component

            //we can pass arguments like this also
            <Card card={card}/> // now in the card.js page we need to use props.card.whatever we need


            //we can also use below code
            <Card {...card}/> // this is equal to the first <Card/> component. we can use props.img, props.title in card.js
            //this ... gives data just like first card component gives seperately unlike second card component


            </>
            
            )

    });


    const jokeElements = jokesData.map((joke)=>{
        return <Joke setup={joke.setup}  punchline={joke.punchline} />
    })





    return ( // we can return only a single elements so wrap everything in div or <>


        <div className="container">
            <Navbar />
            <Hero/>


            <Card img="card.jpg" rating={5.0} reviewCount = {6} country = "India" title="Life Lessons" price = {100}/>


            <ReactTips/>


            <Contact img={img} name="Card"
            phone="123456" email="card@gmail.com"
            />

            <Joke setup = "Knock Knock" punchline="KGB waits for no-one"/> 
            <Joke setup = "" punchline="who"/> 

            {/*second method to use Joke.js */}
            {jokeElements}


            <section className="cards-list">
            
            {cards}
            
            </section>


            
        </div>

        


    )
}


// 4:36:00  -- time stamp