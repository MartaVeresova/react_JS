let rerenderEntireTree = () => {
    console.log('State changed')
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: '14'},
            {id: 2, message: "It's my first post", likesCount: '25'}
        ],
        newPostText: 'it-programming'
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
        ],
        newMessageText: 'Whats up?'
    },
    sidebar: {}
}

export const addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: '2'
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}
export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}


export const addMessage = () => {
    let newPost = {
        id: 4, message: state.dialoguesPage.newMessageText
    }
    state.dialoguesPage.messages.push(newPost)
    state.dialoguesPage.newMessageText = ''
    rerenderEntireTree(state)
}
export const updateNewMessageText = (newText) => {
    state.dialoguesPage.newMessageText = newText
    rerenderEntireTree(state)
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer
}


export default state;