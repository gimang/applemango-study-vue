class Person {
  constructor(name, tel, address) {
    this.name = name;
    this.tel = tel;
    this.address = address;

    if(Person.count) {
      Person.count++;
    } else {
      Person.count = 1;
    }
  }

  static getPersonCount() {
    return Person.count;
  }

  toString() {
    return `name=${this.name}, tel=${this.tel}, address=${this.address}`;
  }
}

var p1 = new Person('이몽룡', '010-1111-2222', '경기도');
var p2 = new Person('홍길동', '010-1212-1313', '서울');

console.log(p2.toString());
console.log(Person.getPersonCount());

class Employee extends Person {
  constructor(name, tel, address, empno, dept) {
    super(name, tel, address);
    this.empno = empno;
    this.dept = dept;
  }

  toString() {
    return super.toString() + `, empno=${this.empno}, dept=${this.dept}`;
  }

  getEmpInfo() {
    return `${this.empno} : ${this.name}은 ${this.dept} 부서입니다.`;
  }
}

let e1 = new Employee('이몽룡', '010', '소래포구', '1', '개발팀');
console.log(e1.toString());
console.log(e1.getEmpInfo());

