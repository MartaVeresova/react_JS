let store = {
    _state: {
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
    },
    _callSubscribe() {
        console.log('State changed')
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._callSubscribe = observer
    },

    addMessage() {
        let newPost = {
            id: 4, message: this._state.dialoguesPage.newMessageText
        }
        this._state.dialoguesPage.messages.push(newPost)
        this._state.dialoguesPage.newMessageText = ''
        this._callSubscribe(this._state)
    },
    updateNewMessageText(newText) {
        this._state.dialoguesPage.newMessageText = newText
        this._callSubscribe(this._state)
    },
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 3,
                message: this._state.profilePage.newPostText,
                likesCount: '2'
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostText = ''
            this._callSubscribe(this._state)
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText
            this._callSubscribe(this._state)
        } else if (action.type === 'ADD-MESSAGE') {
            let newPost = {
                id: 4, message: this._state.dialoguesPage.newMessageText
            }
            this._state.dialoguesPage.messages.push(newPost)
            this._state.dialoguesPage.newMessageText = ''
            this._callSubscribe(this._state)
        } else if (action.type === 'UPDATE-NEW-MESSAGE-TEXT') {
            this._state.dialoguesPage.newMessageText = action.newText
            this._callSubscribe(this._state)
        }
    }
}


export default store;
window.store = store
//store-OOP