import * as React from 'react';
import UserIncrement from './features/users/UserIncrement';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Boilerplate
      </header>
      <UserIncrement label="User Counter" />
    </div>
  );
}

export default App;
