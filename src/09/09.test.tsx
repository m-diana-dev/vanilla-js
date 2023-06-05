import {Users} from "../08/08.test";
import {UserType} from "./09";

function userAge (u: UserType) {
    u.age++;
}
test('1', ()=>{
    let user = {
        name: 'Ivan',
        age: 32
    }
    userAge(user)

    expect(user.age).toBe(33);

    const superman = user;
    superman.age=1000;
    expect(user.age).toBe(1000);
})

test('2', ()=>{
    let users =[
        {
            name: 'Ivan',
            age: 32
        },
        {
            name: 'Ivan2',
            age: 12
        }
    ]
    const admins = users;
    admins.push({name: 'Ivan3', age: 13})

    expect(users[2]).toEqual({name: 'Ivan3', age: 13});
    expect(users.length).toBe(3);
})

test('3', ()=>{
    let usersCount =100;
    let adminsCount = usersCount;
    adminsCount++;

    expect(usersCount).toBe(100);
    expect(adminsCount).toBe(101);
})

test('4', ()=>{
    let letters = ['a','c','b']

    letters.sort()

    expect(letters).toEqual(['a','b','c']);
})