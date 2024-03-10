//фабричная функция
const deleteUser = (userID) => ({type: 'DELETE-USER', payload: {userID: userID}})

const action1 = deleteUser('1')
const action2 = deleteUser('2')

console.log(action1)
console.log(action2)


//======================================

function commonHello(){
    console.log(`I am ${this.name} from ${this.site}`)
}
const userFabric = (name) => (
    {
        name: name,
        site: 'incubator.ru',
        dateOfBirth: new Date(1988, 1, 2),
        hello: commonHello
    }
)

const action3 = userFabric('Ivan')
const action4 = userFabric('Ira')

console.log(action3)
console.log(action4)