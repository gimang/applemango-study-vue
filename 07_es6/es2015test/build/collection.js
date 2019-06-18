'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var S1 = new Set();

S1.add('사과');
S1.add('배');

var JOHN = new Set(['사과', '포도', '배']);
var SUJAN = new Set(['파일애플', '키위', '배']);

// 합집함
var union = new Set([].concat(_toConsumableArray(JOHN.values()), _toConsumableArray(SUJAN.values())));
console.log(union);

// 교집합
var interSection = new Set([].concat(_toConsumableArray(JOHN.values())).filter(function (e) {
    return SUJAN.has(e);
}));
console.log(interSection);

// 차집함
var diff = new Set([].concat(_toConsumableArray(JOHN.values())).filter(function (e) {
    return !SUJAN.has(e);
}));
console.log(diff);

var teams = new Map();
teams.set('LG', '트윈스');
teams.set('삼성', '라이온스');
teams.set('NC', '다이노스');

console.log(teams.has('SK'));
console.log(teams.get('LG'));

// 약한 참조를 위한 WeakSet, WeakMap
var key1 = {},
    key2 = {},
    weakSet = new WeakSet([key1, key2]);

console.log(weakSet.has(key1));
console.log(weakSet.has(key2));

key1 = null;
console.log('key1 is null : ' + weakSet.has(key1));