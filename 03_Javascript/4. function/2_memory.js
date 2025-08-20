/**
 * 함수 생성 및 호출
 */

function add(num1, num2) {
    console.log(`sum : ${num1 + num2}`);
}

function add(num1, num2) {
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    console.log(`sum : ${num1 + num2}`);
}

add(100, 200);
add('100', '200');



// 문자 ---> 숫자로 변환하는 함수

import { toNumber } from '../commons/utils.js';

    // commons 안으로 공통화해 이동시킴
    // function toNumber(num1, num2) {
    //     return {
    //         num1: parseInt(num1),
    //         num2: parseInt(num2)
    //     };
    // }



/**
 * 숫자 두 개를 받아 합을 출력하는 함수
 * toNumber 함수를 이용해 문자도 숫자로 변환해서 처리
 * ** 호이스팅, 힙에 저장
 */
function add(num1, num2) {
    let obj = toNumber(num1, num2);
    console.log(`sum : ${obj.num1 + obj.num2}`);
}

/**
 * Arrow function - 두 숫자 비교 후 큰 값과 작은 값을 받아 차를 출력
 */
const min = (num1, num2) => {
    let obj = toNumber(num1, num2);
    if(obj.num1 > obj.num2) {
        console.log(`min : ${obj.num1 - obj.num2}`);
    } else {
        console.log(`값이 올바르지 않습니다.`);
    }
}

min(200, 100);
min('200', '100');