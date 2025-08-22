// 전체 commons 폴더로 이동 처리

    /**
     * 학생, 교수, 학부모, 직원 폼에 따른 클래스 정의 및 생성
     * - 공통적인 입력 값(성명, 나이, 주소)은 맴버라는 부모 클래스로 정의
     * 학생, 교수, 학부모, 직원 클래스의 맴버 클래스의 자식 클래스로 정의
    */

    // // 맴버 클래스 정의
    // class Member {
    //     constructor(name, age, address) {
    //         this.name = name;
    //         this.age = age;
    //         this.address = address;
    //     }

    //     getName = () => this.name;
    //     getAge = () => this.age;
    //     getAddress = () => this.address;

    //     setName = (name) => this.name = name;
    //     setAge = (age) => this.age = age;
    //     setAddress = (address) => this.address = address;
    // }

    // // // 맴버 등록 확인용 테스트
    // // let member = new Member ('홍길동', 10, '강남구');
    // // member.display();

    // // 학생 클래스
    // class Student extends Member {
    //     constructor(name, age, address, sno) {
    //         super(name, age, address);
    //         this.sno = sno;
    //     }

    //     getSno = () => this.sno;
    //     setSno = (sno) => this.sno = sno;

    //     display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getSno());
    //     makeObject = () => {
    //         return {
    //             'name' : this.getName(),
    //             'age' : this.getAge(),
    //             'address' : this.getAddress(),
    //             'sno' : this.getSno()
    //         }
    //     }
    // }

    // // 교수 클래스
    // class Professor extends Member {
    //     constructor(name, age, address, subject) {
    //         super(name, age, address);
    //         this.subject = subject;
    //     }

    //     getSubject = () => this.subject;
    //     setSubject = (subject) => this.subject = subject;

    //     display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getSubject());
    //     makeObject = () => {
    //         return {
    //             'name' : this.getName(),
    //             'age' : this.getAge(),
    //             'address' : this.getAddress(),
    //             'subject' : this.getSubject()
    //         }
    //     }
    // }

    // // 부모 클래스
    // class Parent extends Member {
    //     constructor(name, age, address, cname) {
    //         super(name, age, address);
    //         this.cname = cname;
    //     }

    //     getCname = () => this.cname;
    //     setCname = (cname) => this.cname = cname;

    //     display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getCname());
    //     makeObject = () => {
    //         return {
    //             'name' : this.getName(),
    //             'age' : this.getAge(),
    //             'address' : this.getAddress(),
    //             'cname' : this.getCname()
    //         }
    //     }
    // }

    // // 직원 클래스
    // class Employee extends Member {
    //     constructor(name, age, address, department) {
    //         super(name, age, address);
    //         this.department = department;
    //     }

    //     getDepartment = () => this.department;
    //     setDepartment = (department) => this.department = department;

    //     display = () => console.log(this.getName(), this.getAge(), this.getAddress(), this.getDepartment());
    //     makeObject = () => {
    //         return {
    //             'name' : this.getName(),
    //             'age' : this.getAge(),
    //             'address' : this.getAddress(),
    //             'department' : this.getDepartment()
    //         }
    //     }
    // }

import { Student, Professor, Parent, Employee }
    from '../commons/member.js';

/**
 * 라디오 버튼 이벤트 처리 함수 정의 : display(타입);
 */

function display(type) {
    // #Student block - display: bock;, 나머지는 display: none;
    document.querySelector('#student').style.display = "none";
    document.querySelector('#professor').style.display = "none";
    document.querySelector('#parent').style.display = "none";
    document.querySelector('#employee').style.display = "none";

    // let selectedType = document.querySelector('input[type=radio]:checked');
    // console.log(`type :: ${selectedType.value}`);

    if(type === '1') {
        document.querySelector('#student').style.display = "block";
    } else if(type === '2') {
        document.querySelector('#professor').style.display = "block";
    } else if(type === '3') {
        document.querySelector('#parent').style.display = "block";
    } else if(type === '4') {
        document.querySelector('#employee').style.display = "block";
    }
}

/**
 * Signup 버튼 이벤트 처리 함수 : signupCheck()
 */

function signupCheck() {
    let type = document.querySelector('input[type=radio]:checked').value;
    // 넘어오는 값이 스트링이여서 케이스 숫자와 일치하지 않음, 파스인트로 처리

    let name, age, address, sno, subject, cname, department;
    let member = null;

    switch(parseInt(type)) {
        case 1:
            name = document.querySelector('#student #name').value;
            age = document.querySelector('#student #age').value;
            address = document.querySelector('#student #address').value;

            sno = document.querySelector('#student #sno').value;
            
            member = new Student(name, age, address, sno);
            break;
        case 2:
            name = document.querySelector('#professor #name').value;
            age = document.querySelector('#professor #age').value;
            address = document.querySelector('#professor #address').value;

            subject = document.querySelector('#professor #subject').value;

            member = new Professor(name, age, address, subject);
            
            break;
        case 3:
            name = document.querySelector('#parent #name').value;
            age = document.querySelector('#parent #age').value;
            address = document.querySelector('#parent #address').value;

            cname = document.querySelector('#parent #cname').value;

            member = new Parent(name, age, address, cname);
            
            break;
        case 4:
            name = document.querySelector('#employee #name').value;
            age = document.querySelector('#employee #age').value;
            address = document.querySelector('#employee #address').value;

            department = document.querySelector('#employee #department').value;

            member = new Employee(name, age, address, department);
            
            break;
    }

    // 서버(NodeJS)로 전송 => member 전송
    member.display();

    // 서버(WAS)로 전송 => object literal 형태로 전송
    console.log(member.makeObject());   // object literal
}

window.display = display;
window.signupCheck = signupCheck;