import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const sentence = 'Hello my friends!'
    const users = [
        {id: 1, name: 'Ivan 1'},
        {id: 2, name: 'Ivan 2'},
        {id: 3, name: 'Ivan 3'},
        {id: 4, name: 'Ivan 4'},
    ]
    const usersList = users.map(el=> <li key={el.id}>{el.name}</li>)
    return (
        <div className="App">
            <ul>
                {usersList}
            </ul>
        </div>
    );
}

export default App;
