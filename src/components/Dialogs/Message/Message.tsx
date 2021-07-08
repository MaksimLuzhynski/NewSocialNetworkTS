import React from 'react'
import classes from './Message.module.css'

type MessagePropsType = {
    message: string
}

export function Message(props: MessagePropsType) {
    return (
        <div className={classes.message}> {props.message}</div>
    )
}
