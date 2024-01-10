import React from "react";


export default function Things(){


    const [thingsArray, setThingsArray] = React.useState(["Thing 1 0", "Thing 2"])

    function addItem(){

        // thingsArray.push() // this is wrong as we should never never try to directly modify our state
        number = thingsArray.length


        setThingsArray(prevState => [...prevState, `Things ${number + 1}`])

    }

    const thingsElements = thingsArray.map(thing => <p key = {thing}>{thing}</p>)


    return(

        <div>
            <button onClick={addItem}>Add item</button>
            {thingsElements}
        </div>

    )
}