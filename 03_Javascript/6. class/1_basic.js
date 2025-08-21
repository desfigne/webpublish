/**
 * 클래스란? 객체(메모리[힙] 생성)를 생성하기 위한 틀(설계도)
 */

/*
    class 클래스명 {
        // 필드명
        // 생성자
        // 메소드
    }

*/

class Animal {
    // static 변수, 상수
    static MAX_SIZE = 10;

    // 생성자
    constructor(name, emoji) {
        this.name_전역변수 = name;
        this.emoji = emoji;
    }

    // 메소드
    display = () => { console.log(this.name_전역변수, this.emoji);
     }
}

let dog = new Animal('해피', '🐶');

dog.display();
console.log(Animal.MAX_SIZE);
