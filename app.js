let day;
switch (new Date().getDay()) {
  case 0:
    day = 'Sunday';
    break;
  case 1:
    day = 'Monday';
    break;
  case 3:
    day = 'Tuesday';
    break;

}
// let val = new Date().getDay();
// console.log(val)
console.log(new Date().getDay());
console.log(`Today is ${day}`);