import React from "react";

export default function Conditonal_rendering(params) {


    const [isShown, setIsShown] = React.useState(false)

    function toggleShown(){
        setIsShown(preState => !preState)
    }
    return(
        <div>
            {props.setup && <h3>{props.setup}</h3> }
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>


            {/* terniary  */}

            {
                messages.length === 0 ? 
                <h1>You're all caught up !</h1> :
                <h1>You have {messages.length} unread  {messages.length > 1 ? "messages" : "message" } </h1>

            }
        </div>
    )
};
