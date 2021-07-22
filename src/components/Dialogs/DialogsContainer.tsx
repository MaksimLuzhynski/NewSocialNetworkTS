import React from 'react'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { addMessageActionCreator, InitialDialogsStateType, updateNewMessageTextActionCreator } from '../../redux/dialogs-reducer'
import { AppStateType } from '../../redux/redux-store'
import { Dialogs } from './Dialogs'


// export function DialogsContainer() {

//     return <StoreContext.Consumer>{
//         (store: any) => {  //ТИПИЗАЦИЯ!!! 

//             let onMessageChange = (text: string) => {
//                 store.dispatch(updateNewMessageTextActionCreator(text));
//             }
//             let addMessage = () => {
//                 store.dispatch(addMessageActionCreator())
//             }
//             return <Dialogs
//                 addMessage={addMessage}
//                 onMessageChange={onMessageChange}
//                 newMessageText={store.getState().messagesPage.newMessageText}
//                 MessageData={store.getState().messagesPage.messages}
//                 dialogs={store.getState().messagesPage.dialogs}
//             />
//         }
//     }
//     </StoreContext.Consumer>
// }


////////////////////////////////////////
type MapStateToPropsType = {

}                                                                   // ДОДЕЛАТЬ !!!
type MapDispatchToPropsType = {
    addMessage: () => void
    onMessageChange: (text: string) => void
}
////////////////////////////////////


const mapStateToProps = (state: AppStateType) => {
    return {
        newMessageText: state.messagesPage.newMessageText,
        MessageData: state.messagesPage.messages,
        dialogs: state.messagesPage.dialogs,
    }
}

const mapDispatchToProps = (dispatch: Dispatch, text: any) => {              //ТИПИЗИРОВАТЬ !!!
    return {
        addMessage: () => { dispatch(addMessageActionCreator()) },
        onMessageChange: () => { dispatch(updateNewMessageTextActionCreator(text)) }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);



