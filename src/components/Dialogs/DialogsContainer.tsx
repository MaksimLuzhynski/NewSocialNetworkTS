import React from 'react'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import StoreContext from '../../StoreContext'
import { Dialogs } from './Dialogs'


export function DialogsContainer() {

    return <StoreContext.Consumer>{
        (store: any) => {  //ТИПИЗАЦИЯ!!! 

            let onMessageChange = (text: string) => {
                store.dispatch(updateNewMessageTextActionCreator(text));
            }
            let addMessage = () => {
                store.dispatch(addMessageActionCreator())
            }
            return <Dialogs
                addMessage={addMessage}
                onMessageChange={onMessageChange}
                newMessageText={store.getState().messagesPage.newMessageText}
                MessageData={store.getState().messagesPage.messages}
                dialogs={store.getState().messagesPage.dialogs}
            />
        }
    }
    </StoreContext.Consumer>
}