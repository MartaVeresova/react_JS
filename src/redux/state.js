import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '14'},
            {id: 2, message: "It's my first post", likesCount: '25'}
        ]
    },
    dialoguesPage: {
        dialogues: [
            {id: 1, name: 'Marta'},
            {id: 2, name: 'Dimych'},
            {id: 3, name: 'Sasha'},
            {id: 4, name: 'Nastya'},
            {id: 5, name: 'Pasha'},
            {id: 6, name: 'Marina'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo'}
        ]
    },
    sidebar: {}
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 3, message: postMessage, likesCount: '2'
    }
    state.profilePage.posts.push(newPost)
    rerenderEntireTree(state)
}

export let addMessage = (postMessage) => {
    let newPost = {
        id: 4, message: postMessage
    }
    state.dialoguesPage.messages.push(newPost)
    rerenderEntireTree(state)
}

export default state;