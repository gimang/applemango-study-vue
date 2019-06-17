"use strict";

var msg = 'GLOBAL';

function outer(a) {
  var msg = "OUTER";
  console.log(msg);

  if (true) {
    var _msg = "BLOCK";
    console.log(_msg);
  }

  var innerVar = 'inner';
}

// innerVar is not defined 에러 발생
// console.log(innerVar);

var var1 = 'var1';
var1 = 'var1-1';

var array1 = ['a', 'b', 'c'];
console.log(array1);

array1.pop();
console.log(array1);

array1.push('d');
console.log(array1);

var person = {
  name: '운동남',
  age: 25
};

console.log(person);

person.name = '찰스';
console.log(person);