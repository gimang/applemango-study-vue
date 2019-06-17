'use strict';

function addContact(name, mobile) {
  var home = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '없음';
  var address = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '없음';
  var email = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '없음';

  var str = 'name=' + name + ', mobile=' + mobile + ', home=' + home + ', address=' + address + ', email=' + email;

  console.log(str);
}

addContact('홍길동', '010-1234-1234');
addContact('장발장', '010-1004-1004', '02-111-2222', '서울');

function foodResort(name, age) {
  for (var _len = arguments.length, foods = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    foods[_key - 2] = arguments[_key];
  }

  console.log(name + age + foods);
}

foodResort('배두나', 20, '짜장면', '짬뽕', '탕슉');
foodResort('정우성', 39, '치킨');