import React from 'react';
import './App.css';
import { Header } from './components/Header/Header';
import { Navbar } from './components/Navbar/Navbar';
import { Profile } from './components/Profile/Profile';
import { Route } from 'react-router-dom';
import { News } from './components/News/News';
import { Music } from './components/Music/Music';
import { Settings } from './components/Settings/Settings';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className="app-wrapper-content">
        <Route path='/profile' render={() => <Profile />}></Route>
        <Route path='/dialogs' render={() => <DialogsContainer />}></Route>
        <Route path='/news' render={() => <News />}></Route>
        <Route path='/music' render={() => <Music />}></Route>
        <Route path='/settings' render={() => <Settings />}></Route>
        <Route path='/users' render={() => <UsersContainer />}></Route>
      </div>
    </div>
  );
}

export default App;
