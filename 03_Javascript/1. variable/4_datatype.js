/**
 * Primitive Datatype (기본형)
 * - 정수형(Integer) : 100, 200, 1 ...
 * - 실수형(Float, Double) : 1.1234, 3.14
 * - 문자형(Character) : '', "") : '홍길동', "이순신" ...
 * - 불린형(Boolean) : true, false
 * 
 * Reference Datatype (참조형)
 * - 객체형(Object) : 클래스(Class), 배열(Array, []), JSON({}) ...
 */

// 1. 정수형
let inumber = 100;
console.log("정수형 -> ", inumber);

// 2. 실수형
let fnumber = 3.14;
console.log("실수형 -> ", fnumber);

// 3. 문자형
let cname = "홍길동";
console.log("문자형 -> ", cname);

// 4. 불린형
let flag = true; // 자동으로 만들어주지만 브라우저마다 동작하지 않을 가능성이 있으므로 문법적으로 명확히 하는 것을 권장
console.log("불린형 -> ", flag);

// 4. 객체형
let nameList = ["홍길동", "이순신", "김유신"]; // 싱글/더블 쿼테이션 모두 사용가능하나 출력에서는 싱글 쿼테이션 사용됨
console.log("배열 -> ", nameList);

// 4. 기본형, 참조형 데이터 초기화
let address1 = undefined; // 기본형 초기화
    // '', 0 / 변수 선언했는데 아무 값이 안들어가져있는 상태(디폴트)
    // 타입은 아직 정해지지 않음, 데이터가 들어가면서 ~~형 데이터타입으로 정의됨
let address2 = null; // 참조형 초기화

// Typeof : 데이터 비교 (==, equals와 동일 개념)
console.log('========================================');
console.log('');

let x = 10;
let xx = 10;
let y = '10';
let obj = { 'name' : '홍길동' };

console.log(x, typeof(xx));
console.log(x, typeof (xx));
console.log(x, typeof xx);

console.log('');
console.log('========================================');
console.log('');

console.log(xx, typeof xx);
console.log(y, typeof y);
console.log(obj, typeof obj);

console.log('');
console.log('========================================');
console.log('');

console.log(typeof x == xx); // 에러 케이스 : 뒤의 비교연산자도 타입오브를 붙여야 함

console.log('');
console.log('========================================');
console.log('');

console.log(typeof x == typeof xx); // == 값 비교
console.log(typeof x === typeof xx); // === 값 + 데이터타입 비교
    // '10' 숫자를 문자열로 아스킷 코드로 비교하게 되어 false로 나옴

console.log(typeof x == typeof y); // == 값 비교
console.log(typeof x === typeof y); // === 값 + 데이터타입 비교
    // '10' 숫자를 문자열로 아스킷 코드로 비교하게 되어 false로 나옴

console.log('');
console.log('========================================');
console.log('');

console.log(x == y); // true
console.log(x == obj); // false

console.log('');
console.log('========================================');