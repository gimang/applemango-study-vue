function addContact(name, mobile, home='없음', address='없음', email='없음'){
  var str = `name=${name}, mobile=${mobile}, home=${home}, address=${address}, email=${email}`;

  console.log(str);
}

addContact('홍길동', '010-1234-1234');
addContact('장발장', '010-1004-1004', '02-111-2222', '서울');

function foodResort(name, age, ...foods){
  console.log(name + age + foods);
}

foodResort('배두나', 20, '짜장면', '짬뽕', '탕슉');
foodResort('정우성', 39, '치킨');