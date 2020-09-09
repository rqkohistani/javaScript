// LOOPS IN JAVASCRIPT WORKS AS JAVA

// LOOP THROUGH ARRAY
const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

console.log('---------------------')

// FOREACH LOOP 

const cars2 = ['Ford', 'Chevy', 'Honda', 'Toyota'];
// cars2.forEach(function (car) {
//   console.log(car);

// cars2.forEach(function (car, index) {
//   console.log(`${index}: ${car}`);

cars2.forEach(function (car, index, array) {
  // console.log(`${index}: ${car}`);
  console.log(array);
});
console.log('---------------------')
const users = [
  { id: 1, name: 'Rashed' },
  { id: 2, name: 'Adam' },
  { id: 3, name: 'Munish' },
];
console.log(users[0]);
users.forEach(function (user) {
  console.log(user);
});
console.log('---------------------')
users.forEach(function (user, index) {
  // console.log(user);
  // console.log(`${index}: ${user}`);
  console.log(`${index}: ${user.id} ${user.name}`);

});
console.log('---------------------')

// MAP
const cutomers = [
  { id: 100, name: 'D-building' },
  { id: 200, name: 'F-building' },
  { id: 300, name: 'N-building' },
];

// Just taking the ids of customers to create another array ids
// map();

const ids = cutomers.map(function (customer) {
  return customer.id;
});
console.log(ids);

console.log('---------------------')
// FOR IN LOOP
// USED FOR OBJECTS
const user = {
  firstName: 'John',
  lastname: 'Doe',
  age: 40,
};
// for let x in user
for (let x in user) {
  // x gonna give us the keys inside the object user we have a key and valule so x gives us the key
  // console.log(x);

  //  getting the object
  console.log(`${x} : ${user[x]}`);
}