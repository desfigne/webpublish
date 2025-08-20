/**
 * while - 종료되는 조건을 알고 있는 경우
 * while(조건식) {
 *      실행문;
 * }
 */

// 1 ~ 10까지 출력
let i = 1;
while(i <= 10) {
    console.log(`i = ${i}`);
    i++;
}

// 1 ~ 10까지 출력 + 5까지 출력하고 종료
let j = 1;
while(j <= 10) {
    if(j === 6) break;
    console.log(`j = ${j}`);
    j++;
}

// 1 ~ 10까지 출력 + 5까지 출력하고 종료
let k = 1;
while(k <= 10) {
    console.log(`k = ${k}`);
    if(k === 5) k = 100;
    k++;
}

// 메뉴 선택
let menu = 1;
flag = true;

while(flag) {
    console.log(`0: 🍎, 1: 🍏, 2:🍋`)
    if(menu === 0) {
        console.log('🍎'); flag = false;
    } else if(menu === 1) {
        console.log('🍏'); flag = false;
    } else if(menu === 2) {
        console.log('🍋'); flag = false;
    }
}