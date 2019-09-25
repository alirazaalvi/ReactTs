import * as React from 'react';
import UserIncrement from './features/users/UserCounter';
import TodoContainer from './features/todos/TodoContainer';
import Input from './controls/Input';
import './App.sass';
//import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="container">
      <div className="App">
        <h1 className="title has-text-centered">
          Boilerplate
        </h1>
        <div className="columns">
          <div className="column is-3">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <Input
                  name="User"
                  placholder="User"
                />
              </div>
            </div>
          </div>
        </div>
        <UserIncrement label="Counter" />
        <TodoContainer />
      </div>
    </div>
  );
}

export default App;
