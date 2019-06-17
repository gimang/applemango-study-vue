// Destructuring Array
let arr = [10, 20, 30, 40];

// ES5
let a1 = arr[0],
    a2 = arr[1];
    a3 = arr[2];

console.log(a1, a2, a3);

// ES6
let [b1, b2, b3] = arr;
console.log(b1, b2, b3);


// Destructuring Object
let obj = {
  name: '운동남',
  age: '30',
  address: '서울'
};

let {name, age} = obj;

// 다른 변수 이름으로 할당받기
let {name:myName, age:myAge} = obj;

console.log(name, age, myName, myAge);

// 함수의 파라미터에서 사용
function addContact({name, mobile, home='없음', address='없음'}){
  console.log(`이름 : ${name}`);
  console.log(`핸드폰 : ${mobile}`);
  console.log(`집전화 : ${home}`);
  console.log(`주소 : ${address}`);
}

addContact({
  name: '이몽룡',
  mobile: '101-1004-1004'
});
