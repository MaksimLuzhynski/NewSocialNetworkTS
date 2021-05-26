import React from 'react';
import './App.css';


function App() {
  return (
    <div className="app-wrapper">
      <header className="header">
        <img width="70px" height="70px" src="https://st.weblancer.net/download/808276_935xp.jpg" />
      </header>
      <nav className="nav">
        <div><a>Profile</a></div>
        <div><a>Messanges</a></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
      </nav>
      <div className="content">
        <div>
          <img height="700px" src="https://st3.depositphotos.com/10654668/15053/i/600/depositphotos_150535932-stock-photo-one-yellow-tulip.jpg" />
        </div>
        <div>
          ava + description
        </div>
        <div>
          My posts
          <div>
            New posts
            <div>
              <div>post1</div>
              <div>post2</div>
              <div>post3</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
