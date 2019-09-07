import * as React from 'react';
import UserIncrement from './features/users/UserCounter';
import './App.css';
import 'milligram/dist/milligram.css';

function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          Boilerplate
        </header>
        <UserIncrement  label="Counter" />
      </div>
    </div>
  );
}

export default App;
