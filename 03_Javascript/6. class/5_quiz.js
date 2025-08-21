/**
 * 학생(Student) 클래스 정의
 * 필드 : #이름, #나이, #주소, 이모지
 * 메소드 : setter/getter, display
 */

class Student {
    #name; #age; #address;
    constructor (name, age, address, emoji) {
        this.#name = name;
        this.#age = age;
        this.#address = address;
        this.emoji = emoji;
    }

    setName = (name) => this.#name = name;
    setAge = (age) => this.#age = age;
    setAddress = (address) => this.#address = address;
    setEmoji = (emoji) => this.emoji = emoji;
    
    getName = () => this.#name;
    getAge = () => this.#age;
    getAddress = () => this.#address;
    getEmoji = () => this.emoji;

    display = () => console.log( this.#name, this.#age, this.#address, this.emoji );
}

console.log('');
console.log('========================================');
console.log('');

let hong = new Student('홍길동', 20, '서울시', '🧑');
hong.display();

console.log('');
console.log('========================================');
console.log('');

// dataList의 학생정보를 이용하여 objList를 생성
let dataList = [
    { name: '홍길동', age: 20, address: '서울시', emoji: '🧑' },
    { name: '김철수', age: 21, address: '부산시', emoji: '🧑' },
    { name: '박영희', age: 22, address: '인천시', emoji: '👩' },
    { name: '박정민', age: 23, address: '광주시', emoji: '🧑' },
    { name: '홍길순', age: 24, address: '세종시', emoji: '👩' }
];

// objList에는 Student 클래스를 이용하여 객체 생성 주소를 저장
let objList = [];

for(let i = 0; i < dataList.length; i++) {
    let obj = dataList[i];
    objList.push(new Student(obj.name, obj.age, obj.address, obj.emoji));
}

console.log(objList);

console.log('');
console.log('========================================');
console.log('');
console.log('');

console.log(objList[2]);

console.log('');
console.log('========================================');
console.log('리스트 전체의 실제 데이터 출력시 필요한 코드');
console.log('');

console.log(objList.map(obj => ({
    name: obj.getName(),
    age: obj.getAge(),
    address: obj.getAddress(),
    emoji: obj.getEmoji()
})));
