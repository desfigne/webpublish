/**
 * if, , if ~ else,  if ~ else if ... ~ else
 * 삼항 연산자 : (조건문) ? true인 경우 실행문 : false인 경우 실행문;
 */

console.log('========================================');
console.log('');

// 입력되는 과일명이 apple인 경우에만 이모지 출력
// apple 이외의 과일은 이름 출력
let fruit = 'apple';
if(fruit === 'apple') {
    console.log('🍎');
} else {
    console.log(fruit);
}

console.log('');
console.log('========================================');
console.log('');

// 위의 if문을 삼항연산자로 변환
let result = undefined;
(fruit === 'apple') ? result = '🍎' : result = fruit;

console.log(`result =>  ${result}`);

console.log('');
console.log('========================================');
console.log('');

// 선택한 메뉴를 출력
let menus = [ 'pizza', 'hotdog', 'coffee' ];
let selectMenu = 'coffee';

if(selectMenu === menus[0]) {
    console.log('🍕');
} else if(selectMenu === menus[1]) {
    console.log('🌭');
} else if(selectMenu === menus[2]) {
    console.log('☕');
} else {
    console.log('메뉴 준비중~');
}

console.log('');
console.log('========================================');
console.log('');

// 입력받은 숫자가 홀수이면 사과 이모지, 짝수이면 포도 이모지 출력
let inNumber = 101;
let fresult = undefined;

// if(inNumber % 2 === 1) { // 자바에서는 트루 펄스에 대해 정의해야 함
if(!(inNumber % 2)) { // 자바스크립트는 트루 1, 펄스는 0이 디폴트
    fresult = '🍎' // 홀수
} else {
    fresult = '🍇' // 짝수
}

console.log(`result => ${fresult}`);

console.log('');
console.log('========================================');
console.log('');

// 삼항 연산식 / 1--> true, 0--> false
(inNumber % 2) ? fresult = '🍎' : fresult = '🍇';

console.log(inNumber % 2, `result => ${fresult}`);