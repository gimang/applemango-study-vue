import calc from './utils/util';

let x = 1;
let y = 5;
let str1 = `<h2>${x} + ${y} = ${calc.add(x, y)}`;

document.getElementById('app').innerHTML = str1;