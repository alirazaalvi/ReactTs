import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import './index.css';
import Store from './store';
import * as serviceWorker from './serviceWorker';


ReactDOM.render(<Provider store={Store}><App /></Provider>, document.getElementById('root') || document.createElement('div'));
//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
