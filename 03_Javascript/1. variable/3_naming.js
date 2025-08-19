/**
 * 변수명 선언 규칙
 * - 라틴어(0~9, a~z, A~Z)
 * - 특수문자($, _ 사용가능, 이외의 특수문자는 사용불가)
 * - camel Case : ex) camelCase
 * - pascal Case : ex) PascalCase
 * - snake Case : ex) snake_case (보통 스네이크 케이스로 주로 사용됨)
 * 
 * ** 주의사항
 * - 숫자로 시작하면 X
 * - 예약어(키워드)는 사용불가
 * - 특수문자($, _)만 사용가능
 * - 이모지 사용불가
 */


// camel Case : 규칙은 아니나 변수명 추천
let myName = "홍길동";
let myAge = 30;

console.log(myName);
console.log(myAge);

// snake Case : 규칙은 아니나 변수명 보다는 상수명 추천
let my_name = "홍길동";
let my_age = 30;

console.log(my_name);
console.log(my_age);


// 저의 이름은 홍길동 이고, 나이는 30살 입니다. - 표준 정의 전 옛날 방식
let output = "저의 이름은 " + myName + " 이고, 나이는 " + myAge + " 살 입니다.";
console.log(output);

// 템플릿 리터럴 (Template Literal: ``(백틱 연산자)) - 표준 정의 후 ECMA 방식
let output2 = ` 저의 이름은 ${myName} 이고, 나이는 ${myAge} 살입니다. `;
    // 띄어쓰기와 줄내림(엔터)공백도 들어가기에 공백은 제외하고 입력해야 함
console.log(output2);


// 상수 정의 : 상수는 const 키워드로 정의하고 재정의는 불가
const ADUIO_DEVICE_START = 1;
const ADUIO_DEVICE_CONTINUE = 2;
const ADUIO_DEVICE_END = 3;

console.log(ADUIO_DEVICE_START);
console.log(ADUIO_DEVICE_CONTINUE);
console.log(ADUIO_DEVICE_END);