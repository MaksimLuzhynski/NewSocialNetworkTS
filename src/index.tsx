import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type PostDataType = {
  id: number
  message: string
  likeCounter: number
}

export type DialogsDataType = {
  id: number
  name: string
}

export type MessageDataType = {
  id: number
  name: string
}

let PostData: Array<PostDataType> = [
  { id: 0, message: "Hey!", likeCounter: 0 },
  { id: 1, message: "How are you?", likeCounter: 15 },
  { id: 2, message: "Hellow", likeCounter: 3 },
  { id: 3, message: "Yo!!!", likeCounter: 37 },
]

let DialogsData: Array<DialogsDataType> = [
  { id: 1, name: "Max" },
  { id: 2, name: "Ales" },
  { id: 3, name: "Bob" },
  { id: 4, name: "Marta" },
  { id: 5, name: "Victor" },
]

let MessageData: Array<MessageDataType> = [
  { id: 0, name: "Hi" },
  { id: 1, name: "How are you?" },
  { id: 2, name: "Yo!" },
  { id: 3, name: "Hellow" },
  { id: 4, name: "Hey" },
]

ReactDOM.render(
  <React.StrictMode>
    <App
      PostData={PostData}
      DialogsData={DialogsData}
      MessageData={MessageData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
