// primitive

// 7 types : String, Number, Boolearn, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = symbol('123')

console.log(id === anotherId);

//const bigNumber = 3424567453323456189n




// Reference (Non primitive)

// Array, Objects, Fuctions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "vinay",
    age: 18,
}

const myFunction = function(){
    console.log("hello world");
}

console.log(typeof myFunction);