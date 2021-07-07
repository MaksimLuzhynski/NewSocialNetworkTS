
export type PostsType = {
    id: number
    message: string
    likeCounter: number
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    name: string
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type MessagePageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>

}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagePageType
}
export type StoreType = {
    _state: StateType
    AddNewPost: () => void
    UpdateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    _callSubscriber: () => void
    getState: () => StateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostActionType | UpdateNewPostTextActionType
type AddPostActionType = {
    type: 'ADD-POST'
}
type UpdateNewPostTextActionType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}


export const addPostActionCreator = (): AddPostActionType => (
    { type: 'ADD-POST' }
)
export const updateNewPostTextActionCreator = (text: string): UpdateNewPostTextActionType => (
    {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: text
    }
)

export let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                { id: 0, message: "Hey!", likeCounter: 0 },
                { id: 1, message: "How are you?", likeCounter: 15 },
                { id: 2, message: "Hellow", likeCounter: 3 },
                { id: 3, message: "Yo!!!", likeCounter: 37 },
            ],
            newPostText: "Новое сообщение",
        },

        messagesPage: {
            dialogs: [
                { id: 1, name: "Max" },
                { id: 2, name: "Ales" },
                { id: 3, name: "Bob" },
                { id: 4, name: "Marta" },
                { id: 5, name: "Victor" },
            ],
            messages: [
                { id: 0, name: "Hi" },
                { id: 1, name: "How are you?" },
                { id: 2, name: "Yo!" },
                { id: 3, name: "Hellow" },
                { id: 4, name: "Hey" },
            ],
        }
    },
    _callSubscriber() {
        console.log("State changed");
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state;
    },

    AddNewPost() {
        const newPost: PostsType = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likeCounter: 0,
        }
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = "";
        this._callSubscriber();
    },
    UpdateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber();
    },

    dispatch(action) {
        if (action.type === 'ADD-POST') {
            const newPost: PostsType = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likeCounter: 0,
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = "";
            this._callSubscriber();
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber();
        }
    }
}
