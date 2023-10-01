import {doAfter} from "./task-7.js";
//===========2=============
// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//         alert('Hello');
//     }, 2000)
//     console.log(1)
// });
//
// myPromise.then(() => {
//     console.log("myPromise зарезолвился, и я узнал об этом");
// })


//===========4=============
// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const num = Math.random();
//         resolve(num)
//     }, 2000)
// });
//
// myPromise.then((num) => {
//     console.log("myPromise зарезолвился вот таким числом: " + num);
// })
// myPromise.then((num) => {
//     console.log("myPromise зарезолвился вот таким числом: " + num);
// })

//===========5=============

// doAfter(5).then( () => console.log('я сработал через 5 секунд') );
// doAfter(3).then( () => console.log('а я сработал через 3 секунд') );
// doAfter(10).then( () => console.log('я сработал через 10 секунд') );


//====================7==============

let promise3 = doAfter(3);
promise3.then( () => console.log('я сработал через 3 секунд') );
promise3.then( () => console.log('и я тоже следом сработал через 3 секунд') );
promise3.then( () => console.log('и я') );