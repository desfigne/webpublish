/**
 * 함수 호출 --> 파라미터 --> 함수의 매개변수에 매핑
 * Rest Parameter (래스트 파라미터) : 여러 개의 파라미터를 전송시 사용
 * Spread Operator (스프레드 연산자 : ...)
 */

// console.log(add(1, 2));
console.log(add(1, 2, 3, 6, 2, 5, 9));
// console.log(add(1, 2, 3, 6, 2, 5, 9,10, 45, 11, 23));

function add(...  numbers) {
    return numbers;
}


console.log(add(1, 2, 3, 6, 2, 5, 9,10, 45, 11, 23));

// 합계 구하는 로직
function add(...  numbers) {
    // < 1번째 방법
    // let sum = 0; // 언디파인드는 숫자도 아니고, 문자도 아니고 아예 없다는 뜻으로 읽을 수조차 없음, 이 조건에선 0으로 사용해야 함

    // for(let i = 0; i < numbers.length; i++) {
    //     sum += numbers[i];
    // }

    // return sum;
    // >

    // < 2번째 방법
    // let sum = numbers.reduce((acc, cur) => {return acc + cur}); // 리턴과 블레이스 생략 가능
    let sum = numbers.reduce((acc, cur) => acc + cur);

    return sum;
    // >
}

console.clear();
console.log(add2(1, 2, 3));
console.log(add2(1, 2, 3, 6, 2, 5, 9));
console.log(add2(1, 2, 3, 6, 2, 5, 9,10, 45, 11, 23));

function add2(a, b, ... numbers) {
    // let c = numbers.reduce((acc, cur) => acc + cur);
    // let sum = a + b + c;
    
    // let sum = a + b;
    // sum += numbers.reduce((acc, cur) => acc + cur);

    let sum = a + b + numbers.reduce((acc, cur) => acc + cur);

    return sum;
}