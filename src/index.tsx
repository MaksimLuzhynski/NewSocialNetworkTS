import React from 'react';
import { store } from './redux/state';
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
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderIntireTree();

store.subscribe(rerenderIntireTree);



