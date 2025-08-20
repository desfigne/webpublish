/**
 * 반복분 : for, while
 * for - 정확한 반복 횟수를 알고 있는 경우
 * while - 종료하는 조건을 알고 있는 경우
 * 
 * for( (1) 초기값; (2) 조건식 체크; (4) 증감[증가 또는 감소] ) {
 *      (3) 실행문; 첫 반복 이후 (2), (3), (4) 순서로 반복됨
 * }
 * 
 * - (1) 초기값은 let으로 선언한다. const는 안됨 : const는 선언 후 고정되는데 for문은 재사용하면서 값이 변하기 때문
 */

// 1 ~ 10까지 출력
for(let i = 1; i <= 10; i++) {
    console.log(`number = ${i}`);
} // let은 블록에서 적용 가능

// 숫자 배열을 출력
let numbers = [1, 3, 5, 7, 9];

for(let i = 0; i < numbers.length; i++) {
    console.log(`numbers[${i}] = ${numbers[i]}`);
}

// 과일이 레몬이면 이모지 출력
let fruits = ['apple', 'orange', 'lemon'];
let emojis = ['🍎', '🍊', '🍋'];

for(let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    let emoji = emojis[i];

    if(fruit === 'lemon') {
        console.log(`${fruit} = ${emoji}`);
    }
}