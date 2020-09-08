// create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 33, 76, 54);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, { a: 1, b: 1 }, new Date()];
console.log(numbers);
console.log(numbers2);
console.log(mixed);
console.log('------------------');
let val;

// Get array lenght
val = numbers.length;
console.log('array length: ' + val);
// check if is array
val = Array.isArray(numbers);
console.log(val);
// Get single value
val = numbers[2];
console.log(val);
// insert into array
numbers[2] = 10000;
console.log(numbers);
// find index of value
val = numbers.indexOf(10000);
console.log(val);
// Muttaing arrays
// add on o font
numbers.push(500);
numbers.unshift(200);
console.log(numbers);
console.log('-------------------');
// take off from end
numbers.pop();
// take off from front
numbers.shift();
console.log(numbers);
// splice values just take from start index to end index
numbers.splice(0, 2);
console.log(numbers);
numbers.reverse(numbers);
val = fruit.sort();
console.log(val);
console.warn('sort() funstion does not work as string sort() we need do some cool here');
// user the compare function
val = numbers.sort(function (x, y) {
  return x - y;
}
);
console.log(val);
// Reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
});
console.log(val);
