/**
 * ECMA Script 2015 이후 버전 기본으로 정리함
 * 변수 선언 키워드 : var, let, const (final이 들어간 상수의 개념으로 보면 됨)
 * - 표준 정의 전 초기에 나온 명령어 var를 사용했으며 표준 정의 후 현재는 사용하지 않고 let, const를 주로 사용함
 * 형식 : 키워드 변수명 = 데이터 값;
 * 타입 없이 사용하는 범위에 대한 지정만 있을 뿐.
 */

// Name 이라는 변수에 홍길동을 저장
let name1 = "홍길동";
let name2 = '홍길동';
console.log(name1);
console.log(name2);

// Number 변수에 100을 저장
let number = 100;
let dnumber = 100.123;
console.log(number);
console.log(dnumber);

// Flag 변수에 true 저장
let flag = true;
console.log(flag);

// name1 다른 값을 저장하는 경우?
// - 자바는 타입 불일치시 입력 불가하지만 자바스크립트는 타입 불일치해도 입력 가능 (사용을 권장하지는 않음)
name1 = 200;
console.log("name1 --> ", name1);

// 상수값으로 정의 후 사용
const cname = "홍길동";

// const는 변수값을 재정의할 수 없기에 에러가 발생
// cname = "이순신";
console.log("cname --> ", cname);