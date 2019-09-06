import * as React from 'react';
import UserIncrement from './features/users/UserIncrement';
import './App.css';
import 'milligram/dist/milligram.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Boilerplate
      </header>
      <UserIncrement  label="Counter" />
    </div>
  );
}

export default App;
