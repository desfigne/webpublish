// 문자 ---> 숫자로 변환하는 함수
export function toNumber(num1, num2) {
    return {
        num1: parseInt(num1),
        num2: parseInt(num2)
    };
}


// person 객체를 이용하여 CRUD 작업을 진행하는 함수 정의
// C : setObject, R : getObject, U : updateObject, D : deleteObject

// Arrow function
// 1. 객체에 프로퍼티 추가
export const setObject = (obj, key, value) => {
    obj[key] = value;
}

// 2. 객체의 프로피티 값을 반환
export const getObject = (obj, key) => {
    return obj[key];
}

// 3. 객체의 프로피티 값을 수정
export const updateObject = (obj, key, newValue) => {
    obj[key] = newValue;
}

// 4. 객체의 프로피티 삭제
export const deleteObject = (obj, key) => {
    delete obj[key];
}