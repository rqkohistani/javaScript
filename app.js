// if-statements


let id = 100;
// EQAUL TO
if (id == 100) {
  console.log('CORRECT');
} else {
  console.error('INCORRECT');
}

// NOT EQUAL TO
if (id != 101) {
  console.log('CORRECT');
} else {
  console.log('Incorrect');

}
// EQAUL TO VALUE AND TYPE
// mostly used === 
id = '100';
if (id === 100) {
  console.log('CORRECT Type and value');
  console.log(typeof id);
} else {
  console.log('INCORRECT ');
  console.log(typeof id + ' type, it should be a number');
}

// // const testId = 1100;
// if (testId) {
//   console.log(`The ID is ${testId}`);
// }
// else {
//   console.log('NO ID');
// }
//TO TEST IF SOMETHING IS UNDEFINED OR IF IT IS NOT THERE AT ALL THEN YOU SHOULD USE THIS.
// TEST IF UNDEFINED
if (typeof noVariableDefined !== 'undefined') {
  console.log(`The ID is ${noVariableDefined}`);
} else {
  console.log('NO ID FOUND');
}
const name = 'Rashed';
const age = 32;
if (age <= 28 && age >= 60) {
  console.log(`${name} is under age`);
} else {
  console.log(`${name} is valid age`);
}
// OR || && works a like java
console.log(name === 'Rashed' ? 'CORRECT' : 'INCORRECT');
