// Global Scope

var a = 1;
let b = 2;
const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Function Scope", a, b, c);
//   // These are separate variables then the global scope
// }
// test();


// if (true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Block (if) Scope", a, b, c);
//   // we see that withing  the if statement the var a has been changed however let and const remian the same in the global scope
//   // just get it right never use var

// }


// for (let a = 0; a < 10; a++) {
//   console.log(`Loop:  ${a}`);
// }

// using var
for (var a = 0; a < 10; a++) {
  console.log(`Loop:  ${a}`);
  // see the global var value has been changed 
}

console.log("Global Scope", a, b, c);
// Let and Const have block level scope and
// var has fucntion level scope