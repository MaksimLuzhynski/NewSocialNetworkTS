import React from 'react';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

let rerenderIntireTree = () => {

  ReactDOM.render(
    <React.StrictMode>
      <App
        posts={store.getState().profilePage.posts}
        newPostText={store.getState().profilePage.newPostText}

        dialogs={store.getState().messagesPage.dialogs}
        messages={store.getState().messagesPage.messages}
        newMessageText={store.getState().messagesPage.newMessageText}

        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderIntireTree();

store.subscribe(rerenderIntireTree);



