import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './Dialogs.module.css'

type DialogItemPropsType = {
    name: string
    id: number
}
type MessagePropsType = {
    message: string
}
type DialogsDataType = {
    id: number
    name: string
}
type MessageDataType = {
    id:number
    name:string
}

export function DialogItem(props: DialogItemPropsType) {
    return (
        <div className={classes.dialog}>
            <NavLink to={"/dialogs/" + props.id} activeClassName={classes.active}> {props.name}</NavLink>
        </div>)
}

export function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}> {props.message}  </div>
    )
}

let DialogsData: Array<DialogsDataType> = [
    { id: 1, name: "Max" },
    { id: 2, name: "Ales" },
    { id: 3, name: "Bob" },
    { id: 4, name: "Marta" },
    { id: 5, name: "Victor" },
]

let MessageData:Array<MessageDataType> = [
    { id: 0, name: "Hi" },
    { id: 1, name: "How are you?" },
    { id: 2, name: "Yo!" },
    { id: 3, name: "Hellow" },
    { id: 4, name: "Hey" },
]
// не забудь про типизацию
export function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
                <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
                <DialogItem name={DialogsData[2].name} id={DialogsData[2].id} />
                <DialogItem name={DialogsData[3].name} id={DialogsData[3].id} />
                <DialogItem name={DialogsData[4].name} id={DialogsData[4].id} />
            </div>
            <div className={classes.messages}>
                <Message message={MessageData[0].name} />
                <Message message={MessageData[1].name} />
                <Message message={MessageData[2].name} />
                <Message message={MessageData[3].name} />
                <Message message={MessageData[4].name} />
            </div>
        </div>)
}