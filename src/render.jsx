import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AddNewPost} from './redux/state'
import { UpdateNewPostText} from './redux/state'

export let rerenderIntireTree = (state) => {
  
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




