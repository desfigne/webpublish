/**
 * 함수 표현 방식
 * 
 * - 일반 함수 : function 함수명(매개변수) { 실행문; } - 주로 이 방법으로 사용됨
 * - 변수형(화살표) 함수 : const 함수명 = (매개변수) => { 실행문; }
 * - 변수형 함수 : const 함수명 = function() { 실행문; }
 * - 콜백 함수 (익명 함수, anoymous)
 *   : 함수에서 호출되는 함수, 파라미터 인자로 입력 - 형식 : 함수명(() => {})
 *   ㄴ 함수명이 따로 선언된 것이 문서 상에 없기에 실행 후 종료되면 없어져 재사용 불가함
 */

// 1. 일반 함수 > 호이스팅 가능
function add1(a, b) { return a + b; }

// 호이스팅 불가 - 2, 3
// 2. 변수형(화살표) 함수
const add2 = (a, b) => { return a + b; }

// 3. 변수형 함수
const add3 = function(a, b) { return a + b; }

// 4. 콜백 함수
let numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((acc, cur) => { return acc +cur }); // 콜백 함수 ( () => {} )가 미리 선언된 것이 들어감
let sum2 = numbers.reduce((acc, cur) => acc +cur );

// 함수 호출
console.log(`add1 = ${add1(1, 2)}`);
console.log(`add2 = ${add2(1, 2)}`);
console.log(`add3 = ${add3(1, 2)}`);
console.log(`sum = ${sum}`);
console.log(`sum2 = ${sum2}`);
