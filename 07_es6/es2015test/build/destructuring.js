'use strict';

// Destructuring Array
var arr = [10, 20, 30, 40];

// ES5
var a1 = arr[0],
    a2 = arr[1];
a3 = arr[2];

console.log(a1, a2, a3);

// ES6
var b1 = arr[0],
    b2 = arr[1],
    b3 = arr[2];

console.log(b1, b2, b3);

// Destructuring Object
var obj = {
  name: '운동남',
  age: '30',
  address: '서울'
};

var name = obj.name,
    age = obj.age;

// 다른 변수 이름으로 할당받기

var myName = obj.name,
    myAge = obj.age;


console.log(name, age, myName, myAge);

// 함수의 파라미터에서 사용
function addContact(_ref) {
  var name = _ref.name,
      mobile = _ref.mobile,
      _ref$home = _ref.home,
      home = _ref$home === undefined ? '없음' : _ref$home,
      _ref$address = _ref.address,
      address = _ref$address === undefined ? '없음' : _ref$address;

  console.log('\uC774\uB984 : ' + name);
  console.log('\uD578\uB4DC\uD3F0 : ' + mobile);
  console.log('\uC9D1\uC804\uD654 : ' + home);
  console.log('\uC8FC\uC18C : ' + address);
}

addContact({
  name: '이몽룡',
  mobile: '101-1004-1004'
});