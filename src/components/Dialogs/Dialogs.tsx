import React from 'react'
import { DialogsDataType, MessageDataType } from '../../index'
import { DialogItem } from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message'

type DialogsPropsType = {
    DialogsData: Array<DialogsDataType>
    MessageData: Array<MessageDataType> 
}

export function Dialogs(props: DialogsPropsType) {

    //типизация???
    let dialogsElements = props.DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
    let messagesElements = props.MessageData.map(messages => <Message message={messages.name} />)

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>)
}