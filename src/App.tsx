import React from 'react';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { BrowserRouter, Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogsType, MessagesType, PostsType } from './redux/state';

type AppPropsType = {
  posts: Array<PostsType>
  dialogs: Array<DialogsType>
  messages: Array<MessagesType>
  AddNewPost: (text: string) => void
}

function App(props: AppPropsType) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile' render={() => <Profile posts={props.posts} AddNewPost={props.AddNewPost} />}></Route>
          <Route path='/dialogs' render={() => <Dialogs dialogs={props.dialogs} MessageData={props.messages} />}></Route>
          <Route path='/news' render={() => <News />}></Route>
          <Route path='/music' render={() => <Music />}></Route>
          <Route path='/settings' render={() => <Settings />}></Route>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
