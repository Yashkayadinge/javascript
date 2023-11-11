//primitive and non primitive 

//7 types string,numbers , boolean , null, undefined ,
// symbol (value ko unique banane ), BigInt(to use large values) 

// reference (NON primitives)
//Array,Objects, Function
// 
const score =Symbol( '1888');
const scoreValue =Symbol('1888')// this wont be savved again not to do after 
console.log(score==scoreValue);
const heros= ["shaktiman","nagar","shiva"];
let myobj={
    name:"yash",
    age:22
}
console.log(myobj)
