//==============================1
// let promise = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(1)
//     }, 3000)
// });
//==============================1

//==============================2

// const axios = {
//     get() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 // resolve(1)
//                 reject(1)
//             }, 3000)
//         });
//     }
// }
//
// axios.get()
//     .then(data => console.log(data))
//     .catch(data => console.error(data))

//==============================2


//==============================3

// const axios = {
//     get() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(1)
//             }, 3000)
//         });
//     }
// }
//
// axios.get()
//     .then(data => console.log(data))
//     .then(data => console.log(1))
//     .then(data => console.log(2))
//     .catch(data => console.error(data))

//==============================3


//==============================4

// const axios = {
//     get() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(1)
//             }, 3000)
//         });
//     }
// }
//
// axios.get()
//     .then(data => {
//         console.log(data)
//         return 12
//     })
//     .then(data => {
//         console.log(data)
//     })
//     .then(data => console.log('message'))
//     .catch(data => console.error(data))

//==============================4


//==============================5

// const axios = {
//     get() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve({
//                     g: 1,
//                     g3: 3,
//                     message: 'message!!!'
//                 })
//             }, 3000)
//         });
//     }
// }
//
// axios.get()
//     .then(object => {
//         return object.message
//     })
//     .then(message => {
//         console.log(message)
//     })
//     .then(message2 => {
//         console.log(message2)
//     })
//     .catch(error => console.error(error))

//==============================5


//==============================6

// const axios = {
//     get() {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve({
//                     g: 1,
//                     g3: 3,
//                     message: 'message!!!'
//                 })
//             }, 3000)
//         });
//     }
// }
//
// axios.get()
//     .then(object => {
//         return new Promise((resolve, reject) => resolve('New Promise'))
//     })
//     .then(message => {
//         console.log(message)
//     })
//     .catch(error => console.error(error))

//==============================6

//==============================7

// const fetch = (url) => {
//     return new Promise((resolve, reject)=>{
//         switch (url){
//             case 'google':{
//                 setTimeout(()=>{
//                     resolve({data: 'data from google'})
//                 },3000)
//                 break;
//             }
//             case 'microsoft':{
//                 setTimeout(()=>{
//                     resolve({data: 'data from microsoft'})
//                 },5000)
//                 break;
//             }
//             case 'it-incubator':{
//                 setTimeout(()=>{
//                     resolve({data: 'data from it-incubator'})
//                 },500)
//                 break;
//             }
//         }
//     })
// }


//запросы выполняются примерно одновременно
// fetch('google')
//     .then(data=>console.log(data))
// fetch('microsoft')
//     .then(data=>console.log(data))
// fetch('it-incubator')
//     .then(data=>console.log(data))

//запросы выполняются последовательно
// fetch('google')
//     .then(data=>{
//         console.log(data)
//         return fetch('microsoft')
//     })
//     .then(data=>{
//         console.log(data)
//         return fetch('it-incubator')
//     })
//     .then(data=>console.log(data))

//==============================7

//==============================8

const fetch = (url) => {
    return new Promise((resolve, reject)=>{
        switch (url){
            case 'google':{
                setTimeout(()=>{
                    resolve({data: 'data from google'})
                },3000)
                break;
            }
            case 'microsoft':{
                setTimeout(()=>{
                    resolve({data: 'data from microsoft'})
                },5000)
                break;
            }
            case 'it-incubator':{
                setTimeout(()=>{
                    resolve({data: 'data from it-incubator'})
                },500)
                break;
            }
        }
    })
}

const makeRequest = async () => {
    let data = await fetch('google')
    console.log(data)
    data = await fetch('microsoft')
    console.log(data)
    data = await fetch('it-incubator')
    console.log(data)
}

const makeRequestAtTheOneMoment = async () => {
    const promises = [fetch('google'),fetch('microsoft'),fetch('it-incubator')]

    let data = await Promise.all(promises)
}

makeRequestAtTheOneMoment()

//==============================8