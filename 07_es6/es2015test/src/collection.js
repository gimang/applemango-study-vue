const S1 = new Set();

S1.add('사과');
S1.add('배');

const JOHN = new Set(['사과', '포도', '배']);
const SUJAN = new Set(['파일애플', '키위', '배']);

// 합집함
var union = new Set([...JOHN.values(), ...SUJAN.values()]);
console.log(union);

// 교집합
var interSection = new Set([...JOHN.values()].filter(e => SUJAN.has(e)));
console.log(interSection);

// 차집함
var diff = new Set([...JOHN.values()].filter(e => !SUJAN.has(e)));
console.log(diff);


let teams = new Map();
teams.set('LG', '트윈스');
teams.set('삼성', '라이온스');
teams.set('NC', '다이노스');

console.log(teams.has('SK'));
console.log(teams.get('LG'));

// 약한 참조를 위한 WeakSet, WeakMap
let key1 = {},
    key2 = {},
    weakSet = new WeakSet([key1, key2]);

console.log(weakSet.has(key1));
console.log(weakSet.has(key2));

key1 = null;
console.log('key1 is null : ' + weakSet.has(key1));

