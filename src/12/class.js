//класс

class DeleteUserAction {
    constructor(userID) {
        this.type = 'DELETE-USER';
        this.payload = {userID: userID}
    }
}

const action1 = new DeleteUserAction(1)
const action2 = new DeleteUserAction(2)

console.log(action1)
console.log(action2)


//======================================


class User {
    #name = ''
    constructor(name, site, dob) {
        this.#name = name;
        this.site = site;
        this.dob = dob;
        this.counter = 0
    }
    get name(){
        return this.#name
    }
    set name(value){
        this.#name = value
    }
    hello() {
        this.counter++
        console.log(`I am ${this.#name} from ${this.site}, counter ${this.counter}`)
    }
}

const u1 = new User('Ivan', 'www.it.ru', new Date(1988, 1, 2))
const u2 = new User('Ira', 'google', new Date(1998, 1, 2))

u1.hello() //counter - 1
u2.hello() //counter - 1
u2.hello() //counter - 2
u2.hello() //counter - 3

u2.name = 'Masha'
u2.hello() //counter - 4


class Coder extends User {
    constructor(name, site, dob, language) {
        super(name, site, dob);
        this.language = language
    }
    code() {
        console.log(`I am ${this.name} and i am programmer ${this.language}`)
    }

    hello() {
        super.hello();
        console.log("Go away!!!")
    }
}

const coder1 = new Coder('Dasha Coder', 'google', new Date(1998, 1, 2), 'js')
coder1.hello()
coder1.code()

console.log('--------------')

let users = [u1, u2, coder1]
users.forEach(el=>el.hello())