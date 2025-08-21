// 사원 번호(# - 접근제어 필요), 사원명, 나이를 입력받아 객체 생성하는 클래스 정의
class Employee {
    #empno;
    
    constructor(empno, name, age) {
        this.#empno = empno;
        this.name = name;
        this.age = age;
    }

    setEmpno = (empno) => { this.#empno = empno; }
    setName = (name) => { this.name = name; }
    setAge = (age) => { this.age = age; }

    getEmpno = () => this.#empno;
    getName = () => this.name;
    getAge = () => this.age;
    
    // Arrow function만 리턴과 괄호를 생략 가능
    // 비즈니스 로직이 들어가서 한 줄이 아니게 되면 괄호 생략 불가
    
    display = () => {
        console.log(this.#empno, this.name, this.age);
    }

    getObject = () => {
        return {
            empno: this.#empno,
            name: this.name,
            age: this.age
        }
    }
}

let hong = new Employee('E0001', '홍길동', '20');
let park = new Employee('E0002', '박정민', '22');

hong.setAge(30);

console.log(hong.getEmpno());
console.log(hong.getName());
console.log(hong.getAge());
hong.display();

console.log(hong.getObject());


let empList = [];
empList.push(hong.getObject());
empList.push(park.getObject());
// empList.push(hong.getObject(), park.getObject());

console.log(empList);
console.log(`empList = ${empList}`); // 실 데이터는 표시되지 않고 문자로 변환되서 표시됨.
