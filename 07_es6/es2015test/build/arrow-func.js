'use strict';

var TEST1 = function TEST1(a, b) {
  return a + b;
};

var TEST2 = function TEST2(a, b) {
  return a + b;
};

var TEST3 = function TEST3(a, b) {
  return a + b;
};

console.log(TEST1(1, 2));
console.log(TEST2(1, 2));
console.log(TEST3(1, 2));

function Person(name, yearCount) {
  var _this = this;

  this.name = name;
  this.age = 0;
  var ME = this;

  // var addAge = function() {
  //   ME.age++;
  // };

  var addAge = function addAge() {
    return _this.age++;
  };

  for (var i = 1; i <= yearCount; i++) {
    addAge();
  }
}

var p1 = new Person('홍길동', 20);
console.log(p1.name + '님의 나이 : ' + p1.age);