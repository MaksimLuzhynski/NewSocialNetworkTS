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

export function Dialogs() {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                <DialogItem name="Max" id={1} />
                <DialogItem name="Ales" id={2} />
                <DialogItem name="Bob" id={3} />
                <DialogItem name="Marta" id={4} />
                <DialogItem name="Victor" id={5} />
            </div>
            <div className={classes.messages}>
                <Message message="Hi"/>
                <Message message="How are you?"/>
                <Message message="Yo!"/>
                <Message message="Hellow"/>
                <Message message="Hey"/>
            </div>
        </div>)
}