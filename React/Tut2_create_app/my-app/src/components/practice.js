const names = ["alice", 'bob', "charlie","daniel"]

const uppercase = names.map((item)=>{
    return item[0].toUpperCase() + item.slice(1)
})
console.log(uppercase)

const pokemon = ["Bulbasaur", "Charmander","Squirtle"]

const elements = pokemon.map((poki)=>{ // explicit return
    return `<p>${poki}</p>`  // you have to put them in ` ` (very important)
})

// Another method of above code
const elements2 = pokemon.map((poki)=>`<p>${poki}</p>`) //arrow can implicit return like this

console.log(elements)
