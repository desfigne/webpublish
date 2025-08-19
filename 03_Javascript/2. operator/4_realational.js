/**
 * 비교 연산자 : >, <, >=, <=, ==(값), ===(값 + 데이터)
 */

console.log(3 > 2);     // true
console.log(3 < 2);     // false
console.log(3 >= 2);    // true
console.log(3 <= 2);    // false

console.log('');
console.log('========================================');
console.log('');

console.log(3 == '3');  // 3 == 3 > true
console.log(3 === '3'); // 숫자와 문자열의 데이터타입을 비교 > false
console.log(3 == 'A');  // 3 == A라는 문자의 아스키 코드의 숫자 값과 비교 > false
console.log(3 === 'a'); // false

console.log('');
console.log('========================================');
console.log('참조형');
console.log('');

let obj1 = { name: '홍길동' }
let obj2 = { name: '홍길동' }

console.log(obj1 == obj2);
console.log(obj1.name == obj2.name);
console.log(typeof obj1 == typeof obj2);


