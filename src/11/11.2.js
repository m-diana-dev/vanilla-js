import {doAfter} from "./task-7.js";
import {api} from './api.js'
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

// let promise3 = doAfter(3);
// promise3.then( () => console.log('я сработал через 3 секунд') );
// promise3.then( () => console.log('и я тоже следом сработал через 3 секунд') );
// promise3.then( () => console.log('и я') );


//====================16==============

// api.sendStudentsCountToItKamasutra(20)
//     .then(res => {
//         return res.data
//     })
// .then(data => {
//     console.log(data)
// })

//====================19==============

// const pr1 = api.getVacanciesCountFromMicrosoft()
//
// const pr2 = api.getVacanciesCountFromGoogle()
//
// let countVac = Promise.all([pr1, pr2]);
//
// countVac.then(count => {
//     return api.sendStudentsCountToItKamasutra(count[0] + count[1])
// }).then(res => {
//     console.log(res);
// });


//=============================

const loadVac = () => {
    let msCount;
    api.getVacanciesCountFromMicrosoft()
        .then(count => {
            msCount = count
            return api.getVacanciesCountFromGoogle()
        })
        .then(count => {
            return api.sendStudentsCountToItKamasutra(count + msCount)
        })
        .then(res => {
            console.log(res);
        });
}

// loadVac()


const loadVacAsyncAwait = async () => {
    let msCount = await api.getVacanciesCountFromMicrosoft()
    let gCount = await api.getVacanciesCountFromGoogle()
    let res = await api.sendStudentsCountToItKamasutra(gCount + msCount)
    console.log(res);
}

// loadVacAsyncAwait()

const loadVacAsyncAwaitParallel = async () => {
    let msCount = api.getVacanciesCountFromMicrosoft()
    let gCount = api.getVacanciesCountFromGoogle()

    const allCount = await Promise.all([msCount, gCount])

    let res = await api.sendStudentsCountToItKamasutra(allCount[0] + allCount[1])
    console.log(res);
}

loadVacAsyncAwaitParallel()