import { rerenderIntireTree } from "../render"

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
}
export type MessagePageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>

}
export type StateType = {
    profilePage: ProfilePageType
    messagesPage: MessagePageType
}

export const state: StateType = {

    profilePage: {
        posts: [
            { id: 0, message: "Hey!", likeCounter: 0 },
            { id: 1, message: "How are you?", likeCounter: 15 },
            { id: 2, message: "Hellow", likeCounter: 3 },
            { id: 3, message: "Yo!!!", likeCounter: 37 },
        ],
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
}

export let AddNewPost = (text: string) => {
    const newPost: PostsType = {
        id: 5,
        message: text,
        likeCounter: 0,
    }
    state.profilePage.posts.push(newPost);
    rerenderIntireTree(state);
}