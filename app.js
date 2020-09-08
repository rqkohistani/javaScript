const name = 'Rashed';
const age = 32;
const job = 'Student';
const uni = 'linnaeus';
let html;
// without templete string (ES5)
html = '<ul><li>Name: ' + name + '</li><li>Age: ' + age + '</li><li>job: ' + job + '</li><li>University: ' + uni + '</li></ul>';

// OR
html = '<ul>' +
  '<li>Name: ' + name + ' </li>' +
  '<li>Age: ' + age + ' </li>' +
  '<li>Job: ' + job + ' </li>' +
  '<li>University: ' + uni + ' </li>';
'</ul>'

function hello() {
  return 'Hello';
}
// with template strings ES6
// html=``
html = `
  <ul>
  <li>Name: ${name}</li>
  <li>Age: ${age}</li>
  <li>job: ${job}</li>
  <li>University: ${uni}</li>
  <li>${4 + 4}</li>
  <li>${hello()}</li>
  <li>${age > 31 ? 'Over 30' : 'Under 30'}</li>
  </ul> 
  `;



document.body.innerHTML = html;