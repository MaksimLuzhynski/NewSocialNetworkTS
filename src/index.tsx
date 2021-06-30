import React from 'react';
import { state, StateType, subscribe } from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AddNewPost} from './redux/state'
import { UpdateNewPostText} from './redux/state'

let rerenderIntireTree = (state:StateType) => {
  
  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={state.profilePage.posts}
        newPostText={state.profilePage.newPostText}
        dialogs={state.messagesPage.dialogs}
        messages={state.messagesPage.messages}
        AddNewPost={AddNewPost}
        UpdateNewPostText={UpdateNewPostText}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderIntireTree(state);

subscribe(rerenderIntireTree);


