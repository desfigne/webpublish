let name = '홍길동';
let age = 20;

// html에서는 각각 하나씩 밖에 넘길 수 없고, 넘어오면 아래 처럼 묶어서 처리하면 됨
const person = {
    name, age // key = value 이름이 동일
}

console.log(person);
console.log(person.name);
console.log(person.age);


let x = 0;
let y = 0;
const number = { x, y };
console.log(number);


// 사원들의 정보를 입력받아 객체를 생성하는 함수 정의
// 사원의 정보: name, age, address
const createEmployee = (name, age, address) => {
    return { name, age, address };
}

const emp1 = createEmployee ('홍길동', 20, '서울시');
const emp2 = createEmployee ('김철수', 30, '부산시');

console.log(emp1, emp2);
