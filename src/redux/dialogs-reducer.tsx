export type MessagePageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type DialogsType = {
    id: number
    name: string
}
export type MessagesType = {
    id: number
    name: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
}
export type UpdateNewMessageTextActionType = {
    type: 'UPDATE-NEW-MESSAGE-TEXT'
    newMessage: string
}
export type InitialDialogsStateType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

let initialState: InitialDialogsStateType = {
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
    newMessageText: "Новое сообщение",
};

const dialogsReducer = (state: InitialDialogsStateType = initialState, action: AddMessageActionType | UpdateNewMessageTextActionType): InitialDialogsStateType => {

    switch (action.type) {

        case 'ADD-MESSAGE':
            const newMessage = {
                id: 5,
                name: state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = "";
            return state;

        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessage;
            return state;

        default:
            return state;
    }
}

export const addMessageActionCreator = (): AddMessageActionType => (
    { type: 'ADD-MESSAGE' }
)
export const updateNewMessageTextActionCreator = (text: string): UpdateNewMessageTextActionType => (
    {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: text
    }
)

export default dialogsReducer;