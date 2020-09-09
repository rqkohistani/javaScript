// FUNCTION DECLARAIONS

function greet(firstName = "defualt", lastName = 'Default') {
  return 'Hello ' + firstName + ' ' + lastName;
}

console.log(greet());
console.log(greet('Rashed', 'Qazizada'));
// overwritting the default values

// FUNCTION EXPRESSIONS
// default value
// const square = function (x = 3) {
const square = function (x) {
  return x * x;
};
console.log(square(2));

// PROPERTIES METHOD
const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit todo ${id}`);
  }
}
// can be added an object here too
todo.delete = function () {
  console.log(`Delete todo...`);
}
todo.add();
todo.edit(22);
todo.delete();