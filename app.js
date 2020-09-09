// WINDOW METHODS / OBJECTS / PROPERTIES

// ALERT
// window.alert('Hello world!');

// PROMPT
// const input = prompt('Type your name');
// alert(input + ' has been stored in RAM ');

// CONFIRM
// confirm('Press ok or cancel');

// if (confirm('ok for Good morning, cancel for good evening')) {
//   console.log('Good morning');
// } else {
//   console.log('good evening')
// }

// to get the size the window for some interactive applications
let val;
// Outer height and width 
// resize chrome browser you will see the outerheight 
// Mostly used for an even when a screen size thi 600 then we use these properites

// This is outer
val = window.outerHeight;
val = window.outerWidth;

// this is inner 
val = window.innerHeight;
val = window.innerWidth;


// Location object
// val = window.location;
// val = window.location.hostname;
// val = window.location.host;
// val = window.location.port;
val = window.location.href;


// Redirect
// window.location.href = 'http://google.com';

// RELOAD
// window.location.reload();

// HISTORY OBJECT
// VISIT FEW WEBSITE AND THEN USE -1 -2 TO GO BACKWARDS AND SO ON
// window.history.go(-2);
//  to check how many website are behind us

val = window.history.length;

// Navigator Object

val = window.navigator;
val = window.navigator.geolocation;
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.languages;
val = window.navigator.language;



console.log(val);
