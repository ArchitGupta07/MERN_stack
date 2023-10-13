


const [count, setCount] = React.useState(0)


// Note:- if you ever need the old value of state to help 
// you determine the new value of state, you should pass a
// callback function to your state setter funciton instead of 
// using state directly. this callback fucniton will 
// recieve the old value of state as its parameter, which you can then use to determine your new value of state.

function add(){
    setCount(function(oldValue){
                return oldValue + 1
             }) 
            //  better practice  // old value is default parameter of the fucntion inside the set function

}
function add(){
    setCount(prevCount => prevCount + 1) //better practice more compact// prevCount automatically gets the count value 
}
function add(){
    setCount(count + 1) // not a good practice
}



// =================================================
// =================================================
// =================================================