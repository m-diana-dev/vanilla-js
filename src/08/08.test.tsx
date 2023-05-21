import {User} from "../06/06";

type UsersType = {
    [key:string]:{id:number, name:string}
}
export let Users:UsersType = {

}
beforeEach(()=>{
    Users = {
        '101': {id: 101, name: 'Ivan1'},
        '1052': {id: 1052, name: 'Ivan2'},
        '103444': {id: 103444, name: 'Ivan3'},
        '1': {id: 1, name: 'Ivan4'},
    }
})

test('1', ()=>{
    (Users[1]).name='Ivan8'
    expect(Users[1].name).toBe('Ivan8');
})

test('2', ()=>{
    delete Users[2]
    expect(Users[2]).toBeUndefined()
})