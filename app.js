const person = {
  firstName: 'Rashed',
  lastName: 'Qazizada',
  age: 30,
  email: 'email@email.com',
  hobbies: ['music', 'sports'],

  address: {
    city: 'Växjö',
    state: 'Kronoberg'
  },
  getBirthYear: function () {
    return 2020 - this.age;
  }
}
let val;
val = person;
// get specific value
val = person.firstName;
console.log(val);
val = person['lastName'];
console.log(val);
val = person.age;
console.log(val);
val = person.hobbies[1];
console.log(val);
val = person.hobbies;
console.log(val);
val = person.address.state;
console.log(val);
// or
val = person.address['city'];
console.log(val);
val = person.getBirthYear();
console.log(val);

const people = [
  { name: 'Rashed', age: 32 },
  { name: 'Adam', age: 34 },
  { name: 'Munish', age: 27 },
];
for (let i = 0; i < people.length; i++) {
  console.log(people[i].name + ' ' + people[i].age);
}
