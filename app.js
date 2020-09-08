// var, let , const

var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);
// initialize var
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);
// LET
let secondName;
secondName = 'Rashed';
console.log(secondName);

// CONST
const firstName = 'Adam';
console.log(firstName);
// Have to asign a value.
// const greet;

const person = {
  name: 'D-building',
  age: 32,
}
console.log(person);
person.name = 'Rashed',
  person.age = 30,
  console.log(person);
// you can see that we could change the name 
// it is the object name person that cannot be
//reassigned . not the contents inside.

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);
numbers.push(6);
// we can add elements inside however we cannot
numbers = [7, 8, 9];


