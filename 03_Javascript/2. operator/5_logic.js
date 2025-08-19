/**
 * 논리 연산자 : &&(and), ||(or)
 * 
 * ==========================================
 * 논리식1  &&  논리식2 = 결과값
 * ---------------------------
 * true    &&  true   = true
 * true    &&  false  = false
 * false   &&  true   = false (shortcut 연산)
 * false   &&  false  = false (shortcut 연산)
 * 
 * ==========================================
 * 논리식1  ||  논리식2 = 결과값
 * ---------------------------
 * true    ||  true   = true (shortcut 연산)
 * true    ||  false  = true (shortcut 연산)
 * false   ||  true   = true
 * false   ||  false  = false
 */

let a = 1;
let b = 2;

console.log('========================================');
console.log('AND');
console.log('');

console.log((a < b) && (a < b));
console.log((a < b) && (a > b));
console.log((a === b) && (a < b));
console.log((a === b) && (a > b));

console.log('');
console.log('========================================');
console.log('OR');
console.log('');
console.log((a < b) || (a < b));
console.log((a < b) || (a > b));
console.log((a === b) || (a < b));
console.log((a === b) || (a > b));

console.log('');
console.log('========================================');
console.log('ShortCut');
console.log('');

// 입력받은 조건을 비교하여 1~9까지 범위의 수를 출력
let number = 11;

if((number > 0) && (number < 10));
if((number < 10) && (number > 0)) {  // shortcut 연산 (앞에가 false가 나오도록)
    console.log(`result = true`);
} else {
    console.log(`result = false`);
}

// 입력받은 숫자가 0보다 크면 출력
let number2 = 11;

if((number2 > 10) || (number2 > 100)) {  // shortcut 연산 (앞에가 true가 나오도록)
    console.log(`result = true`);
} else {
    console.log(`result = false`);
}