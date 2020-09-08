








































/*
Primitive data types: Stored directly in the location the variable access. Stored on the stack
String, Number, Boolean, Null, Undefined, Symbols(ES6)

Reference Data Types: Accessed by reference.
Object that are stored on the heap
A pointer to a location in memory.
Arrays, object leterals, Functions, Dates....
*/
// Primitive
// String
const name = 'Rashed';
// numbers
const age = 32;
console.log(typeof name);
console.log(typeof age);
// boolean
const hasKids = true;
console.log(typeof hasKids);
//Null
const car = null;
console.log(typeof car);

// undefined
let test;
console.log(typeof test);
// symbol
const sys = Symbol();
console.log(typeof sys);

// Reference Type

// Array
const hobbies = ['movies', 'musice'];
console.log(typeof hobbies);

// object literal
const address = {
  city: 'Växjö',
  state: 'kronoberg'
}
console.log(typeof address);
const today = new Date();
console.log(today);
console.log(typeof today);
