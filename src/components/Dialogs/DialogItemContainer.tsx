import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import { ActionsTypes, DialogsType, MessagesType } from '../../redux/state'
import { Dialogs } from './Dialogs'


type DialogsPropsType = {
    dialogs: Array<DialogsType>
    MessageData: Array<MessagesType>
    newMessageText: string
    dispatch: (action: ActionsTypes) => void
}

export function DialogsContainer(props: DialogsPropsType) {

    let onMessageChange = (text: string) => {
        props.dispatch(updateNewMessageTextActionCreator(text));
    }
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())
    }

    return (
        <Dialogs
            addMessage={addMessage}
            onMessageChange={onMessageChange}
            MessageData={props.MessageData}
            newMessageText={props.newMessageText}
            dialogs={props.dialogs}
        />
    )
}