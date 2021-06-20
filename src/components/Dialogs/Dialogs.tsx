import React from 'react'
import { DialogItem } from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message'


type DialogsDataType = {
    id: number
    name: string
}
type MessageDataType = {
    id: number
    name: string
}

let DialogsData: Array<DialogsDataType> = [
    { id: 1, name: "Max" },
    { id: 2, name: "Ales" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Marta" },
    { id: 5, name: "Victor" },
]

let MessageData: Array<MessageDataType> = [
    { id: 0, name: "Hi" },
    { id: 1, name: "How are you?" },
    { id: 2, name: "Yo!" },
    { id: 3, name: "Hellow" },
    { id: 4, name: "Hey" },
]

//типизация???
let dialogsElements = DialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)
let messagesElements = MessageData.map(messages => <Message message={messages.name} />)

export function Dialogs() {
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