class User {
    #id;
    #pwd;

    constructor(id, pwd) {
        this.#id = id;
        this.#pwd = pwd;
    }

    getId = () => this.#id;
    getPwd = () => this.#pwd;

    setId = (id) => this.#id = id;
    setPwd = (pwd) => this.#pwd = pwd;

    display = () => console.log(this.#id, this.#pwd);
}

function loginCheck() {
    const id = document.querySelector('#id');
    const pwd = document.querySelector('#pwd');

    if(id.value === '') {
        alert('아이디를 입력해주세요.');
        id.focus();
    } else if (pwd.value === '') {
        alert('비밀번호를 입력해주세요.');
        pwd.focus();
    } else {
        let user = new User(id.value, pwd.value);
        user.display();
        
        const did = 'test';
        const dpwd = '1234';

        if(did === user.getId() && dpwd === user.getPwd()) {
            alert('로그인 성공')
        } else  {
            alert('로그인 실패')
            id.value = '';
            pwd.value = '';
            id.focus();
        }
    }
}



class JoinUser {
    #id; #pwd; #cpwd; #name; #phone; #emailname; #emaildomain;

    constructor(id, pwd, cpwd, name, phone, emailname, emaildomain) {
        this.#id = id;
        this.#pwd = pwd;
        this.#cpwd = cpwd;
        this.#name = name;
        this.#phone = phone;
        this.#emailname = emailname;
        this.#emaildomain = emaildomain;
    }

    getId = () => this.#id;
    getPwd = () => this.#pwd;
    getCpwd = () => this.#cpwd;
    getName = () => this.#name;
    getPhone = () => this.#phone;
    getEmailname = () => this.#emailname;
    getEaildomain = () => this.#emaildomain;

    setId = (id) => this.#id = id;
    setPwd = (pwd) => this.#pwd = pwd;
    setCpwd = (cpwd) => this.#cpwd = cpwd;
    setName = (name) => this.#name = name;
    setPhone = (phone) => this.#phone = phone;
    setEmailname = (emailname) => this.#emailname = emailname;
    setEaildomain = (emaildomain) => this.#emaildomain = emaildomain;

    display = () => console.log(
        this.#id,
        this.#pwd,
        this.#cpwd,
        this.#name,
        this.#phone,
        this.#emailname,
        this.#emaildomain
    );
    makeObject = () => {
        return {
            'id' : this.getId(),
            'pwd' : this.getPwd(),
            'cpwd' : this.getCpwd(),
            'name' : this.getName(),
            'phone' : this.getPhone(),
            'email' : this.getEmailname() + '@' + this.getEaildomain()
        };
    }
}

function signupCheck() {
    const id = document.querySelector('#id').value;
    const pwd = document.querySelector('#pwd').value;
    const cpwd = document.querySelector('#cpwd').value;
    const name = document.querySelector('#name').value;
    const phone = document.querySelector('#phone').value;
    const emailname = document.querySelector('#emailname').value;
    const emaildomain = document.querySelector('#emaildomain').value;

    const user = new JoinUser(id, pwd, cpwd, name, phone, emailname, emaildomain);

    console.log(user.makeObject());   // object literal
}

window.signupCheck = signupCheck;