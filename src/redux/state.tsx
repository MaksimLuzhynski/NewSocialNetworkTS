
                                        //КОД НИЖЕ НЕ ИСПОЛЬЗУЕТСЯ В РАБОТЕ ПРИЛОЖЕНИЯ



import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"

type PostsType = {
    id: number
    message: string
    likeCounter: number
}
type DialogsType = {
    id: number
    name: string
}
type MessagesType = {
    id: number
    name: string
}
type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string                                        
}
type MessagePageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string

}
type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagePageType
}
type StoreType = {
    _state: StateType
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

type ActionsTypes =
    | AddPostActionType
    | UpdateNewPostTextActionType
    | AddMessageActionType
    | UpdateNewMessageTextActionType

type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}
type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
}

// let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 { id: 0, message: "Hey!", likeCounter: 0 },
//                 { id: 1, message: "How are you?", likeCounter: 15 },
//                 { id: 2, message: "Hellow", likeCounter: 3 },
//                 { id: 3, message: "Yo!!!", likeCounter: 37 },
//             ],
//             newPostText: "Новое сообщение",
//         },

//         messagesPage: {
//             dialogs: [
//                 { id: 1, name: "Max" },
//                 { id: 2, name: "Ales" },
//                 { id: 3, name: "Bob" },
//                 { id: 4, name: "Marta" },
//                 { id: 5, name: "Victor" },
//             ],
//             messages: [
//                 { id: 0, name: "Hi" },
//                 { id: 1, name: "How are you?" },
//                 { id: 2, name: "Yo!" },
//                 { id: 3, name: "Hellow" },
//                 { id: 4, name: "Hey" },
//             ],
//             newMessageText: "Новое сообщение",
//         }
//     },
//     _callSubscriber() {
//         console.log("State changed");
//     },

//     subscribe(observer) {
//         this._callSubscriber = observer;
//     },
//     getState() {
//         return this._state;
//     },

//     dispatch(action) {

//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)

//         this._callSubscriber();
//     }
// }
