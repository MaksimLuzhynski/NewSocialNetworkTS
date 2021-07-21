import React, { ChangeEvent } from 'react'
import { DialogsType, MessagesType } from '../../redux/state'
import { DialogItem } from './DialogItem/DialogItem'
import classes from './Dialogs.module.css'
import { Message } from './Message/Message'

type DialogsPropsType = {
    dialogs: Array<DialogsType>
    MessageData: Array<MessagesType>
    newMessageText: string
    addMessage: () => void
    onMessageChange: (text: string) => void
}


export function Dialogs(props: DialogsPropsType) {

    let dialogsElements = props.dialogs.map(dialog =>
        <DialogItem
            name={dialog.name}
            id={dialog.id}
        />)
    let messagesElements = props.MessageData.map(messages =>
        <Message
            message={messages.name}
        />)

    let onMessageChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        let text = event.currentTarget.value;
        props.onMessageChange(text);
    }
    let addMessage = () => {
        props.addMessage();
    }

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItem}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                <div>
                    {messagesElements}
                </div>
                <div>
                    <div>
                        <textarea
                            onChange={onMessageChange}
                            value={props.newMessageText}
                        ></textarea>
                    </div>
                    <div>
                        <button onClick={addMessage}>Send</button>
                    </div>
                </div>
            </div>
        </div>)
}