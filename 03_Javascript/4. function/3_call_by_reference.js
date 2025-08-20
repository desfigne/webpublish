/**
 * 함수는 Object이고, Heap에 저장된다.
 * 일반함수는 function으로 선언되는 경우에는,
 * 호이스팅되어 맨 먼저 힙에 초기화 된다.
 */

function add(a, b) {
    console.log(`sum = ${a + b}`);
} // 함수가 힙 메모리에 저장됨

let sum = add;  // Call by reference, sum 변수에 add 함수의 참조(주소)가 저장됨
let plus = add;
let xy = sum;

// 함수 객체 출력
console.log(add);
console.log(sum);
console.log(plus);
console.log(xy);

// 호출: a=1, b=2
add(1, 2);
sum(1, 2);
plus(1,2);
xy(1, 2);