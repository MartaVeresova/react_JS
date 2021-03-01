const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';


const dialoguesReducer = (state, action) => {
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