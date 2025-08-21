/**
 * 클래스 정의시 필드(전역변수)는 생성자 함수에서 정의
 * 접근제어가 필요한 필드는 #을 붙여 필드 영역에 정의해야 함
 * #은 자바의 private와 같은 제어 기능을 가짐
 */

class Person {
    #empno;

    constructor(name, emoji) {
        this.#empno = '1234';
        this.name = name;
        this.emoji = emoji;
    }
    display = () => {
        console.log(this.#empno, this.name, this.emoji);
    }
}

console.log('');
console.log('========================================');
console.log('');

let hong = new Person('홍길동', '🧑');
hong.display();

console.log('');
console.log('========================================');
console.log('');

console.log(hong.name); // 자바의 프라이빗처럼 내부에서만 사용하도록 처리하여, 외부에서는 노출 불가
console.log(hong.emoji);