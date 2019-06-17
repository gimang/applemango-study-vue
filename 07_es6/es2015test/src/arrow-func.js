const TEST1 = function(a, b){
  return a+b;
};

const TEST2 = (a, b) =>{
  return a+b;
};

const TEST3 = (a, b) => a+b;

console.log(TEST1(1, 2));
console.log(TEST2(1, 2));
console.log(TEST3(1, 2));

function Person(name, yearCount) {
  this.name = name;
  this.age = 0;
  const ME = this;

  // var addAge = function() {
  //   ME.age++;
  // };

  var addAge = ()=> this.age++;

  for (var i = 1; i <= yearCount; i++) {
    addAge();
  }
}

var p1 = new Person('홍길동', 20);
console.log(p1.name + '님의 나이 : ' + p1.age);
