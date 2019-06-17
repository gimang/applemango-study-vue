let msg = 'GLOBAL';

function outer(a){
  let msg = "OUTER";
  console.log(msg);

  if(true){
    let msg = "BLOCK";
    console.log(msg);
  }

  let innerVar = 'inner';
}

// innerVar is not defined 에러 발생
// console.log(innerVar);

let var1 = 'var1';
var1 = 'var1-1';

const array1 = ['a', 'b', 'c'];
console.log(array1);

array1.pop();
console.log(array1);

array1.push('d');
console.log(array1);

const person = {
  name: '운동남',
  age: 25
};

console.log(person);

person.name = '찰스';
console.log(person);



