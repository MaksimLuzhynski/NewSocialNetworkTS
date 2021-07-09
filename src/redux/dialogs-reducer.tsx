import { ActionsTypes, AddMessageActionType, MessagePageType, UpdateNewMessageTextActionType } from "./state";

const dialogsReducer = (state: MessagePageType, action: ActionsTypes) => {

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