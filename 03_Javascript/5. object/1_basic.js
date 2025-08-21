/**
 * object :
 * - {}, 다양한 데이터 타입을 저장
 * - object literal 형식은 { property: value, ...}
 */

// 학생 성적 관리 프로그램
// - object literal를 활용하여 학생 개인의 성적을 관리하도록 설계
const hong = {
    name: '홍길동',
    kor: 100,
    eng: 100,
    math: 100
}

// const 로 선언된 hong은 재할당 불가
// hong = {
//     name: '홍길동',
//     kor: 100,
//     eng: 100,
//     math: 100
// }

// 내용은 재할당 가능
hong.name = '홍철수';
hong.kor = 90;
hong.eng = 80;
hong.math = 70;

// 삭제
delete hong.math;

console.log(hong);
console.log(`이름(한글) : ${hong.name}`);
console.log(`점수(국어) : ${hong.kor}`);
console.log(`점수(영어) : ${hong.eng}`);
console.log(`점수(수학) : ${hong.math}`);
    // 삭제되었기 때문에, 아예 값 자체가 없기 때문에 ndefined로 출력됨
