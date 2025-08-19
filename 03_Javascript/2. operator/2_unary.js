/**
 * 단항 연산자 : ++, --, !, !!
 */

let a = 10;
console.log(++a);   // 11
console.log(a++);   // 11 --> 12
console.log(a);     // 12

console.log('');
console.log('========================================');
console.log('');

let b = 10;
console.log(--b);   // 9
console.log(b--);   // 9 --> 8 // <
console.log(b++);   // 8 --> 9 // > 뒤에 붙을 경우 메모리에 있는 값을 먼저 출력하고 후에 계산을 처리함
console.log(++b);   // 10
console.log(b);     // 10

console.log('');
console.log('========================================');
console.log('');

let flag = true;
console.log(flag);
console.log(!flag);     // 부정 값
console.log(!!flag);    // 부정의 부정 값
