import React from 'react'
import { DialogsType, MessagesType } from '../../redux/state'
import { DialogItem } from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message'

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    MessageData: Array<MessagesType> 
}

export function Dialogs(props: DialogsPropsType) {

    //типизация???
    let dialogsElements = props.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
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