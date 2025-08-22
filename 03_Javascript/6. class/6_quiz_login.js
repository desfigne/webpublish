/**
 * 로그인 사용자 클래스 정의
 */
class User {
    #id;
    #pass;

    constructor(id, pass) { // id와 pass는 이름이 달라도 되나 헷갈리지 않도록 같은 이름으로 사용을 권장
        this.#id = id;
        this.#pass = pass;
    }

    getId = () => this.#id;
    getPass = () => this.#pass;

    setId = (id) => this.#id = id;
    setPass = (pass) => this.#pass = pass;

    display = () => console.log(this.#id, this.#pass);
}

/**
 * 로그인 체크 함수 정의
 */

function loginCheck() {
    // window.alert('윈도우 얼럿으로 로그인 이벤트 호출');
    // alert('윈도우 얼럿으로 로그인 이벤트 호출');

    // 리액트나 노드를 주로 사용하기에 얼럿은 잘 사용하지 않고 콘솔로 사용함
    // console.log(`콘솔 로그로 로그인 이벤트 호출`);

    const id = document.querySelector('#id');       // < 인풋 창 전체를 가져오기 때문에 #이름.value 이렇게 처리하거나
    const pass = document.querySelector('#pass');   // > 콘솔에 .value 처리 필요

    // 자바스크립트에서는 무조건 스트링으로 처리해서 넘어감, 인트로 사용해야할 경우 파스인트 사용 필요
    console.log(id.value, pass.value);

    // 서버 로드(부하)를 방지하기 위해 사전에 자바스크립트로 유효성 체크(벨류데이션 체크)를 선행
    if(id.value === '') {
        alert('아이디를 입력해주세요.');
        id.focus();
    } else if (pass.value === '') {
        alert('비밀번호를 입력해주세요.');
        pass.focus();
    } else {
        let user = new User(id.value, pass.value);
        user.display();

        // 아이디, 패스워드를 서버에 전송 > 임의로 정의 : user 객체 전송
        const did = 'test';
        const dpass = '1234';

        // if(did === id.value && dpass === pass.value) { // id와 pass로만 입력하면 데이터를 객체에 넣는 식이라 동작 안됨
        if(did === user.getId() && dpass === user.getPass()) { // id와 pass로만 입력하면 데이터를 객체에 넣는 식이라 동작 안됨
            alert('로그인 성공')
        } else  {
            alert('로그인 실패')
            id.value = '';
            pass.value = '';
            id.focus();
        }
    }
}