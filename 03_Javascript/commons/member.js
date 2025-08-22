/**
 * 학생, 교수, 학부모, 직원 폼에 따른 클래스 정의 및 생성
 * - 공통적인 입력 값(성명, 나이, 주소)은 맴버라는 부모 클래스로 정의
 * 학생, 교수, 학부모, 직원 클래스의 맴버 클래스의 자식 클래스로 정의
*/

// 맴버 클래스 정의
class Member {
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getName = () => this.name;
    getAge = () => this.age;
    getAddress = () => this.address;

    setName = (name) => this.name = name;
    setAge = (age) => this.age = age;
    setAddress = (address) => this.address = address;
}

// // 맴버 등록 확인용 테스트

// 학생 클래스
export class Student extends Member {
    constructor(name, age, address, sno) {
        super(name, age, address);
        this.sno = sno;
    }

    getSno = () => this.sno;
    setSno = (sno) => this.sno = sno;

    display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getSno());
    makeObject = () => {
        return {
            'name' : this.getName(),
            'age' : this.getAge(),
            'address' : this.getAddress(),
            'sno' : this.getSno()
        }
    }
}

// 교수 클래스
export class Professor extends Member {
    constructor(name, age, address, subject) {
        super(name, age, address);
        this.subject = subject;
    }

    getSubject = () => this.subject;
    setSubject = (subject) => this.subject = subject;

    display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getSubject());
    makeObject = () => {
        return {
            'name' : this.getName(),
            'age' : this.getAge(),
            'address' : this.getAddress(),
            'subject' : this.getSubject()
        }
    }
}

// 부모 클래스
export class Parent extends Member {
    constructor(name, age, address, cname) {
        super(name, age, address);
        this.cname = cname;
    }

    getCname = () => this.cname;
    setCname = (cname) => this.cname = cname;

    display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getCname());
    makeObject = () => {
        return {
            'name' : this.getName(),
            'age' : this.getAge(),
            'address' : this.getAddress(),
            'cname' : this.getCname()
        }
    }
}

// 직원 클래스
export class Employee extends Member {
    constructor(name, age, address, department) {
        super(name, age, address);
        this.department = department;
    }

    getDepartment = () => this.department;
    setDepartment = (department) => this.department = department;

    display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getDepartment());
    makeObject = () => {
        return {
            'name' : this.getName(),
            'age' : this.getAge(),
            'address' : this.getAddress(),
            'department' : this.getDepartment()
        }
    }
}