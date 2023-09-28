export default function DoSomething(){

} //normal functions





//Arrow functions
export const DoSomething = () =>{

}



const MyComponents = () => {
    return <div></div>
}



//example of annonimous function
<button onClick = {()=> {
    console.log("Hello world")
}}>
//inside this onClick we have defined a anonymous function which will run whenever we will click on the button
</button>



// =================================================================================================================================================================================

//Conditionals particularly useful for react

//lengthy approach 
if(true){

}

//smart approach(ternary operators)

let age = 16;
let name = age>10 || "Pedro" ;  // this is if statement in short

let status = age >18 ? "adult" : "minor";  //this is if else statement where it says if age>18 then adult otherwise minor


//=================================================================================================================================================================================

//Objects

const person = {
    name:"Archit",
    age:20,
    graduated: false
};

const name1 = person.name
const age1 = person.age
const status1 = person.graduated

//but this is taking too much of time so we will use destructuring the objects

const{name2, age2, status2} = person; //very useful

//we can also declare objects using following

const name4 = "Archit"
const age4 = "22"

const person2 = {
    name4,
    age4,
    graduated:false
};

//next thing we need to learn is "..."

const person3 = {
    name:"Archit",
    age:20,
    graduated: false
};

const person4 = {...person3, name:'Aastha'}
//here i am saying i want everything from person3 by using ... but i want name to be 'aastha'
//extremely useful

//Another usecase of ... is while using array
const names = ['Archit', 'Aastha', 'Deep'];
const names2 = [...names, "Dev"]; // all the names from names array but also add dev

//=================================================================================================================================================================================

// Map, Filter functions  " Very Important"

let names1 = ['Archit', 'Aastha', 'Deep'];

//let say we want to do something to all the elements in the array

names1.map((name) => {
    
    console.log(name); //print the element

    return "Joe" // change all the elements to 'Joe

    return name + '1' // add 1 at the element of all the elements

    return <h1>{name}</h1> // helpfull is react 

}) //inside this map function we defined a anonynous fuction. map functions helps us to iterate through the array and to use this anonymous fucntion on them
//here name represents any single element of the array. you can name it anything


//filter function

let mynames = ['Archit', 'Aastha', 'Deep', 'Dev', 'Ekansh']

mynames.filter((name) => {

    return name !=='Archit'

}) //put return to set a condition and if its true it will return


// =================================================================================================================================================================================


//Async + Await + Fetch








