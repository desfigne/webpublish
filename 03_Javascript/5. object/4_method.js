/**
 * 객체를 생성하는 함수 (생성자 함수)
 * 일반 함수를 정의하는 형식으로 사용해야 함
 * 
 * 객체의 메소드 정의
 * : 함수를 정의하여 메소드 구현
 */

const fruits = {
    
    // field
    name: 'apple',
    emoji: '🍎',

    // method
    getName: function () {return this.name;},
    getEmoji: function () {return this.emoji;},
    display: function() {
        console.log(this.name, this.emoji);
    }
}

console.log('');
console.log('========================================');
console.log('');

console.log(fruits);

console.log('');
console.log('========================================');
console.log('');

console.log(fruits.display);    // 주소값 가져옴
fruits.display();               // 주소에 가서 실행 후 내용을 가져옴

console.log('');
console.log('========================================');
console.log('');

console.log(fruits.getName());
console.log(fruits.getEmoji);

console.log('');
console.log('========================================');
console.log('');

function Apple (name, emoji) {
    this.name = name;
    this.emoji = emoji;

    this.display = () => {
        console.log(this.name, this.emoji);
        
    }
}

// const apple = (name, emoji) => {
//     this.name = name;
//     this.emoji = emoji;
// }

let redApple = new Apple('사과', '🍎');

console.log(redApple);
redApple.display();

console.log('');
console.log('========================================');
console.log('');

// 자바의 클래스 개념으로 더 많이 사용함, 해당 방법은 개념 설명으로 알려주심
// 자바에서 객체 -> 필드, 메소드