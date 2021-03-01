import profileReducer from "./profile-reducer";
import dialoguesReducer from "./dialogues-reducer";
import sidebarReducer from "./sidebar-reducer";

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
            newMessageText: ''
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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialoguesPage = dialoguesReducer(this._state.dialoguesPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscribe(this._state)
    }
}

export default store;
window.store = store
//store-OOP