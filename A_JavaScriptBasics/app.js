// Global Scope

// var a = 1;
// let b = 2;
// const c = 3;

// function test() {
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Function Scope", a, b, c);
  // These are separate variables then the global scope
// }
// test();


// if (true) {
//   // Block Scope
//   var a = 4;
//   let b = 5;
//   const c = 6;
//   console.log("Block (if) Scope", a, b, c);
  // we see that withing  the if statement the var a has been changed however let and const remian the same in the global scope
  // just get it right never use var

// }


// for (let a = 0; a < 10; a++) {
//   // console.log(`Loop:  ${a}`);//string
//   console.log('loop',a)// number
// }

// using var
// for (var a = 0; a < 10; a++) {
//   console.log(`Loop:  ${a}`);
//   // see the global var value has been changed 
// }

// console.log("Global Scope", a, b, c);
// Let and Const have block level scope and
// var has fucntion level scope
//****************************
/**
 * Funtion statementes and expressions
 */
//fucntion declaration
// function whatDoYouDo(job, firstName){}

// function expression

// const whatDoYouDo=function(job,firstName){
//   switch(job){
//     case 'teacher':
//     return firstName + ' teaches kids how to code';
//     case 'driver':
//       return firstName+ ' drive a cab in vaxjä'
//       default: 
//       return firstName+' does something else'
//   }
// }
// console.log(whatDoYouDo('teacher', 'Rashed'))
// console.log(typeof whatDoYouDo)
//****************************
// initialize new array

// let names=['john', 'mark', 'jane',1988,false];
// let years=new Array(2000,1988,1999);

// console.log(names)
// for(let i =0; i<names.length;i++){
//   if(typeof names[i]!== 'string'){
//     continue;
//   }

//   console.log('Typeof String',names[i])
// }


// //different data types

// let john =['john', 'smith', 1900, 'teacher']
// john.push('blue')// end of the array
// console.log(john)
// john.splice(2)
// john.unshift('Mr')
// john.pop()
// console.log(john)
//****************************
//Objects and properties
//object literal
// let john= {
//   firstName:'john',
//   lastName: 'Smith',
//   birithday: 1990,
//   family: ['jane', 'mark', 'bob'],
//   job:'teacher',
//   car:{
//     toyota:'china',
//     bmw:'germany',
//     audi:{
//       audi:{
//         series:{a:{b:{c:'congratulation'}}}
//       }
//     }
//   }
// }
// console.log(john)
// console.log(john.family)
// console.log(john.car.bmw)
// console.log(john.car.audi.audi.series.a.b.c)

//new object systax
// let jane=new Object();
// jane.firstName='jane';
// jane.lastName='smith'
// console.log(jane)
// log=console.log;
// log(jane)

//****************************
/**
 * Object and methods
 */

//  let john= {
//     firstName:'john',
//     lastName: 'Smith',
//     birithday: 1988,
//     family: ['jane', 'mark', 'bob'],
//     job:'teacher',
//     calcAge:function(){
//       // return 2021 - this.birithday;
//       this.age=2021 -this.birithday;
//       //OR
//       return this.age;
//     }
//  }
//  console.log(john.calcAge())
//adding a field
// john.age=john.calcAge();
// john.calcAge()
// console.log(john.age)

//****************************
//challenge

let john= {
  fullName:'john smith',
  bills: [124,48,268,180,42],
  // tips:[],
  // finalValues:[],
  calcTips:function(){
    this.tips=[]//creates tips [] on run time
    this.finalValues=[]
    for(let i =0; i <this.bills.length;i++){
      let percentage;
      let bill=this.bills[i]
      if(bill<50){
        percentage=.2;
      } else if(bill>=50 && bill <=200){
        percentage=.15
      }else {
        percentage=.1
      }
      //add results to the corresponding arrays
      this.tips[i]=bill * percentage;
      this.finalValues[i]=bill + bill *percentage;
    }
  }
}
john.calcTips()
console.log(john)
console.log('initial values ', john.bills)
console.log(john.tips)
console.log(john.finalValues)