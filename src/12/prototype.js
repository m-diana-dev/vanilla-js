//функция конструктор

function DeleteUserAction(userID) {
    //this = {} (создание неявно при вызове конструктора)
    this.type = 'DELETE-USER';
    this.payload = {userID: userID}
    //return this (возврат неявно)
}

const action1 = new DeleteUserAction(1)
const action2 = new DeleteUserAction(2)

console.log(action1)
console.log(action2)


//======================================


function User(name, site, dob) {
    this.name = name;
    this.site = site;
    this.dob = dob;
}

User.prototype.hello = function (){
    console.log(`I am ${this.name} from ${this.site}`)
}

const u1 = new User('Ivan', 'www.it.ru', new Date(1988, 1, 2))
const u2 = new User('Ira', 'google', new Date(1998, 1, 2))

u1.hello()
u2.hello()