import React from 'react';
import { store, StateType } from './redux/state';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderIntireTree = () => {

  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={store._state.profilePage.posts}
        newPostText={store._state.profilePage.newPostText}
        dialogs={store._state.messagesPage.dialogs}
        messages={store._state.messagesPage.messages}
        AddNewPost={store.AddNewPost.bind(store)}
        UpdateNewPostText={store.UpdateNewPostText.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderIntireTree();

store.subscribe(rerenderIntireTree);



