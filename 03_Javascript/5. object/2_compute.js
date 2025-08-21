import { setObject, getObject, updateObject, deleteObject } from '../commons/utils.js';

const person = {
    name: '홍길동',
    age: 20,
    job: '개발자'
}

const fruits = {
    name: 'apple',
    emoji: '🍎'
}

// commons 폴더의 utils.js로 이동 처리
// // person 객체를 이용하여 CRUD 작업을 진행하는 함수 정의
// // C : setObject, R : getObject, U : updateObject, D : deleteObject

// // Arrow function
// // 1. 객체에 프로퍼티 추가
// const setObject = (obj, key, value) => {
//     obj[key] = value;
// }

// // 2. 객체의 프로피티 값을 반환
// const getObject = (obj, key) => {
//     return obj[key];
// }

// // 3. 객체의 프로피티 값을 수정
// const updateObject = (obj, key, newValue) => {
//     obj[key] = newValue;
// }

// // 4. 객체의 프로피티 삭제
// const deleteObject = (obj, key) => {
//     delete obj[key];
// }


console.log('');
console.log('========================================');
console.log('추가 전과 후 확인 가능');
console.log('');

console.log(person);
setObject(person, 'address', '강남구')
console.log(person);

console.log('');
console.log('========================================');
console.log('이름 확인 가능');
console.log('');

console.log(getObject(person, 'name'));

console.log('');
console.log('========================================');
console.log('수정 확인 가능');
console.log('');

updateObject(person, 'age', 32);
console.log(person);

console.log('');
console.log('========================================');
console.log('삭제 확인 가능');
console.log('');

let job = getObject(person, 'job');
console.log(job);
deleteObject(person, 'job');
console.log(person);

console.log('');
console.log('========================================');
console.log('fruits 적용');
console.log('');

setObject(fruits, 'color', 'red');
let e = getObject(fruits, 'emoji');
updateObject(fruits, 'color', 'green');
deleteObject(fruits, 'emoji');

console.log(fruits, e);