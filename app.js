let val;

// Number to string
val = 5;
// output
console.log(val);
console.log(typeof val);
// val.length works if the type is string
console.log(val.length);
// Number to String
val = String(55);
val = String(4 + 4);
// bool to string
val = String(true);

// date to string
val = String(new Date);
// array to string
val = String([1, 2, 3, 4, 5]);


// OR
val = (5).toString();
val = (true).toString(),
  // output
  console.log(val);
console.log(typeof val);
// val.length works if the type is string
console.log(val.length);

// String to number
let num = '5';
console.log(num);
// console.log(num.toFixed(2));
console.log(typeof num);
console.log(num.length);
console.log('------------------')
num = Number('5');
console.log(num);
num = Number(true);
num = Number(false);
num = Number(null);
num = Number('Hello');
num = Number([1, 2, 3, 4]);
console.log(typeof num);
console.log(num);
console.log(num.length);
console.log(num.toFixed(3));
// NaN: Not a number
console.log('------------------')
num = parseInt('100.30');
num = parseFloat('100.30');
console.log(typeof num);
console.log(num);
console.log(num.toFixed(3));



