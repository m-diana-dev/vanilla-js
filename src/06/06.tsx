import {ChangeEvent, MouseEvent} from 'react';

// const callback = ():number =>{
//     alert('hi');
//     return 12;
// }
// window.setTimeout(callback, 1000)

export const User = () => {
    const userDeleted = (e: MouseEvent<HTMLButtonElement>) =>{
        console.log(e.currentTarget.name)
    }

    const onNameChanged = () => {
        console.log('change')
    }

    const onAgeChanged = (e:ChangeEvent<HTMLInputElement>) => {
        console.log('change' + e.currentTarget.value)
    }
    const onBlurHandler = () => {
        console.log('blur lost')
    }

    return(
        <div>
            <textarea onBlur={onBlurHandler} onChange={onNameChanged}>Ivan</textarea>
            <input onChange={onAgeChanged} type="number"/>
            <button name='del' onClick={userDeleted}>del</button>
            <button name='save' onClick={userDeleted}>save</button>
        </div>
    )
}