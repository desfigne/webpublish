/**
 * 싱글 구구단 - 단 하나를 매개변수로 입력받아 출력
 */

export function singleGugudan(dan) {
    for(let i = 1; i <= 9; i++) {
        console.log(`${dan} * ${1} = ${dan * i}`);
    }
}

export function multiGugudan(start, end) {
    for(let i = 1; i <= 9; i++) {
        let rows = '';
        for(let j = 1; j <= 9; j++) {
            rows += `${j}*${i}=${i*j}\t`;
        }
        console.log(rows);
    }
}