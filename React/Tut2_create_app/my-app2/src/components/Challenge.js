import React from "react";

export default function Challenge(){

    const [isGoingOut, setIsGoingOut] = React.useState(true)

    function changeMind(){
        setIsGoingOut(prevState => !prevState)
    }

    return(

        <div>
            <h1>Do I feel like going out tonight ?</h1>
            <div onClick={changeMind}>
                <h1>{isGoingOut ? "Yes" : "No"}</h1>
            </div>
        </div>
    )
}