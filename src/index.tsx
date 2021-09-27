import React from 'react';
import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';


let rerenderIntireTree = () => {

  ReactDOM.render(
    // <React.StrictMode>             //Почему при использовании строгого режима двойная отрисовка пользователей???                  
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    // </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderIntireTree();



