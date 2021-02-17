import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: '14'},
    {id: 2, message: "It's my first post", likesCount: '25'}
]

let dialogues = [
    {id: 1, name: 'Marta'},
    {id: 2, name: 'Dimych'},
    {id: 3, name: 'Sasha'},
    {id: 4, name: 'Nastya'},
    {id: 5, name: 'Pasha'},
    {id: 6, name: 'Marina'}
]

let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'}
]


ReactDOM.render(
    <React.StrictMode>
        <App posts={posts} dialogues={dialogues} messages={messages}/>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
