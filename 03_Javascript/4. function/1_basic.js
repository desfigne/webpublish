/**
 * 함수 정의 : 자바스크린트의 함수는 object이다.
 * 1. 일반적인 함수 정의
 * function 함수명(매개변수) {
 *     실행 코드 생성;
 *     return 반환값;
 * }
 * 
 * 2. 애로우 펑션 정의
 * const 함수명 = (매개변수) => {
 *     실행 코드 생성;
 *     return 반환값;
 * }
 * 
 * 3. 자바스크립트 엔진은 빌트인 함수를 포함하고 있다.
 * - 예) parseInt(), parseDouble() ...
 * 
 * 함수 호출 : 함수명(파라미터);
 */

console.log('');
console.log('========================================');
console.log('');

// 빌트인 함수 parseInt(정수변환 값);
let str = '10';
console.log(str, typeof str);

let number = parseInt(str);
console.log(number, typeof number);

let str2 = '10.123';
let float = parseFloat(str2);
console.log(float, typeof float);

console.log('');
console.log('========================================');
console.log('');

// 두 수를 입력받아 합계를 출력
let num1 = 100;
let num2 = 20;
console.log(`sum = ${num1 + num2}`);

console.log('');
console.log('========================================');
console.log('');

// 함수 호출 : 호이스팅 가능
// 인터프리터가 읽기 전에 전체를 읽어 펑션 코드를 힙에 등록해두고 인터프리터가 한 줄씩 읽기 시작한다.
sum(1, 2);

// 함수를 이용하여 합계를 출력
function sum(num1, num2) { // let 으로 선언하면 전역변수처럼 선언하고, 블록 레벨 안에서만 실행되고, 종료되면 사라짐
    num1 = 100;
    num2 = 120;

    console.log(`함수호출 :: sum = ${num1 + num2}`);
}

console.log('');
console.log('========================================');
console.log('');

sum(100, 200);

// Arrow 함수 생성
const sum2 = (num1, num2) => {
    console.log(`함수호출 :: sum = ${num1 + num2}`);
}

// 함수 호출 : 호이스팅 불가
sum2(1000, 2000);

console.log('');
console.log('========================================');
console.log('');