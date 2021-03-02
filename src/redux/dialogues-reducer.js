const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

let initialState = {
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
    newMessageText: ''
}

const dialoguesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newPost = {
                id: 4, message: state.newMessageText
            }
            state.messages.push(newPost)
            state.newMessageText = ''
            return state

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const addMessageActionCreator = (text) =>
    ({type: ADD_MESSAGE, newText: text})
export const updateNewMessageTextActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})


export default dialoguesReducer