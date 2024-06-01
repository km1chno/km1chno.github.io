import React from 'react';
import wrench from './wrench.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={wrench} className="spinning-wrench" alt="logo" />
        <div className="text1">
          oops... there is nothing here
        </div>
        <div className="text2">
          feel free to come back later
        </div>
      </header>
    </div>
  );
}

export default App;
