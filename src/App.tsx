import * as React from 'react';
import UserIncrement from './features/users/UserCounter';
import './App.sass';
//import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1 className="title has-text-centered">
          Boilerplate
        </h1>
        <UserIncrement  label="Counter" />
      </div>
    </div>
  );
}

export default App;
