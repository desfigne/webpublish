/**
 * 객체형
 * Class, Array([]), Object({})
 * Array 형식 : [ 데이터, 데이터 ... ]
 * object 형식 : {
 *      프로퍼티: 데이터,
 *      프로퍼티: 데이터,
 *      프로퍼티: 데이터
 *      ...
 * }
 */

console.log('========================================');
console.log('');

let apple = null; // 참조형으로 정의
// apple = [] 또는 apple = {} 로 정의
apple = {
    // 'name' : 'apple',
    // 'color' : 'red',
    // 'emoji' : '🍎'

    // node에서는 따옴표를 빼도 동작
    name : 'apple',
    color : 'red',
    emoji : '🍎'
        // 외부 api로 제공할 경우에는 표준인 ' 따옴표를 사용해야 함
};
console.log(apple.name);
console.log(apple.color);
console.log(apple.emoji);

console.log('');
console.log('========================================');
console.log('');

// orange 객체 정의 및 생성
let orange = null;
orange = {
    name : 'orange',
    color : 'yellow',
    emoji : '🍊'
}
console.log(orange.name);
console.log(orange.color);
console.log(orange.emoji);

console.log('');
console.log('========================================');
console.log('');

// Array
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]);
console.log(numbers[3]);
console.log(numbers);

let fruits = [apple, orange];
// 선언 전에 반드시 사전 등록을 해두고 진행해야 함
// var를 사용해 선언할 경우 순차 상관없이 어디에서든 호출이 가능해짐
console.log(fruits);
console.log(fruits[0].emoji);
console.log(fruits[1].emoji);

console.log('');
console.log('========================================');